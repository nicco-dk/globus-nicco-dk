#!/usr/bin/env node
// "Læs mere" til detaljekortene.
//
//   node tools/hent-laes.mjs site [--forrige https://globus.nicco.dk/laes.json]
//
// Finder artikler om de vigtigste hændelser i GDELT DOC 2.0 (api.gdeltproject.org): to søgninger pr. hændelse,
// én blandt engelsksprogede medier og én blandt danske. Skriver site/laes.json. Siden viser derefter tre links:
// det første fra et medie i brugerens land, hvis der er et, de to andre fra de mest kendte internationale medier.
// Artiklerne er henvisninger til videre læsning. Siden bruger dem ikke som kilde til tal eller alvor.
//
// GDELT beder om højst én søgning hvert 5. sekund. Hver kørsel laver derfor kun MAKS_SOEG søgninger og tager
// de hændelser først, der mangler artikler, derefter de ældste. En hændelse genopfriskes efter et døgn.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import vm from 'node:vm';
import { execFile } from 'node:child_process';

const UD = process.argv[2];
if (!UD) { console.error('Brug: node tools/hent-laes.mjs site [--forrige URL]'); process.exit(2); }
const fi = process.argv.indexOf('--forrige');
const FORRIGE = fi > 0 ? process.argv[fi + 1] : null;
const MAKS_SOEG = +(process.env.MAKS_SOEG || 12);
const PAUSE = 6500, DOEGN = 864e5, NU = Date.now();

const LANDE = JSON.parse(readFileSync(new URL('./lande.json', import.meta.url), 'utf8')).lande;
const MEDIER = JSON.parse(readFileSync(new URL('./medier.json', import.meta.url), 'utf8')).medier;
const laesJson = f => { try { return JSON.parse(readFileSync(join(UD, f), 'utf8')); } catch { return null; } };

// Kendte internationale medier, i den rækkefølge de foretrækkes.
const KENDTE = ['reuters.com', 'apnews.com', 'bbc.com', 'bbc.co.uk', 'theguardian.com', 'nytimes.com', 'washingtonpost.com', 'aljazeera.com',
  'france24.com', 'dw.com', 'npr.org', 'ft.com', 'cnn.com', 'euronews.com', 'abc.net.au', 'cbc.ca', 'statnews.com', 'scmp.com', 'thehindu.com', 'cbsnews.com', 'nbcnews.com'];
const dom = s => String(s || '').toLowerCase().replace(/^www\./, '');
const rang = d => { const i = KENDTE.findIndex(k => d === k || d.endsWith('.' + k)); return i < 0 ? 99 : i; };

// Engelske søgeord for smitteudbruddene (sidens navne er danske).
const SYG = [[/^Mæslinger/, 'measles'], [/^Fugleinfluenza/, 'bird flu'], [/^Salmonell/, 'salmonella'], [/^Mpox/, 'mpox'],
  [/^Krim-Congo/, 'Crimean-Congo'], [/^Ebola/, 'Ebola'], [/^Dengue/, 'dengue'], [/^West Nile/, 'West Nile'], [/^Sindbis/, 'Sindbis'],
  [/SFTS/, 'SFTS'], [/^Polio/, 'polio'], [/^Miltbrand/, 'anthrax'], [/^MERS/, 'MERS'], [/pest/i, 'plague'], [/malaria/i, 'malaria'],
  [/^Kolera/, 'cholera'], [/^Gul feber/, 'yellow fever'], [/^Difteri/, 'diphtheria'], [/^Cyclospor/, 'cyclospora'], [/^Chikungunya/, 'chikungunya'],
  [/^Carbapenem/, 'carbapenem']];
const sygOrd = navn => (SYG.find(([r]) => r.test(navn)) || [])[1] || null;
// Landets korteste engelske navn uden komma, fx "DR Congo".
const engelsk = a2 => { const L = LANDE[a2]; if (!L) return null; return (L.en || []).filter(x => !x.includes(',') && /^[\x20-\x7e]+$/.test(x)).sort((a, b) => a.length - b.length)[0] || null; };
const landFraTekst = t => { t = String(t || ''); for (const [a2, L] of Object.entries(LANDE)) if (t.startsWith(L.n) || t.includes(', ' + L.n) || t.endsWith(' ' + L.n)) return a2; return null; };
const frase = s => /\s/.test(s) ? `"${s}"` : s;

