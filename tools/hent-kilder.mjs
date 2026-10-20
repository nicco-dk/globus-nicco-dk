#!/usr/bin/env node
// Henter de faste kilder til smittekørslen og skriver kildens egen tekst ud, så kørslen
// ikke skal lede efter adresser hver gang.
//
//   node tools/hent-kilder.mjs            alle kilder
//   node tools/hent-kilder.mjs dghs lk    kun de nævnte kilder
//   node tools/hent-kilder.mjs --liste    vis kildernes navne
//
// Scriptet bruger ingen AI og regner ingen tal ud. Det skriver adressen og de linjer fra
// kilden, hvor tallene står, ordret. Kørslen læser tallene dér og skriver dem i datasættet
// efter reglerne i OPDATERING.md. Står et tal ikke i udtrækket, så åbn adressen og læs
// det i kilden selv. Fejler en kilde, står det i udtrækket, og de andre hentes alligevel.
//
// Kræver curl og pdftotext (poppler-utils). Læser site/index.html, men ændrer ingen filer i repoet.

import { execFile } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const MAPPE = mkdtempSync(join(tmpdir(), 'hent-kilder-'));
process.on('exit', () => { try { rmSync(MAPPE, { recursive: true, force: true }); } catch {} });

function kør(cmd, args, opts = {}) {
  return new Promise((ok) => execFile(cmd, args, { maxBuffer: 64 * 1024 * 1024, encoding: opts.encoding || 'utf8', timeout: 90000 },
    (err, stdout) => ok(err ? { fejl: err.message.split('\n')[0], ud: stdout } : { ud: stdout })));
}
// Henter en adresse med curl. Giver teksten, eller null og en fejl.
async function hent(url) {
  const r = await kør('curl', ['-sSL', '--retry', '3', '--retry-all-errors', '--max-time', '45', '-A', 'Mozilla/5.0 (globus.nicco.dk hent-kilder)', '-w', '\n%{http_code}', url]);
  if (r.fejl) return { fejl: r.fejl };
  const i = r.ud.lastIndexOf('\n');
  const kode = +r.ud.slice(i + 1);
  return kode >= 200 && kode < 300 ? { tekst: r.ud.slice(0, i), kode } : { fejl: `HTTP ${kode}`, kode };
}
async function findes(url) {
  const r = await kør('curl', ['-sSL', '-o', '/dev/null', '--max-time', '30', '-A', 'Mozilla/5.0', '-w', '%{http_code} %{content_type}', url]);
  const [kode, type] = (r.ud || '').split(' ');
  return +kode === 200 && !/xml|html/.test(type || '');
}
// Henter en PDF og giver dens tekst med layout.
async function pdfTekst(url, sider = '') {
  const fil = join(MAPPE, `${Math.random().toString(36).slice(2)}.pdf`);
  const h = await kør('curl', ['-sSL', '--retry', '3', '--retry-all-errors', '--max-time', '60', '-A', 'Mozilla/5.0', '-o', fil, '-w', '%{http_code}', url]);
  if (h.fejl || +h.ud !== 200) return { fejl: h.fejl || `HTTP ${h.ud}` };
  const args = ['-layout'];
  if (sider) args.push('-f', String(sider[0]), '-l', String(sider[1]));
  const r = await kør('pdftotext', [...args, fil, '-']);
  return r.fejl ? { fejl: `pdftotext: ${r.fejl}` } : { tekst: r.ud };
}
const ren = (html) => html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#0?39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
const linjer = (t, n) => t.split('\n').map((l) => l.replace(/\s+$/, '')).filter((l) => l.trim()).slice(0, n);
const pad = (n) => String(n).padStart(2, '0');
const dagStr = (d) => `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}`;
function isoUge(d) {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const dag = t.getUTCDay() || 7; t.setUTCDate(t.getUTCDate() + 4 - dag);
  return [t.getUTCFullYear(), Math.ceil(((t - Date.UTC(t.getUTCFullYear(), 0, 1)) / 864e5 + 1) / 7)];
}
const NU = new Date();
const AAR = NU.getUTCFullYear();

