#!/usr/bin/env node
// Mediesporet for krig og konflikt.
//
//   node tools/hent-medier.mjs site [--forrige https://globus.nicco.dk/medier-tal.json]
//
// Læser GDELT 2.0's 15-minutters-filer (hændelser og omtaler), finder hændelser mellem
// to lande af typen kamp, angreb eller massevold (rød) og militær hjælp (gul) og tæller,
// hvilke medier fra vores egen liste (tools/medier.json) der har skrevet om dem.
// Optællingen gemmes i site/medier-tal.json, så næste kørsel kan fortsætte, hvor den slap.
// Derudover læses overskrifter fra store medier, som GDELT dækker dårligt (tools/overskrifter.json).
// Stregerne skrives til site/konflikter.json efter reglerne nedenfor. Ingen AI i dette trin.
//
// Regler (står også i OPDATERING.md):
//   Mistanke:   mindst 2 medier fra listen i vinduet.
//   Bekræftet:  mindst 5 medier fra listen, fra mindst 3 lande uden for parternes egne,
//               nævnt på mindst 3 forskellige dage, OG parret er godkendt i tools/par-tjek.json.
//   Afventer:   tærsklen for bekræftet er nået, men parret er ikke tjekket endnu. Vises som mistanke.
//   Afvist:     parret står under afvist i tools/par-tjek.json og vises ikke i 30 dage fra datoen.
//   Vindue:     7 dage for konflikt, 30 dage for militær støtte.

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { execFileSync, execFile } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const UD = process.argv[2];
if (!UD) { console.error('Brug: node tools/hent-medier.mjs site [--forrige URL]'); process.exit(2); }
const fi = process.argv.indexOf('--forrige');
const FORRIGE = fi > 0 ? process.argv[fi + 1] : null;

const LANDE = JSON.parse(readFileSync(new URL('./lande.json', import.meta.url), 'utf8')).lande;
const MEDIER = JSON.parse(readFileSync(new URL('./medier.json', import.meta.url), 'utf8')).medier;
const TJEK = JSON.parse(readFileSync(new URL('./par-tjek.json', import.meta.url), 'utf8'));
// Et afvist par udløber efter 30 dage og vurderes igen, hvis tærsklen nås på ny (ejerens beslutning 13. oktober 2026).
// Et par uden gyldig dato regnes som afvist, så intet dukker op ved en fejl.
const AFVIST_DAGE = 30;
const afvistNu = k => { const x = TJEK.afvist?.[k]; if (!x) return false; const t = Date.parse(x.dato || ''); return !t || Date.now() - t < AFVIST_DAGE * 86400000; };
const I3 = new Map(Object.entries(LANDE).map(([a2, L]) => [L.i3, a2]));

const VINDUE = { konflikt: 7, militaer: 30 };
const MIN_MISTANKE = 2, MIN_MEDIER = 5, MIN_LANDE = 3, MIN_DAGE = 3;
const MAKS_FILER = +(process.env.MAKS_FILER || 700);          // højst så mange kvarterer pr. kørsel (ca. 7 døgn)
const CACHE_DAGE = 7;            // hvor længe en hændelse huskes, så senere omtaler kan kobles på
const MAKS_ARTIKLER = 12;
const VERSION = 5;
const NU = new Date(), DAG = 864e5;
const dagStr = ms => new Date(ms).toISOString().slice(0, 10);
const stamp = d => d.toISOString().replace(/[-:T]/g, '').slice(0, 14);
const fraStamp = s => Date.UTC(+s.slice(0, 4), +s.slice(4, 6) - 1, +s.slice(6, 8), +s.slice(8, 10), +s.slice(10, 12));

// ---------- forrige tilstand ----------
let T = { v: VERSION, sidste: null, ev: {}, p: {}, hv: {}, g: {}, gd: {}, gi: {} };
if (FORRIGE) {
  try {
    const r = await fetch(FORRIGE + (FORRIGE.includes('?') ? '&' : '?') + 'v=' + Date.now(), { signal: AbortSignal.timeout(30000) });
    if (r.ok) { const j = await r.json(); if (j.v === VERSION) T = j; }
    console.log(T.sidste ? `Fortsætter efter ${T.sidste}.` : 'Ingen brugbar forrige tilstand. Starter forfra.');
  } catch (e) { console.log(`Forrige tilstand kunne ikke læses (${e.message}). Starter forfra.`); }
}

