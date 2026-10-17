#!/usr/bin/env node
// Bygger site/datacentre.json til laget Datacentre på globus.nicco.dk.
//
//   node tools/hent-datacentre.mjs site/datacentre.json [--forrige URL-eller-fil] [--epoch mappe]
//
// Kilderne er Epoch AI's Frontier Data Centers (CC BY 4.0), som hentes ved hver kørsel, og den kuraterede
// liste tools/datacentre.json, hvor hvert tal har en kilde. Scriptet bruger ingen AI og skriver kun det,
// kilderne selv angiver. Epochs effekt, omkostning, vand og chips er Epochs egne skøn og mærkes som skøn.
//
// Fejler hentningen fra Epoch, genbruges Epochs anlæg fra forrige udgave af filen med det gamle
// hentetidspunkt. Fejler også det, skrives filen med de kuraterede anlæg alene.
// Planen og skabelonen står i claude/globus-datacentre.md i projektet, reglerne i OPDATERING.md.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const UD = process.argv[2];
if (!UD) { console.error('Brug: node tools/hent-datacentre.mjs site/datacentre.json [--forrige URL] [--epoch mappe]'); process.exit(2); }
const arg = n => { const i = process.argv.indexOf('--' + n); return i > 0 ? process.argv[i + 1] : null; };
const FORRIGE = arg('forrige');
const EPOCH_MAPPE = arg('epoch');

const EPOCH = 'https://epoch.ai/data/data_centers/';
const EPOCH_SIDE = 'https://epoch.ai/data/ai-data-centers';
const KUR = JSON.parse(readFileSync(new URL('./datacentre.json', import.meta.url), 'utf8'));
const LANDE = JSON.parse(readFileSync(new URL('./lande.json', import.meta.url), 'utf8')).lande;
const NU = new Date();
const IDAG = NU.toISOString().slice(0, 10);
// DC-08: et planlagt anlæg uden ny kilde i 12 måneder står som "ikke bekræftet siden".
const UDLOEB_DAGE = 365;

// ---------- CSV ----------
// RFC 4180: felter i anførselstegn kan indeholde komma, linjeskift og "" for ".
function csv(tekst) {
  const rk = []; let r = [], f = '', q = false;
  for (let i = 0; i < tekst.length; i++) {
    const c = tekst[i];
    if (q) {
      if (c === '"') { if (tekst[i + 1] === '"') { f += '"'; i++; } else q = false; }
      else f += c;
    } else if (c === '"') q = true;
    else if (c === ',') { r.push(f); f = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && tekst[i + 1] === '\n') i++;
      r.push(f); f = ''; if (r.length > 1 || r[0] !== '') rk.push(r); r = [];
    } else f += c;
  }
  if (f !== '' || r.length) { r.push(f); rk.push(r); }
  const hoved = rk.shift().map(h => h.replace(/^﻿/, '').trim());
  return rk.map(x => Object.fromEntries(hoved.map((h, i) => [h, (x[i] ?? '').trim()])));
}

async function hent(url) {
  const r = await fetch(url, { headers: { 'User-Agent': 'globus.nicco.dk (kontakt@nicco.dk)' }, signal: AbortSignal.timeout(60000) });
  if (!r.ok) throw new Error(`${url} svarede ${r.status}`);
  return r.text();
}