// ---------- kilderne ----------
const KILDER = {
  async who() {
    const u = `https://www.who.int/api/news/diseaseoutbreaknews?sf_culture=en&$orderby=PublicationDateAndTime%20desc&$top=10&$select=Title,PublicationDateAndTime,DonId`;
    const r = await hent(u);
    if (r.fejl) return [`FEJL ${r.fejl}: ${u}`];
    const d = JSON.parse(r.tekst).value || [];
    return ['De seneste 10. Læserens side: https://www.who.int/emergencies/disease-outbreak-news/item/<DonId>',
      ...d.map((v) => `${v.PublicationDateAndTime.slice(0, 10)}  ${v.DonId}  ${v.Title}`)];
  },

  // DGHS, Bangladesh: mæslinger. Pressemeddelelsen viser en PDF, hvis adresse står i sidens kildekode.
  // DGHS lægger af og til flere meddelelser ud på én gang (17. oktober: 14., 15. og 16. oktober). Scriptet viser
  // derfor alle meddelelser, der er nyere end den nyeste, `maesling-bd` i site/index.html allerede bruger,
  // ældste først, og ellers den nyeste (ejerens afgørelse 20. oktober).
  async dghs() {
    const liste = 'https://dghs.gov.bd/pages/press-releases';
    const r = await hent(liste);
    if (r.fejl) return [`FEJL ${r.fejl}: ${liste}`];
    const ids = [...new Set([...r.tekst.matchAll(/press-releases\/(?:[^"'\s<>]*?-)?([0-9a-f]{24})/g)].map((m) => m[1]))].sort(); // Id'erne stiger med tiden.
    if (!ids.length) return [`Ingen pressemeddelelser fundet på ${liste}`];
    let kendt = null;
    try {
      const html = readFileSync(new URL('../site/index.html', import.meta.url), 'utf8');
      const i = html.indexOf("{id:'maesling-bd'"), j = html.indexOf('\n{id:', i + 5);
      const brugt = i >= 0 ? [...html.slice(i, j > i ? j : undefined).matchAll(/dghs\.gov\.bd\/pages\/press-releases\/(?:[^"'\s<>]*?-)?([0-9a-f]{24})/g)].map((m) => m[1]).sort() : [];
      kendt = brugt.at(-1) || null;
    } catch {}
    const nye = kendt ? ids.filter((x) => x > kendt) : [];
    const valgte = nye.length ? nye.slice(-6) : [ids.at(-1)];
    const iListe = new Set(r.tekst.match(/https:\/\/objectstorage[^"'\s<>]+\.pdf/g) || []);
    const ud = [kendt
      ? (nye.length ? `${nye.length} meddelelse(r) nyere end den nyeste i maesling-bd (${kendt}), ældste først${nye.length > 6 ? '. Kun de seneste 6 vises' : ''}:` : `Ingen meddelelser nyere end den nyeste i maesling-bd (${kendt}). Den nyeste på listen vises:`)
      : 'maesling-bd blev ikke fundet i site/index.html. Den nyeste meddelelse vises:'];
    for (const id of valgte) {
      const side = `https://dghs.gov.bd/pages/press-releases/${id}`;
      ud.push('', `Meddelelse (kilde i datasættet): ${side}`);
      const s = await hent(side);
      if (s.fejl) { ud.push(`FEJL ${s.fejl}`); continue; }
      const titel = (s.tekst.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1];
      if (titel) ud.push(`Titel: ${ren(titel)}`);
      const pdf = (s.tekst.match(/https:\/\/objectstorage[^"'\s<>]+\.pdf/g) || []).filter((u) => !iListe.has(u)).at(-1);
      if (!pdf) { ud.push('Ingen PDF fundet i meddelelsen. Åbn siden og find bilaget.'); continue; }
      ud.push(`PDF: ${pdf}`);
      const p = await pdfTekst(pdf, [1, 1]);
      if (p.fejl) { ud.push(`FEJL ${p.fejl}`); continue; }
      const l = linjer(p.tekst, 80);
      const dato = l.find((x) => /অক্টোবর|সেপ্টেম্বর|নভেম্বর|ডিসেম্বর|\d{4}/.test(x) && x.length < 140);
      ud.push(`Dato i overskriften: ${dato ? dato.trim() : 'ikke fundet'}`);
      ud.push('Tabel 1, i rækkefølge: nye mistænkte på 24 timer, mistænkte i alt siden 15. marts, nye bekræftede på 24 timer, bekræftede i alt, indlagte i alt, udskrevne i alt:');
      // Linjer med kun tal. Den første er tabel 1. I tabel 2 står antal pr. division og distrikt foran,
      // når de er tal, så de fire sidste tal er dødsfaldene.
      const talLinjer = l.filter((x) => /^\s*[\d,]+(\s+[\d,]+){3,}\s*$/.test(x)).map((x) => x.trim().split(/\s+/));
      const t1 = talLinjer.find((x) => x.length === 6);
      const t2 = talLinjer.find((x) => x !== t1);
      ud.push('  ' + (t1 ? t1.join('   ') : 'ikke fundet'));
      ud.push('Tabel 2, i rækkefølge: mistænkte dødsfald på 24 timer, mistænkte dødsfald i alt, bekræftede dødsfald på 24 timer, bekræftede dødsfald i alt:');
      ud.push('  ' + (t2 ? t2.slice(-4).join('   ') : 'ikke fundet'));
    }
    ud.push('', 'Rækkefølgen er læst af tabellens kolonneoverskrifter. Læs tallene i PDF\'en, hvis linjerne mangler eller ser forkerte ud.');
    return ud;
  },

  // DGHS, Bangladesh: dengue. Dashboardet viser ugens og årets tal øverst.
  async dengue() {
    const u = 'https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php';
    const r = await hent(u);
    if (r.fejl) return [`FEJL ${r.fejl}: ${u}`];
    const t = ren(r.tekst);
    const top = (t.match(/Last Updated:\s*(\S+)\s+(W\d+:\s*[\d,]+\s+[\d,]+\s+[\d,]+\s+[\d,]+)/) || []);
    const total = [...t.matchAll(/Grand Total\s+([\d,]+)\s+([\d,]+)\s+([\d,]+)/g)].slice(0, 2).map((m) => m[3]);
    return [`Kilde: ${u}`,
      `Sidst opdateret: ${top[1] || 'ikke fundet'}`,
      `Øverst, i rækkefølge: ugens tilfælde, ugens dødsfald, tilfælde i alt i år, dødsfald i alt i år: ${top[2] || 'ikke fundet'}`,
      `Seneste 24 timer (sum i aldersfordelingen), tilfælde og dødsfald: ${total.join(' og ') || 'ikke fundet'}`];
  },

  // Sri Lanka, National Dengue Control Unit. Filnavnet skifter, så adressen tages fra forsiden.
  async lk() {
    const forside = 'https://www.dengue.health.gov.lk/';
    const r = await hent(forside);
    if (r.fejl) return [`FEJL ${r.fejl}: ${forside}`];
    const pdfs = [...new Set(r.tekst.match(/https?:\/\/www\.dengue\.health\.gov\.lk\/wp-content\/uploads\/\d{4}\/\d{2}\/Daily-Update[^"'\s<>]+\.pdf/g) || [])];
    if (!pdfs.length) return [`Ingen dagsopgørelse fundet på ${forside}`];
    const u = pdfs.at(-1).replace(/^http:/, 'https:');
    const p = await pdfTekst(u);
    if (p.fejl) return [`FEJL ${p.fejl}: ${u}`];
    const l = linjer(p.tekst, 60);
    return [`Kilde: ${u}`, ...l.filter((x) => /As of|^\s*\d{4}\s+\d|Dengue Deaths|Gampaha|Colombo|October|Fatality/.test(x)).map((x) => '  ' + x.trim())];
  },

  // WHO SEARO's epidemiologiske bulletin, hver anden uge. Nummeret står i adressen.
  async searo() {
    let fundet = 0;
    for (let n = 30; n >= 1 && !fundet; n--) {
      if (await findes(`https://cdn.who.int/media/docs/default-source/searo/whe/wherepib/${AAR}_${n}_searo_epi_bulletin.pdf`)) fundet = n;
    }
    if (!fundet) return ['Ingen bulletin fundet'];
    const u = `https://cdn.who.int/media/docs/default-source/searo/whe/wherepib/${AAR}_${fundet}_searo_epi_bulletin.pdf`;
    const p = await pdfTekst(u, [1, 3]);
    if (p.fejl) return [`FEJL ${p.fejl}: ${u}`];
    const l = linjer(p.tekst, 120);
    return [`Kilde: ${u}`, ...l.filter((x) => /edition|Reporting period|^\s{0,6}\S.*\.{5,}\s*\d+$|As of|total of/.test(x)).slice(0, 30).map((x) => '  ' + x.trim().replace(/\.{5,}/, ' ... '))];
  },

  // WHO WPRO's ugentlige oversigt over fugleinfluenza. Fredagens dato står i adressen.
  async wpro() {
    let u = null;
    for (let i = 0; i < 21 && !u; i++) {
      const d = new Date(NU.getTime() - i * 864e5);
      const kand = `https://cdn.who.int/media/docs/default-source/wpro---documents/emergency/surveillance/avian-influenza/ai_${dagStr(d)}.pdf`;
      if (await findes(kand)) u = kand;
    }
    if (!u) return ['Ingen oversigt fundet de sidste 21 dage'];
    const p = await pdfTekst(u, [1, 2]);
    if (p.fejl) return [`FEJL ${p.fejl}: ${u}`];
    const t = p.tekst.replace(/\s+/g, ' ');
    const saetn = t.split(/(?<=\.)\s+(?=[A-Z])/).filter((s) => /Weekly Update Number|new case|last case|total of/.test(s)).slice(0, 12);
    return [`Kilde: ${u}`, ...saetn.map((s) => '  ' + s.trim())];
  },

  // ECDC's ugentlige Communicable Disease Threats Report, om fredagen.
  async ecdc() {
    for (let i = 0; i < 4; i++) {
      const [aar, uge] = isoUge(new Date(NU.getTime() - i * 7 * 864e5));
      const u = `https://www.ecdc.europa.eu/sites/default/files/documents/communicable-disease-threats-report-week-${uge}-${aar}.pdf`;
      if (!(await findes(u))) continue;
      const p = await pdfTekst(u, [1, 2]);
      if (p.fejl) return [`FEJL ${p.fejl}: ${u}`];
      return [`Kilde: ${u}`, ...linjer(p.tekst, 80).filter((x) => /^\s*\S.{3,}\s{2,}\d+\s*$|Week \d+|period/.test(x)).slice(0, 30).map((x) => '  ' + x.trim())];
    }
    return ['Ingen ugerapport fundet de sidste fire uger'];
  },

  async ukhsa() {
    const u = 'https://www.gov.uk/api/search.json?filter_organisations=uk-health-security-agency&order=-public_timestamp&count=15&fields=title,public_timestamp,link';
    const r = await hent(u);
    if (r.fejl) return [`FEJL ${r.fejl}: ${u}`];
    return (JSON.parse(r.tekst).results || []).map((x) => `${x.public_timestamp.slice(0, 10)}  ${x.title}  https://www.gov.uk${x.link}`);
  },

  async nathnac() {
    const u = 'https://travelhealthpro.org.uk/rss-outbreaks.php';
    const r = await hent(u);
    if (r.fejl) return [`FEJL ${r.fejl}: ${u}`];
    return [...r.tekst.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 20).map((m) => {
      const f = (k) => ((m[1].match(new RegExp(`<${k}>([\\s\\S]*?)</${k}>`)) || [])[1] || '').replace(/<!\[CDATA\[|\]\]>/g, '').trim();
      return `${f('pubDate').slice(5, 16)}  ${f('title')}: ${f('description')}`;
    });
  },

  async ont() {
    const u = 'https://outbreaknewstoday.substack.com/api/v1/archive?sort=new&limit=25';
    const r = await hent(u);
    if (r.fejl) return [`FEJL ${r.fejl}: ${u}`];
    return JSON.parse(r.tekst).map((p) => `${p.post_date.slice(0, 10)}  ${p.title}  ${p.canonical_url}`);
  },

  async cidrap() {
    const u = 'https://www.cidrap.umn.edu/all-news?page=0';
    const r = await hent(u);
    if (r.fejl) return [`FEJL ${r.fejl}: ${u}`];
    // Overskrifterne står uden link i listen. Søg efter artiklen på cidrap.umn.edu for at læse den.
    return [`Kilde: ${u}`, ...[...r.tekst.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => ren(m[1])).filter(Boolean).slice(0, 25)];
  },

  // Hongkongs pressemeddelelser i dag og i går, kun dem om smitte og sundhed.
  async hk() {
    const ud = [];
    for (let i = 0; i < 2; i++) {
      const d = new Date(NU.getTime() - i * 864e5);
      const s = dagStr(d);
      const u = `https://www.info.gov.hk/gia/general/${s.slice(0, 6)}/${s.slice(6)}.htm`;
      const r = await hent(u);
      if (r.fejl) { ud.push(`FEJL ${r.fejl}: ${u}`); continue; }
      for (const m of r.tekst.matchAll(/<a[^>]+href="(\/gia\/general\/[^"]+\.htm)"[^>]*>([\s\S]*?)<\/a>/g)) {
        const titel = ren(m[2]);
        if (/CHP|DH |Department of Health|mpox|measles|influenza|dengue|chikungunya|infection|outbreak|virus|disease|cholera|legionn|food poisoning/i.test(titel)) {
          ud.push(`${s}  ${titel}  https://www.info.gov.hk${m[1]}`);
        }
      }
    }
    return ud.length ? ud : ['Intet om smitte i dag og i går'];
  },
};

// ---------- kørsel ----------
const args = process.argv.slice(2);
if (args.includes('--liste')) { console.log(Object.keys(KILDER).join(' ')); process.exit(0); }
const valgt = args.length ? args.filter((a) => KILDER[a]) : Object.keys(KILDER);
const ukendt = args.filter((a) => !KILDER[a]);
if (ukendt.length) console.error(`Ukendte kilder: ${ukendt.join(', ')}. Brug --liste.`);

const res = await Promise.all(valgt.map(async (k) => {
  try { return [k, await KILDER[k]()]; } catch (err) { return [k, [`FEJL ${err.message}`]]; }
}));
console.log(`# Udtræk af faste kilder, hentet ${NU.toISOString().slice(0, 16)}Z. Tallene er kildens egne. Læs dem i kilden, før de skrives.`);
for (const [k, l] of res) { console.log(`\n## ${k}`); for (const x of l) console.log(x); }
