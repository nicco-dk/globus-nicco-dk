#!/usr/bin/env node
// Mediesporet for krig og konflikt.
//
//   node tools/hent-medier.mjs site [--forrige https://globus.nicco.dk/medier-tal.json]
//
// Læser GDELT 2.0's 15-minutters-filer (hændelser og omtaler), finder hændelser mellem
// to lande af typen kamp, angreb eller massevold (rød) og militær hjælp (gul) og tæller,
// hvilke medier fra vores egen liste (tools/medier.json) der har skrevet om dem.
// Optællingen gemmes i site/medier-tal.json, så næste kørsel kan fortsætte, hvor den slap.
// Stregerne skrives til site/konflikter.json efter reglerne nedenfor. Ingen AI i dette trin.
//
// Regler (står også i OPDATERING.md):
//   Mistanke:   mindst 2 medier fra listen i vinduet.
//   Bekræftet:  mindst 5 medier fra listen, fra mindst 3 lande uden for parternes egne,
//               nævnt på mindst 3 forskellige dage, OG parret er godkendt i tools/par-tjek.json.
//   Afventer:   tærsklen for bekræftet er nået, men parret er ikke tjekket endnu. Vises som mistanke.
//   Afvist:     parret står under afvist i tools/par-tjek.json og vises ikke.
//   Vindue:     7 dage for konflikt, 30 dage for militær støtte.

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const UD = process.argv[2];
if (!UD) { console.error('Brug: node tools/hent-medier.mjs site [--forrige URL]'); process.exit(2); }
const fi = process.argv.indexOf('--forrige');
const FORRIGE = fi > 0 ? process.argv[fi + 1] : null;

const LANDE = JSON.parse(readFileSync(new URL('./lande.json', import.meta.url), 'utf8')).lande;
const MEDIER = JSON.parse(readFileSync(new URL('./medier.json', import.meta.url), 'utf8')).medier;
const TJEK = JSON.parse(readFileSync(new URL('./par-tjek.json', import.meta.url), 'utf8'));
const I3 = new Map(Object.entries(LANDE).map(([a2, L]) => [L.i3, a2]));

const VINDUE = { konflikt: 7, militaer: 30 };
const MIN_MISTANKE = 2, MIN_MEDIER = 5, MIN_LANDE = 3, MIN_DAGE = 3;
const MAKS_FILER = 700;          // højst så mange kvarterer pr. kørsel (ca. 7 døgn)
const CACHE_DAGE = 7;            // hvor længe en hændelse huskes, så senere omtaler kan kobles på
const MAKS_ARTIKLER = 12;
const VERSION = 1;
const NU = new Date(), DAG = 864e5;
const dagStr = ms => new Date(ms).toISOString().slice(0, 10);
const stamp = d => d.toISOString().replace(/[-:T]/g, '').slice(0, 14);
const fraStamp = s => Date.UTC(+s.slice(0, 4), +s.slice(4, 6) - 1, +s.slice(6, 8), +s.slice(8, 10), +s.slice(10, 12));

// ---------- forrige tilstand ----------
let T = { v: VERSION, sidste: null, ev: {}, p: {} };
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
      const e = T.ev[c[0]]; if (!e) continue;
      const d = dom(c[4]); if (!MEDIER[d]) continue;
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

// ---------- ryd op ----------
const graense = t => dagStr(NU.getTime() - VINDUE[t] * DAG);
const cacheGr = dagStr(NU.getTime() - CACHE_DAGE * DAG);
for (const [id, e] of Object.entries(T.ev)) if (e[3] < cacheGr) delete T.ev[id];
for (const [k, p] of Object.entries(T.p)) {
  for (const dag of Object.keys(p.d)) if (dag < graense(p.t)) delete p.d[dag];
  p.art = p.art.filter(x => x[2] >= graense(p.t));
  if (!Object.keys(p.d).length) delete T.p[k];
}

// ---------- streger ----------
const streger = [];
for (const [k, p] of Object.entries(T.p)) {
  if (TJEK.afvist?.[k]) continue;
  const medier = new Set(Object.values(p.d).flat());
  if (medier.size < MIN_MISTANKE) continue;
  const dage = Object.keys(p.d).length;
  const lande = new Set([...medier].map(d => MEDIER[d][1]).filter(l => l !== p.a && l !== p.b));
  const naaet = medier.size >= MIN_MEDIER && lande.size >= MIN_LANDE && dage >= MIN_DAGE;
  const status = naaet ? (TJEK.godkendt?.[k] ? 'bekraeftet' : 'afventer') : 'mistanke';
  const A = LANDE[p.a], B = LANDE[p.b];
  // Artikler: nyeste først, højst én pr. medie.
  const set = new Set(), art = [];
  for (const [url, d, dag] of p.art) { if (set.has(d)) continue; set.add(d); art.push({ url, medie: MEDIER[d][0], dag }); if (art.length >= 6) break; }
  streger.push({ id: `gdelt-${k}`, type: p.t, status, a: p.a, b: p.b, aNavn: A.n, bNavn: B.n, aLat: A.lat, aLon: A.lon, bLat: B.lat, bLon: B.lon,
    medier: medier.size, lande: lande.size, dage, mNavne: [...medier].map(d => MEDIER[d][0]).filter((x, i, l) => l.indexOf(x) === i).sort((x, y) => x.localeCompare(y, 'da')),
    art, tjek: TJEK.godkendt?.[k] || null });
}
const RANG = { bekraeftet: 0, afventer: 1, mistanke: 2 };
streger.sort((x, y) => RANG[x.status] - RANG[y.status] || y.medier - x.medier);

writeFileSync(join(UD, 'medier-tal.json'), JSON.stringify(T) + '\n');
writeFileSync(join(UD, 'konflikter.json'), JSON.stringify({ genereret: NU.toISOString(), sidste: T.sidste, kilde: 'GDELT 2.0 og vores medieliste',
  regler: { MIN_MISTANKE, MIN_MEDIER, MIN_LANDE, MIN_DAGE, VINDUE }, s: streger }) + '\n');
const tael = s => streger.filter(x => x.status === s).length;
console.log(`Skrev ${streger.length} streger: ${tael('bekraeftet')} bekræftet, ${tael('afventer')} afventer tjek, ${tael('mistanke')} mistanke.`);
for (const x of streger.filter(x => x.status !== 'mistanke')) console.log(`  ${x.status}: ${x.type} ${x.aNavn}${x.type === 'konflikt' ? '–' : ' → '}${x.bNavn}, ${x.medier} medier fra ${x.lande} lande på ${x.dage} dage`);