// ---------- hvilke kvarterer mangler ----------
const seneste = Math.floor((NU.getTime() - 20 * 6e4) / 9e5) * 9e5; // GDELT udgiver ca. 15 min. efter kvarteret
let start = T.sidste ? fraStamp(T.sidste) + 9e5 : seneste - VINDUE.konflikt * DAG;
if ((seneste - start) / 9e5 > MAKS_FILER) start = seneste - (MAKS_FILER - 1) * 9e5;
const kvarterer = [];
for (let t = start; t <= seneste; t += 9e5) kvarterer.push(stamp(new Date(t)));
console.log(`${kvarterer.length} kvarterer at hente.`);

// ---------- hent og læs ----------
const TMP = join(tmpdir(), 'gdelt-' + process.pid); mkdirSync(TMP, { recursive: true });
async function hentZip(navn) {
  const url = `http://data.gdeltproject.org/gdeltv2/${navn}.zip`;
  for (let i = 0; i < 2; i++) {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(60000) });
      if (r.status === 404) return null;
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const fil = join(TMP, navn + '.zip'); writeFileSync(fil, Buffer.from(await r.arrayBuffer()));
      const txt = execFileSync('unzip', ['-p', fil], { maxBuffer: 256 * 1024 * 1024 }).toString('utf8');
      rmSync(fil); return txt;
    } catch (e) { if (i) { console.log(`::warning::${navn}: ${e.message}`); return null; } }
  }
}
async function iKoe(liste, n, f) {
  const ud = new Array(liste.length); let i = 0;
  await Promise.all(Array.from({ length: n }, async () => { while (i < liste.length) { const j = i++; ud[j] = await f(liste[j]); } }));
  return ud;
}
const dom = s => (s || '').toLowerCase().replace(/^www\./, '');