// ---------- hændelser ----------
const maal = [];
{
  const html = readFileSync(join(UD, 'index.html'), 'utf8');
  const s = html.indexOf('const EVENTS = ['), e = html.indexOf('\n];', s);
  const EVENTS = s > 0 ? vm.runInNewContext('(' + html.slice(s + 'const EVENTS = '.length, e + 2) + ')', Object.create(null), { timeout: 2000 }) : [];
  for (const ev of EVENTS) {
    if (!ev.live) continue;
    const kw = sygOrd(ev.disease || ''); if (!kw) continue;
    const a2 = landFraTekst(ev.country), land = a2 && engelsk(a2);
    maal.push({ id: ev.id, kw, q: frase(kw) + (land ? ' ' + frase(land) : ''), dage: 14 });
  }
}
{
  const f = laesJson('feeds.json');
  const TYPE = { jord: 'earthquake', flod: 'flood', brand: 'wildfire', hede: 'heat', storm: 'storm', vulkan: 'volcano' };
  for (const h of f?.h || []) {
    if (h.ret === 'rejse' || h.alvor < 3 || !TYPE[h.ret]) continue;
    const a2 = h.a2 || landFraTekst(h.sted) || landFraTekst((h.titel || '').split(', ').pop());
    let land = a2 && engelsk(a2);
    if (!land && h.ret === 'jord') land = (h.titel || '').split(', ').pop();
    let q = TYPE[h.ret];
    if (h.ret === 'storm') { const m = /([A-Z][A-Z]+)-\d\d/.exec(h.titel || ''); if (m) q = `${m[1][0]}${m[1].slice(1).toLowerCase()} storm`; }
    if (land && /^[\x20-\x7e]+$/.test(land)) q += ' ' + frase(land);
    maal.push({ id: h.id, kw: q.split(' ')[0], q, dage: 7 });
  }
}
{
  const k = laesJson('konflikter.json');
  for (const c of k?.v || []) {
    const [la, lo, n, a2, info] = c; if (n < 40 || !info || !info.navn) continue;
    const sted = info.navn.split(',')[0].replace(/[^\x20-\x7e]/g, '').trim(); if (sted.length < 3) continue;
    maal.push({ id: `sted-k-${la}_${lo}`.replace(/\./g, 'p'), kw: sted, q: `${frase(sted)} (attack OR strike OR fighting OR clashes)`, dage: 7 });
  }
}

// ---------- forrige ----------
let L = { genereret: null, l: {} };
if (FORRIGE) {
  try { const r = await fetch(FORRIGE + '?v=' + NU, { signal: AbortSignal.timeout(20000) }); if (r.ok) { const j = await r.json(); if (j && j.l) L = j; } }
  catch (e) { console.log(`Forrige laes.json kunne ikke læses (${e.message}).`); }
}
const ids = new Set(maal.map(m => m.id));
for (const id of Object.keys(L.l)) if (!ids.has(id)) delete L.l[id];
// Et punkt, hvis søgning er ændret (fx nyt land), søges forfra.
for (const m of maal) if (L.l[m.id] && L.l[m.id].q !== m.q) delete L.l[m.id];

// ---------- søg ----------
const vent = ms => new Promise(r => setTimeout(r, ms));
let sidst = 0, brugt = 0;
async function soeg(q, dage, n) {
  const url = `https://api.gdeltproject.org/api/v2/doc/doc?query=${encodeURIComponent(q)}&mode=artlist&maxrecords=${n}&timespan=${dage}d&format=json&sort=hybridrel`;
  for (let forsoeg = 0; forsoeg < 2; forsoeg++) {
    const t = PAUSE - (Date.now() - sidst); if (t > 0) await vent(t);
    sidst = Date.now(); brugt++;
    try {
      // curl i stedet for fetch: virker også bag proxyer, hvor Nodes fetch ikke kommer igennem.
      const txt = await new Promise((ok, fejl) => execFile('curl', ['-sS', '-m', '25', '-A', 'globus.nicco.dk (laes mere)', url], { maxBuffer: 8 << 20 }, (e, out) => e ? fejl(e) : ok(out)));
      if (/^Please limit/i.test(txt)) { await vent(8000); continue; }
      const j = JSON.parse(txt || '{}');
      return j.articles || [];
    } catch { return null; }
  }
  return null;
}
const artikel = a => ({ u: a.url, t: String(a.title || '').replace(/\s+/g, ' ').replace(/ ([,.:;!?])/g, '$1').trim().slice(0, 180), m: MEDIER[dom(a.domain)]?.[0] || dom(a.domain), d: dom(a.domain), l: a.sourcecountry || '' });
// Kun artikler, hvis overskrift nævner søgeordet (fx "Ebola" eller "Gaza"). Det holder løse træffere ude.
function udvaelg(liste, maks, kw) {
  const set = new Set(), ud = [], k = String(kw || '').toLowerCase();
  for (const a of (liste || []).filter(a => /^https?:\/\//.test(a.url) && (!k || String(a.title || '').toLowerCase().includes(k))).sort((x, y) => rang(dom(x.domain)) - rang(dom(y.domain)))) {
    const d = dom(a.domain); if (set.has(d)) continue; set.add(d); ud.push(artikel(a)); if (ud.length >= maks) break;
  }
  return ud;
}

const koe = maal.filter(m => !L.l[m.id]).concat(maal.filter(m => L.l[m.id] && NU - Date.parse(L.l[m.id].t || 0) > DOEGN).sort((a, b) => Date.parse(L.l[a.id].t) - Date.parse(L.l[b.id].t)));
let fundet = 0;
for (const m of koe) {
  if (brugt + 2 > MAKS_SOEG) break;
  const intl = await soeg(`${m.q} sourcelang:english`, m.dage, 50);
  const dk = await soeg(`${m.q} sourcecountry:denmark`, Math.max(m.dage, 14), 10);
  if (intl === null && dk === null) continue;
  L.l[m.id] = { t: new Date().toISOString(), q: m.q, intl: udvaelg(intl, 6, m.kw), dk: udvaelg(dk, 2, null) };
  fundet++;
}
L.genereret = new Date().toISOString();
writeFileSync(join(UD, 'laes.json'), JSON.stringify(L) + '\n');
console.log(`Læs mere: ${maal.length} hændelser, ${fundet} søgt nu (${brugt} søgninger), ${Object.keys(L.l).length} har artikler.`);