// ---------- hjælpere ----------
const tal = s => { if (s === undefined || s === null || s === '') return null; const n = Number(String(s).replace(/,/g, '')); return Number.isFinite(n) ? n : null; };
const rund = (n, d = 0) => n === null ? null : Math.round(n * 10 ** d) / 10 ** d;
const slug = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/&/g, 'og').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const SIKKERHED = { confident: 'sikker', likely: 'sandsynlig' };
// "Google #confident, Anthropic #likely" -> [{navn, sikkerhed}]. DC-03: kun sikre og sandsynlige vises.
function parter(s) {
  if (!s) return [];
  return s.split(',').map(x => x.trim()).filter(Boolean).map(x => {
    const m = x.match(/^(.*?)\s*#(\w+)\s*$/);
    return m ? { navn: m[1].trim(), sikkerhed: SIKKERHED[m[2].toLowerCase()] || null } : { navn: x, sikkerhed: null };
  }).filter(p => p.navn && p.sikkerhed);
}
// Markdown-liste "- [titel](url)" -> [{navn, url}]
function links(s) {
  const ud = [];
  for (const m of (s || '').matchAll(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g)) ud.push({ navn: m[1].trim(), url: m[2] });
  return ud;
}
const LAND_EN = {};
for (const [a2, l] of Object.entries(LANDE)) for (const n of l.en || []) LAND_EN[n.toLowerCase()] = a2;
function land(navn) {
  const a2 = LAND_EN[(navn || '').toLowerCase()];
  return a2 ? { a2, land: LANDE[a2].n } : { a2: null, land: navn || null };
}
const liste = s => (s || '').split(',').map(x => x.replace(/#\w+/g, '').trim()).filter(Boolean);
// Fagpresse og nyhedsmedier mærkes ", medie", som siden viser dæmpet. Myndigheder og selskaber står fremhævet.
const medie = n => { const m = /\s*\((fagpresse|medie)[^)]*\)/.exec(n || ''); return m ? n.replace(m[0], '') + ', medie' : n; };
const dage = (a, b) => (Date.parse(b) - Date.parse(a)) / 864e5;

// ---------- Epoch ----------
function fraEpoch(anlaegCsv, tidslinjeCsv, hentet) {
  const rk = csv(tidslinjeCsv), pr = {};
  for (const x of rk) (pr[x['Data center']] ||= []).push(x);
  const ud = [], mangler = [];
  for (const d of csv(anlaegCsv)) {
    const navn = d.Name; if (!navn) continue;
    const sted = KUR.epoch_steder[navn];
    if (!sted) { mangler.push(navn); continue; }
    const tl = (pr[navn] || []).filter(x => /^\d{4}-\d{2}-\d{2}$/.test(x.Date)).sort((a, b) => a.Date.localeCompare(b.Date));
    const fortid = tl.filter(x => x.Date <= IDAG), fremtid = tl.filter(x => x.Date > IDAG);
    const nu = fortid.at(-1) || null;
    const itNu = nu ? tal(nu['IT power (MW)']) : null;
    let status;
    if (itNu > 0) status = 'drift';
    else if (fortid.length) status = 'opfoerelse';
    else status = 'planlagt';
    // Største planlagte IT-effekt efter i dag og datoen, Epoch venter den.
    let plan = null;
    for (const x of fremtid) { const v = tal(x['IT power (MW)']); if (v > (plan?.mw ?? itNu ?? 0)) plan = { mw: v, dato: x.Date }; }
    const l = land(d.Country);
    const kilder = [{ navn: 'Epoch AI, Frontier Data Centers', url: EPOCH_SIDE, dato: hentet.slice(0, 10),
      felter: ['status', 'it_effekt_mw', 'effekt_mw', 'investering', 'vand', 'chips', 'ejer', 'brugere', 'tidslinje', 'energiselskaber', 'investorer', 'entreprenoerer'] }];
    for (const k of links(d['Selected Sources'])) kilder.push({ ...k, felter: [] });
    const vandNu = nu ? tal(nu['Water use (MGD)']) : null;
    ud.push({
      id: 'epoch-' + slug(navn),
      navn,
      kilde: 'epoch',
      status,
      status_dato: nu?.Date || null,
      lat: sted.lat, lon: sted.lon, praecision: sted.praecision,
      koordinat_kilde: `OpenStreetMap Nominatim, opslag: ${sted.opslag}`,
      adresse: d.Address ? d.Address.replace(/\s+/g, ' ') : null,
      land: l.land, a2: l.a2,
      ejer: parter(d.Owner),
      brugere: parter(d.Users),
      projekt: parter(d.Project).map(p => p.navn)[0] || null,
      formaal: 'ai',
      it_effekt_mw: { nu: rund(itNu), planlagt: plan ? rund(plan.mw) : null, planlagt_dato: plan?.dato || null, skoen: true },
      effekt_mw: { nu: rund(nu ? tal(nu['Power (MW)']) : null), skoen: true },
      investering: (() => { const v = nu ? tal(nu['Total capital cost (2025 USD billions)']) : null; return v ? { beloeb: rund(v, 1), valuta: 'USD', enhed: 'mia', aar: 2025, skoen: true } : null; })(),
      // Epoch angiver vand i millioner amerikanske gallons i døgnet. Omregnes til millioner liter.
      vand: vandNu ? { mio_liter_doegn: rund(vandNu * 3.785, 1), skoen: true } : null,
      chips: { typer: d['Current chip types'] ? d['Current chip types'].split(',').map(s => s.trim()).filter(Boolean) : [],
        h100: rund(nu ? tal(nu['H100 equivalents']) : null, -3), skoen: true },
      energiselskaber: liste(d['Energy companies']),
      investorer: liste(d.Investors),
      entreprenoerer: liste(d['Construction companies']),
      tidslinje: tl.map(x => ({
        dato: x.Date, fremtid: x.Date > IDAG,
        it_mw: rund(tal(x['IT power (MW)'])), bygninger: tal(x['Buildings operational']),
        kilde: links(x['Construction status'])[0] || null
      })),
      kilder,
      opdateret: hentet.slice(0, 10)
    });
  }
  if (mangler.length) console.log(`::warning::${mangler.length} anlæg fra Epoch har ingen koordinater i tools/datacentre.json (epoch_steder) og er sprunget over: ${mangler.join(', ')}`);
  return ud;
}

// ---------- kurateret ----------
const STATUSSER = new Set(['drift', 'opfoerelse', 'godkendt', 'planlagt']);
function kurateret() {
  const ud = [];
  for (const a of KUR.anlaeg || []) {
    const fejl = [];
    if (!a.id || !/^[a-z0-9-]+$/.test(a.id)) fejl.push('id');
    if (!a.navn) fejl.push('navn');
    if (!STATUSSER.has(a.status)) fejl.push('status');
    if (!(Math.abs(a.lat) <= 90 && Math.abs(a.lon) <= 180)) fejl.push('koordinater');
    if (!Array.isArray(a.kilder) || !a.kilder.length || a.kilder.some(k => !/^https?:\/\//.test(k.url || ''))) fejl.push('kilder');
    if (fejl.length) { console.log(`::warning::Kurateret anlæg ${a.id || a.navn || '?'} er sprunget over, fejl i: ${fejl.join(', ')}`); continue; }
    const it = a.it_effekt_mw || {};
    ud.push({
      id: a.id, navn: a.navn, kilde: 'kurateret',
      status: a.status, status_dato: a.status_dato || null,
      lat: rund(a.lat, 4), lon: rund(a.lon, 4), praecision: a.koordinat_praecision || null, koordinat_kilde: a.koordinat_kilde || null,
      by: a.by || null, land: a.land || (a.a2 && LANDE[a.a2]?.n) || null, a2: a.a2 || null,
      ejer: a.ejer ? [{ navn: a.ejer, sikkerhed: 'sikker' }] : [],
      operatoer: a.operatoer || null,
      brugere: (a.brugere || []).filter(b => b.navn && (b.sikkerhed === 'sikker' || b.sikkerhed === 'sandsynlig')),
      formaal: a.formaal || null,
      it_effekt_mw: { nu: it.nu ?? null, planlagt: it.planlagt ?? null, planlagt_dato: it.planlagt_aar ? `${it.planlagt_aar}` : null, type: it.type === 'it' || it.type === 'net' ? it.type : null, skoen: !!it.skoen },
      areal_m2: a.areal_m2 ?? null, bygninger: a.bygninger ?? null,
      investering: a.investering || null,
      elforbrug_gwh: a.elforbrug_gwh ?? null,
      energikilde: a.energikilde || null,
      pue: a.pue ?? null, vand: a.vand ?? null, koeling: a.koeling || null,
      tidslinje: (a.tidslinje || []).map(t => ({ dato: t.dato, tekst: t.tekst, fremtid: String(t.dato) > IDAG })),
      kilder: a.kilder.map(k => ({ navn: medie(k.navn), titel: k.titel || null, url: k.url, dato: k.dato || null, felter: k.felter || [] })),
      erstatter: a.erstatter || null,
      opdateret: a.opdateret || null
    });
  }
  return ud;
}

// ---------- sammenfletning ----------
// Samme anlæg fra flere kilder: et kurateret anlæg med "erstatter" (Epochs navn) vinder over Epochs post.
// Ellers advares, når to anlæg ligger under 2 km fra hinanden med samme ejer.
function km(a, b) {
  const r = Math.PI / 180, dl = (b.lat - a.lat) * r, dn = (b.lon - a.lon) * r;
  const h = Math.sin(dl / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dn / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
}
function flet(epoch, kur) {
  const ude = new Set(kur.map(k => k.erstatter).filter(Boolean));
  const alle = epoch.filter(e => !ude.has(e.navn)).concat(kur);
  const ejer = a => (a.ejer[0]?.navn || '').toLowerCase().split(/\s+/)[0];
  for (const k of kur) for (const e of epoch) {
    if (ude.has(e.navn)) continue;
    if (ejer(k) && ejer(k) === ejer(e) && km(k, e) < 2) console.log(`::warning::Muligt dobbeltanlæg: ${k.navn} (kurateret) og ${e.navn} (Epoch) ligger ${km(k, e).toFixed(1)} km fra hinanden. Sæt "erstatter" eller ret.`);
  }
  // DC-08: planlagt eller godkendt uden ny kilde i 12 måneder.
  for (const a of alle) {
    if ((a.status === 'planlagt' || a.status === 'godkendt') && a.status_dato && dage(a.status_dato, IDAG) > UDLOEB_DAGE) a.ikke_bekraeftet_siden = a.status_dato;
  }
  return alle.sort((a, b) => (b.it_effekt_mw.nu ?? b.it_effekt_mw.planlagt ?? 0) - (a.it_effekt_mw.nu ?? a.it_effekt_mw.planlagt ?? 0) || a.navn.localeCompare(b.navn));
}

// ---------- kørsel ----------
let epoch = [], epochHentet = null, epochFejl = null;
try {
  const [a, t] = EPOCH_MAPPE
    ? [readFileSync(join(EPOCH_MAPPE, 'data_centers.csv'), 'utf8'), readFileSync(join(EPOCH_MAPPE, 'data_center_timelines.csv'), 'utf8')]
    : await Promise.all([hent(EPOCH + 'data_centers.csv'), hent(EPOCH + 'data_center_timelines.csv')]);
  epochHentet = NU.toISOString();
  epoch = fraEpoch(a, t, epochHentet);
  if (epoch.length < 50) throw new Error(`kun ${epoch.length} anlæg i Epochs fil`);
} catch (e) {
  epochFejl = String(e.message || e);
  console.log(`::warning::Epoch AI kunne ikke hentes (${epochFejl}). Forrige udgave bruges.`);
  epoch = [];
  if (FORRIGE) {
    try {
      const f = /^https?:/.test(FORRIGE) ? JSON.parse(await hent(FORRIGE + '?v=' + Date.now())) : (existsSync(FORRIGE) ? JSON.parse(readFileSync(FORRIGE, 'utf8')) : null);
      if (f) { epoch = (f.anlaeg || []).filter(a => a.kilde === 'epoch'); epochHentet = f.kilder?.epoch?.hentet || null; }
    } catch (e2) { console.log(`::warning::Forrige udgave kunne heller ikke læses (${e2.message || e2}).`); }
  }
}

const anlaeg = flet(epoch, kurateret());
const ud = {
  form: 'globus-datacentre',
  genereret: NU.toISOString(),
  kilder: {
    epoch: { navn: 'Epoch AI, Frontier Data Centers', url: EPOCH_SIDE, licens: 'CC BY 4.0', hentet: epochHentet, fejl: epochFejl },
    osm: { navn: 'OpenStreetMap-bidragydere (koordinater via Nominatim)', url: 'https://www.openstreetmap.org/copyright', licens: 'ODbL 1.0' },
    kurateret: { navn: 'Kurateret liste med kilder pr. anlæg', url: 'https://github.com/nicco-dk/globus-nicco-dk/blob/main/tools/datacentre.json' }
  },
  licens: 'Data fra Epoch AI under CC BY 4.0. Koordinater fra OpenStreetMap under ODbL 1.0. Den samlede fil udgives under ODbL 1.0.',
  anlaeg
};
writeFileSync(UD, JSON.stringify(ud) + '\n');
const tael = s => anlaeg.filter(a => a.status === s).length;
console.log(`${UD} skrevet: ${anlaeg.length} anlæg (${epoch.length} fra Epoch, ${anlaeg.length - epoch.length} kuraterede). I drift ${tael('drift')}, under opførelse ${tael('opfoerelse')}, godkendt ${tael('godkendt')}, planlagt ${tael('planlagt')}.`);