let antalEv = 0, antalOmt = 0, mangler = 0, sidsteOk = T.sidste;
// I rækkefølge, så omtaler kan kobles til hændelser fra tidligere kvarterer.
for (let i = 0; i < kvarterer.length; i += 12) {
  const bid = kvarterer.slice(i, i + 12);
  const filer = await iKoe(bid, 6, async k => [await hentZip(`${k}.export.CSV`), await hentZip(`${k}.mentions.CSV`)]);
  bid.forEach((k, j) => {
    const [ex, me] = filer[j];
    if (!ex || !me) { mangler++; return; }
    const dagK = dagStr(fraStamp(k));
    for (const linje of ex.split('\n')) {
      const c = linje.split('\t'); if (c.length < 61) continue;
      // Varmekortet: steder på by- eller regionsniveau (GDELT's geotype 3 til 5; type 2 er en amerikansk delstats midtpunkt),
      // også interne konflikter. Huskes et døgn, så omtaler kan kobles på.
      // Kun kampe med væbnede parter: kode 19x og 20x eller bombeangreb (183), og mindst én part er
      // militær, oprørere, opstandsgruppe, separatister eller anden væbnet gruppe. Det holder almindelig
      // kriminalitet og overført brug af ord som "fight" ude.
      const vaebnet = /^(MIL|REB|INS|SEP|UAF)/.test(c[12]) || /^(MIL|REB|INS|SEP|UAF)/.test(c[22]) || /^(MIL|REB|INS|SEP|UAF)/.test(c[13]) || /^(MIL|REB|INS|SEP|UAF)/.test(c[23]);
      // Stedets navn (fx "Fort Hood, Texas, United States"), parternes lande og parternes type huskes,
      // så en prik kan vise, hvad der er omtalt netop dér.
      const hvMed = t => [+c[56], +c[57], dagK, t, c[52] || '', I3.get(c[7]) || '', I3.get(c[17]) || '', (c[12] || '').slice(0, 3), (c[22] || '').slice(0, 3)];
      if ((c[28] === '19' || c[28] === '20' || c[26] === '183') && vaebnet && +c[51] > 2 && c[56] && c[57]) T.hv[c[0]] = hvMed('k');
      // Demonstrationer og protester (rod 14) tælles for sig.
      else if (c[28] === '14' && +c[51] > 2 && c[56] && c[57]) T.hv[c[0]] = hvMed('d');
      const a = I3.get(c[7]), b = I3.get(c[17]); if (!a || !b || a === b) continue;
      const kode = c[26], rod = c[28];
      let type = null;
      if (rod === '18' || rod === '19' || rod === '20') type = 'konflikt';
      else if (kode === '072') type = 'militaer';
      if (!type) continue;
      T.ev[c[0]] = [type, a, b, dagK]; antalEv++;
    }
    for (const linje of me.split('\n')) {
      const c = linje.split('\t'); if (c.length < 6) continue;
      const hv = T.hv[c[0]], e = T.ev[c[0]]; if (!e && !hv) continue;
      const d = dom(c[4]); if (!MEDIER[d]) continue;
      if (hv) {
        // Celler på et halvt grad. Hver omtale fra et medie på listen tæller én.
        const G = hv[3] === 'd' ? T.gd : T.g;
        const celle = `${Math.round(hv[0] * 2) / 2},${Math.round(hv[1] * 2) / 2}`, g = G[hv[2]] || (G[hv[2]] = {});
        g[celle] = (g[celle] || 0) + 1;
        // Hvad der er omtalt i cellen: stednavne, medier, artikler, parternes lande og type.
        const I = T.gi[hv[2]] || (T.gi[hv[2]] = {}), o = I[hv[3] + celle] || (I[hv[3] + celle] = { n: {}, a: [], l: {}, p: {}, m: [] });
        if (hv[4]) o.n[hv[4]] = (o.n[hv[4]] || 0) + 1;
        if (!o.m.includes(d)) o.m.push(d);
        for (const x of [hv[5], hv[6]]) if (x) o.l[x] = (o.l[x] || 0) + 1;
        for (const x of [hv[7], hv[8]]) if (x) o.p[x] = (o.p[x] || 0) + 1;
        if (/^https?:\/\//.test(c[5]) && !o.a.some(x => x[1] === d)) { o.a.unshift([c[5], d]); o.a = o.a.slice(0, 6); }
      }
      if (!e) continue;
      const [type, a, b] = e;
      const nogle = type === 'konflikt' ? [a, b].sort().join('-') : `${a}>${b}`;
      const p = T.p[nogle] || (T.p[nogle] = { t: type, a: type === 'konflikt' ? [a, b].sort()[0] : a, b: type === 'konflikt' ? [a, b].sort()[1] : b, d: {}, art: [] });
      const dag = c[2] && c[2].length >= 8 ? `${c[2].slice(0, 4)}-${c[2].slice(4, 6)}-${c[2].slice(6, 8)}` : dagK;
      const liste = p.d[dag] || (p.d[dag] = []);
      if (!liste.includes(d)) liste.push(d);
      const url = c[5];
      if (/^https?:\/\//.test(url) && !p.art.some(x => x[0] === url)) { p.art.unshift([url, d, dag]); p.art = p.art.slice(0, MAKS_ARTIKLER); }
      antalOmt++;
    }
    sidsteOk = k;
  });
}
rmSync(TMP, { recursive: true, force: true });
T.sidste = sidsteOk;
console.log(`${antalEv} hændelser og ${antalOmt} omtaler fra listen. ${mangler} kvarterer manglede hos GDELT.`);

const ALLE_OVERSKRIFTER = [];
// ---------- overskrifter fra store medier ----------
// Reuters, AP, CNN, New York Times og andre, som GDELT dækker dårligt. Overskriften (og for RSS
// også resuméet) skal nævne to eller tre lande og et ord for kamp eller angreb. Så tæller mediet
// med for parret, præcis som en omtale i GDELT. Kun røde streger. Militær støtte kræver GDELT.
{
  const KILDER = JSON.parse(readFileSync(new URL('./overskrifter.json', import.meta.url), 'utf8')).kilder;
  const ORD = JSON.parse(readFileSync(new URL('./ord.json', import.meta.url), 'utf8')).lande;
  const KAMP = {
    en: /\b(attack(s|ed|ing)?|strike[sd]?|air ?strikes?|missiles?|drones?|shell(s|ed|ing)|bomb(s|ed|ing|ardment)?|invasion|invade[sd]?|war|warplanes?|fighting|fight(s)?|clash(es|ed)?|troops|offensive|incursion|killed|kills|ceasefire|truce|front ?line|artillery|rockets?|militants?|insurgen\w*)\b/i,
    da: /\b(angreb\w*|krig\w*|kamp(e|ene)?|missil\w*|droner?\w*|bomb\w*|dræbt\w*|invasion\w*|våbenhvile\w*|tropper\w*|offensiv\w*|beskyd\w*|luftangreb\w*|raket\w*)\b/i
  };
  // Navne, længste først, så "Papua New Guinea" ikke også tæller som "Guinea".
  const navne = { en: [], da: [] };
  for (const [a2, o] of Object.entries(ORD)) {
    for (const n of [...o.en, ...o.dem, ...o.hoved]) navne.en.push([n, a2]);
    for (const n of o.da) navne.da.push([n, a2]);
  }
  for (const k in navne) navne[k].sort((x, y) => y[0].length - x[0].length);
  const esc = t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = {};
  for (const k in navne) re[k] = navne[k].map(([n, a2]) => [new RegExp(`(^|[^\\p{L}])${esc(n)}(?=$|[^\\p{L}])`, 'u'), a2]);
  const lande = (tekst, sprog) => {
    let t = tekst; const fundet = new Set();
    for (const [r, a2] of re[sprog]) { if (r.test(t)) { fundet.add(a2); t = t.replace(r, '$1 '); } }
    return [...fundet];
  };
  const ent = x => x.replace(/<!\[CDATA\[|\]\]>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d)).replace(/<[^>]+>/g, ' ');
  const tag = (x, n) => { const m = x.match(new RegExp(`<${n}(?:\\s[^>]*)?>([\\s\\S]*?)</${n}>`)); return m ? ent(m[1]).trim() : ''; };
  let artikler = 0, traef = 0, fejl = 0;
  const graenseDag = dagStr(NU.getTime() - VINDUE.konflikt * DAG);
  await iKoe(KILDER, 4, async k => {
    if (!MEDIER[k.domaene]) return;
    let xml;
    // Hentes med curl: flere af medierne afviser Nodes indbyggede fetch, men ikke curl.
    try {
      xml = await new Promise((ok, nej) => execFile('curl', ['-sSL', '--fail', '--max-time', '30', '-A', 'Mozilla/5.0 (compatible; globus.nicco.dk feedlaeser)', k.url],
        { maxBuffer: 64 * 1024 * 1024 }, (e, ud) => e ? nej(new Error(String(e.message).split('\n').pop() || 'curl fejlede')) : ok(ud)));
    } catch (e) { fejl++; console.log(`::warning::overskrifter ${k.domaene}: ${e.message}`); return; }
    const poster = k.type === 'sitemap' ? xml.split('<url>').slice(1) : xml.split(/<item[\s>]/).slice(1);
    for (const p of poster) {
      let titel, link, dato, tekst;
      if (k.type === 'sitemap') { titel = tag(p, 'news:title'); link = tag(p, 'loc'); dato = tag(p, 'news:publication_date'); tekst = titel; }
      else { titel = tag(p, 'title'); link = tag(p, 'link'); dato = tag(p, 'pubDate') || tag(p, 'dc:date'); tekst = titel + ' ' + (k.type === 'rss' ? tag(p, 'description') : ''); }
      if (k.type === 'gnews') titel = titel.replace(/\s+-\s+[^-]+$/, '');
      const ms = Date.parse(dato); if (!titel || !link || !Number.isFinite(ms)) continue;
      const dag = dagStr(ms); if (dag < graenseDag) continue;
      artikler++;
      const sprog = k.sprog || 'en';
      // Alle overskrifter gemmes til "Læs mere" (tools/hent-laes.mjs), også dem uden kamp.
      ALLE_OVERSKRIFTER.push({ t: titel.slice(0, 200), u: link, d: k.domaene, dag, sprog, l: lande(tekst, sprog) });
      if (!KAMP[sprog].test(tekst)) continue;
      const fl = lande(tekst, sprog);
      if (fl.length < 2 || fl.length > 3) continue;
      traef++;
      for (let i = 0; i < fl.length; i++) for (let j = i + 1; j < fl.length; j++) {
        const [a, b] = [fl[i], fl[j]].sort(), nogle = `${a}-${b}`;
        const pp = T.p[nogle] || (T.p[nogle] = { t: 'konflikt', a, b, d: {}, art: [] });
        const liste = pp.d[dag] || (pp.d[dag] = []);
        if (!liste.includes(k.domaene)) liste.push(k.domaene);
        if (!pp.art.some(x => x[0] === link)) { pp.art.unshift([link, k.domaene, dag, titel.slice(0, 200)]); pp.art = pp.art.slice(0, MAKS_ARTIKLER); }
      }
    }
  });
  console.log(`Overskrifter: ${artikler} artikler læst fra ${KILDER.length - fejl} af ${KILDER.length} medier, ${traef} med to eller tre lande og et ord for kamp.`);
}

// ---------- ryd op ----------
const graense = t => dagStr(NU.getTime() - VINDUE[t] * DAG);
const cacheGr = dagStr(NU.getTime() - CACHE_DAGE * DAG);
for (const [id, e] of Object.entries(T.ev)) if (e[3] < cacheGr) delete T.ev[id];
const hvGr = dagStr(NU.getTime() - DAG);
for (const [id, e] of Object.entries(T.hv)) if (e[2] < hvGr) delete T.hv[id];
for (const G of [T.g, T.gd, T.gi]) for (const dag of Object.keys(G)) if (dag < graense('konflikt')) delete G[dag];
for (const [k, p] of Object.entries(T.p)) {
  for (const dag of Object.keys(p.d)) if (dag < graense(p.t)) delete p.d[dag];
  p.art = p.art.filter(x => x[2] >= graense(p.t));
  if (!Object.keys(p.d).length) delete T.p[k];
}

// ---------- streger ----------
const streger = [];
for (const [k, p] of Object.entries(T.p)) {
  if (afvistNu(k)) continue;
  const medier = new Set(Object.values(p.d).flat());
  if (medier.size < MIN_MISTANKE) continue;
  const dage = Object.keys(p.d).length;
  const lande = new Set([...medier].map(d => MEDIER[d][1]).filter(l => l !== p.a && l !== p.b));
  const naaet = medier.size >= MIN_MEDIER && lande.size >= MIN_LANDE && dage >= MIN_DAGE;
  const status = naaet ? (TJEK.godkendt?.[k] ? 'bekraeftet' : 'afventer') : 'mistanke';
  const A = LANDE[p.a], B = LANDE[p.b];
  // Artikler: nyeste først, højst én pr. medie.
  const set = new Set(), art = [];
  for (const [url, d, dag, titel] of p.art) { if (set.has(d)) continue; set.add(d); art.push({ url, medie: MEDIER[d][0], dag, ...(titel ? { titel } : {}) }); if (art.length >= 6) break; }
  streger.push({ id: `gdelt-${k}`, type: p.t, status, a: p.a, b: p.b, aNavn: A.n, bNavn: B.n, aLat: (A.hs || [A.lat])[0], aLon: A.hs ? A.hs[1] : A.lon, bLat: (B.hs || [B.lat])[0], bLon: B.hs ? B.hs[1] : B.lon,
    medier: medier.size, lande: lande.size, dage, mNavne: [...medier].map(d => MEDIER[d][0]).filter((x, i, l) => l.indexOf(x) === i).sort((x, y) => x.localeCompare(y, 'da')),
    art, tjek: TJEK.godkendt?.[k] || null,
    // Antal medier pr. dag i vinduet, ældste først. Til kurven i detaljerne.
    kurve: Array.from({ length: VINDUE[p.t] }, (_, i) => { const dag = dagStr(NU.getTime() - (VINDUE[p.t] - 1 - i) * DAG); return [dag, (p.d[dag] || []).length]; }) });
}
// Varmekort: celler med mindst 2 omtaler i vinduet. Hver celle får det land, den ligger i
// (Natural Earth 1:110m, site/graenser.json), så landene kan få en markør for krig og konflikt.
const GR = JSON.parse(readFileSync(join(UD, 'graenser.json'), 'utf8')).l;
const BOKS = Object.fromEntries(Object.entries(GR).map(([a2, rr]) => {
  let x0 = 180, x1 = -180, y0 = 90, y1 = -90;
  for (const r of rr) for (const [x, y] of r) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  return [a2, [x0, y0, x1, y1]];
}));
const iRing = (x, y, r) => { let ind = false; for (let i = 0, j = r.length - 1; i < r.length; j = i++) { const [xi, yi] = r[i], [xj, yj] = r[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) ind = !ind; } return ind; };
function landFor(la, lo) {
  for (const [a2, b] of Object.entries(BOKS)) {
    if (lo < b[0] - .5 || lo > b[2] + .5 || la < b[1] - .5 || la > b[3] + .5) continue;
    if (GR[a2].some(r => iRing(lo, la, r))) return a2;
  }
  return null;
}
// Byer, der oftest er datolinje eller mødested i nyheder om andre landes krige (fx "WASHINGTON —"),
// og ikke selv er kampområder. Omtaler placeret der tæller ikke på varmekortet.
const DATOLINJER = [[38.9, -77.0], [40.7, -74.0], [42.0, -75.0], [51.5, -0.1], [48.9, 2.3], [50.8, 4.4], [46.2, 6.1], [52.5, 13.4],
  [48.2, 16.4], [52.1, 4.3], [45.4, -75.7], [-35.3, 149.1], [35.7, 139.7], [39.9, 116.4], [25.3, 51.5], [30.0, 31.2], [55.7, 12.6]];
const datolinje = (la, lo) => DATOLINJER.some(([a, b]) => Math.abs(a - la) <= .6 && Math.abs(b - lo) <= .6);
// Samlet oplysning om en celle over vinduets dage: det hyppigste stednavn, antal medier, op til fire
// artikler (én pr. medie), lande nævnt som part mindst to gange og parternes type.
function cellInfo(noegle) {
  const n = {}, l = {}, p = {}, m = new Set(), a = [];
  for (const dag of Object.keys(T.gi).sort().reverse()) {
    const o = T.gi[dag][noegle]; if (!o) continue;
    for (const [k, x] of Object.entries(o.n)) n[k] = (n[k] || 0) + x;
    for (const [k, x] of Object.entries(o.l)) l[k] = (l[k] || 0) + x;
    for (const [k, x] of Object.entries(o.p)) p[k] = (p[k] || 0) + x;
    for (const d of o.m) m.add(d);
    for (const [url, d] of o.a) if (MEDIER[d] && !a.some(x => x.d === d) && a.length < 4) a.push({ d, url });
  }
  const top = Object.entries(n).sort((x, y) => y[1] - x[1])[0];
  return { navn: top ? top[0] : '', medier: m.size, art: a.map(x => ({ url: x.url, medie: MEDIER[x.d][0] })),
    lande: Object.entries(l).filter(([, x]) => x >= 2).sort((x, y) => y[1] - x[1]).slice(0, 6).map(([k]) => k),
    parter: Object.entries(p).sort((x, y) => y[1] - x[1]).slice(0, 4).map(([k, x]) => [k, x]) };
}
// Celler uden for 1:110m-kortet (fx Gaza og små øer): navnet afgør Gaza og Vestbredden, ellers det land,
// hvis hovedstad eller midtpunkt ligger nærmest inden for 1,5 grad.
function landForCelle(la, lo, info) {
  if (info && /^(Gaza|West Bank)\b/.test(info.navn)) return 'PS';
  const f = landFor(la, lo); if (f) return f;
  let b = null, bd = 1.5 * 1.5;
  for (const [a2, L] of Object.entries(LANDE)) { const [y, x] = L.hs ? [L.hs[0], L.hs[1]] : [L.lat, L.lon]; const d = (y - la) ** 2 + (x - lo) ** 2; if (d < bd) { bd = d; b = a2; } }
  return b;
}
function celler(G, type) {
  const sum = {};
  for (const g of Object.values(G)) for (const [k, n] of Object.entries(g)) { const [la, lo] = k.split(',').map(Number); if (G === T.g && datolinje(la, lo)) continue; sum[k] = (sum[k] || 0) + n; }
  return Object.entries(sum).filter(([, n]) => n >= 2).map(([k, n]) => { const [la, lo] = k.split(',').map(Number); const info = n >= 5 ? cellInfo(type + k) : null; const c = [la, lo, n, landForCelle(la, lo, info)]; if (info) c.push(info); return c; }).sort((a, b) => b[2] - a[2]);
}
const v = celler(T.g, 'k'), vd = celler(T.gd, 'd');
// Lande med kampe eller demonstrationer. Alvor efter, hvor meget kampene er omtalt af medierne på
// listen de sidste 7 dage: fra 20 omtaler 2, fra 100 omtaler 3, fra 400 omtaler 4. Kun demonstrationer giver 1.
const kl = {};
for (const [la, lo, n, a2] of v) if (a2) { const o = kl[a2] || (kl[a2] = { kampe: 0, demo: 0, top: [] }); o.kampe += n; if (o.top.length < 5) o.top.push([la, lo, n]); }
for (const [, , n, a2] of vd) if (a2) { const o = kl[a2] || (kl[a2] = { kampe: 0, demo: 0, top: [] }); o.demo += n; }
const k = Object.entries(kl).map(([a2, o]) => {
  const alvor = o.kampe >= 400 ? 4 : o.kampe >= 100 ? 3 : o.kampe >= 20 ? 2 : 1;
  return { a2, navn: LANDE[a2]?.n || a2, kampe: o.kampe, demo: o.demo, alvor, top: o.top };
}).filter(x => x.kampe >= 10 || x.demo >= 20).sort((a, b) => b.kampe - a.kampe);
const RANG = { bekraeftet: 0, afventer: 1, mistanke: 2 };
streger.sort((x, y) => RANG[x.status] - RANG[y.status] || y.medier - x.medier);

writeFileSync(join(UD, 'medier-tal.json'), JSON.stringify(T) + '\n');
writeFileSync(join(UD, 'konflikter.json'), JSON.stringify({ genereret: NU.toISOString(), sidste: T.sidste, kilde: 'GDELT 2.0 og vores medieliste',
  regler: { MIN_MISTANKE, MIN_MEDIER, MIN_LANDE, MIN_DAGE, VINDUE }, s: streger, v, vd, k }) + '\n');
console.log(`Varmekort: ${v.length} celler med kampe, ${vd.length} med demonstrationer. ${k.length} lande.`);
const tael = s => streger.filter(x => x.status === s).length;
console.log(`Skrev ${streger.length} streger: ${tael('bekraeftet')} bekræftet, ${tael('afventer')} afventer tjek, ${tael('mistanke')} mistanke.`);
for (const x of streger.filter(x => x.status !== 'mistanke')) console.log(`  ${x.status}: ${x.type} ${x.aNavn}${x.type === 'konflikt' ? '–' : ' → '}${x.bNavn}, ${x.medier} medier fra ${x.lande} lande på ${x.dage} dage`);

// "Læs mere" til detaljekortene (tools/hent-laes.mjs). Kører efter mediesporet, så stederne er talt op.
// En fejl her stopper ikke resten af kørslen.
try {
  const fil = join(tmpdir(), `overskrifter-${process.pid}.json`); writeFileSync(fil, JSON.stringify(ALLE_OVERSKRIFTER));
  execFileSync(process.execPath, [new URL('./hent-laes.mjs', import.meta.url).pathname, UD, ...(FORRIGE ? ['--forrige', FORRIGE.replace(/medier-tal\.json.*$/, 'laes.json')] : [])],
    { stdio: 'inherit', timeout: 240000, env: { ...process.env, OVERSKRIFTER: fil } });
  rmSync(fil, { force: true });
} catch (e) { console.log(`::warning::Læs mere fejlede: ${e.message}`); }
