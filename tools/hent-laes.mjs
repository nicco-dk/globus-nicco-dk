#!/usr/bin/env node
// "Læs mere" til detaljekortene.
//
//   node tools/hent-laes.mjs site [--forrige https://globus.nicco.dk/laes.json]
//
// Finder artikler om de vigtigste hændelser i GDELT DOC 2.0 (api.gdeltproject.org): to søgninger pr. hændelse,
// én blandt engelsksprogede medier med engelske søgeord og én blandt dansksprogede med danske søgeord. Skriver site/laes.json. Siden viser derefter tre links:
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
// Søgningerne stopper efter 150 sekunder, så filen altid bliver skrevet, før hent-medier.mjs giver op efter 240.
const FRIST = NU + 150000;

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
// Den danske søgning: det danske ord og landets danske navn, fx "Mæslinger Bangladesh".
const dansk = (ord, a2) => frase(ord) + (a2 && LANDE[a2]?.n ? ' ' + frase(LANDE[a2].n) : '');

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
    const kwDa = (ev.disease || '').split(/[ ,]/)[0];
    maal.push({ id: ev.id, kw, kwDa, a2, q: frase(kw) + (land ? ' ' + frase(land) : ''), qDa: dansk(kwDa, a2), dage: 14 });
  }
}
{
  const f = laesJson('feeds.json');
  const TYPE = { jord: 'earthquake', flod: 'flood', brand: 'wildfire', hede: 'heat', storm: 'storm', vulkan: 'volcano' };
  const TYPE_DA = { jord: 'jordskælv', flod: 'oversvømmelse', brand: 'brand', hede: 'hede', storm: 'storm', vulkan: 'vulkan' };
  for (const h of f?.h || []) {
    if (h.ret === 'rejse' || h.alvor < 3 || !TYPE[h.ret]) continue;
    const a2 = h.a2 || landFraTekst(h.sted) || landFraTekst((h.titel || '').split(', ').pop());
    let land = a2 && engelsk(a2);
    if (!land && h.ret === 'jord') land = (h.titel || '').split(', ').pop();
    let q = TYPE[h.ret];
    if (h.ret === 'storm') { const m = /([A-Z][A-Z]+)-\d\d/.exec(h.titel || ''); if (m) q = `${m[1][0]}${m[1].slice(1).toLowerCase()} storm`; }
    if (land && /^[\x20-\x7e]+$/.test(land)) q += ' ' + frase(land);
    const kwDa = h.ret === 'storm' && q !== 'storm' ? q.split(' ')[0] : TYPE_DA[h.ret];
    maal.push({ id: h.id, kw: q.split(' ')[0], kwDa, a2, q, qDa: dansk(kwDa, a2), dage: 7 });
  }
}
{
  const k = laesJson('konflikter.json');
  for (const c of k?.v || []) {
    const [la, lo, n, a2, info] = c; if (n < 40 || !info || !info.navn) continue;
    const sted = info.navn.split(',')[0].replace(/[^\x20-\x7e]/g, '').trim(); if (sted.length < 3) continue;
    maal.push({ id: `sted-k-${la}_${lo}`.replace(/\./g, 'p'), kw: sted, kwDa: sted, a2, q: `${frase(sted)} (attack OR strike OR fighting OR clashes)`, qDa: `${frase(sted)} (angreb OR luftangreb OR kampe OR dræbt)`, dage: 7 });
  }
}

// ---------- forrige ----------
let L = { genereret: null, l: {} };
if (FORRIGE) {
  // curl som ved søgningerne, så den forrige udgave også kan læses, hvor Nodes fetch ikke kommer igennem.
  try {
    const txt = await new Promise((ok, fejl) => execFile('curl', ['-sSf', '-m', '20', FORRIGE + '?v=' + NU], { maxBuffer: 16 << 20 }, (e, out) => e ? fejl(e) : ok(out)));
    const j = JSON.parse(txt); if (j && j.l) L = j;
  } catch (e) { console.log(`Forrige laes.json kunne ikke læses (${String(e.message).split('\n')[0]}).`); }
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

// Først overskrifterne fra de store medier, som mediesporet lige har læst (Reuters, AP, BBC, DR m.fl.).
// En overskrift passer, når den nævner søgeordet og, hvis hændelsen har et land, også landet.
let OV = [];
try { if (process.env.OVERSKRIFTER) OV = JSON.parse(readFileSync(process.env.OVERSKRIFTER, 'utf8')); } catch {}
const ordRe = w => new RegExp(`(^|[^\\p{L}])${String(w).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'iu');
let fraOv = 0;
if (OV.length) for (const m of maal) {
  const passer = (o, ord) => ord && ordRe(ord).test(o.t) && (!m.a2 || o.l.includes(m.a2) || m.id.startsWith('sted-'));
  const en = OV.filter(o => o.sprog !== 'da' && passer(o, m.kw)), da = OV.filter(o => o.sprog === 'da' && passer(o, m.kwDa));
  if (!en.length && !da.length) continue;
  const som = o => ({ u: o.u, t: o.t, m: MEDIER[o.d]?.[0] || o.d, d: o.d, l: '' });
  const gl = L.l[m.id] || { intl: [], dk: [] };
  const flet = (nye, gamle, maks) => { const set = new Set(), ud = []; for (const a of nye.concat(gamle)) { if (set.has(a.d)) continue; set.add(a.d); ud.push(a); } return ud.sort((x, y) => rang(x.d) - rang(y.d)).slice(0, maks); };
  L.l[m.id] = { t: gl.t || new Date(0).toISOString(), q: m.q, qd: gl.qd, intl: flet(en.map(som), gl.intl || [], 6), dk: flet(da.map(som), gl.dk || [], 2), ov: true };
  fraOv++;
}
// Først de hændelser, der mangler artikler eller endnu ikke er søgt med danske søgeord.
const koe = maal.filter(m => !L.l[m.id] || (L.l[m.id].ov && !L.l[m.id].intl.length) || L.l[m.id].qd !== m.qDa).concat(maal.filter(m => L.l[m.id] && NU - Date.parse(L.l[m.id].t || 0) > DOEGN).sort((a, b) => Date.parse(L.l[a.id].t) - Date.parse(L.l[b.id].t)));
let fundet = 0;
for (const m of koe) {
  if (brugt + 2 > MAKS_SOEG || Date.now() > FRIST) break;
  const intl = await soeg(`${m.q} sourcelang:english`, m.dage, 50);
  const dk = await soeg(`${m.qDa} sourcelang:danish`, Math.max(m.dage, 14), 10);
  if (intl === null && dk === null) continue;
  const gl = L.l[m.id] || { intl: [], dk: [] }, nyI = udvaelg(intl, 6, m.kw), nyD = udvaelg(dk, 2, null);
  const flet = (a, b, maks) => { const set = new Set(), ud = []; for (const x of a.concat(b)) { if (set.has(x.d)) continue; set.add(x.d); ud.push(x); } return ud.sort((x, y) => rang(x.d) - rang(y.d)).slice(0, maks); };
  L.l[m.id] = { t: new Date().toISOString(), q: m.q, qd: m.qDa, intl: flet(gl.intl || [], nyI, 6), dk: flet(gl.dk || [], nyD, 2) };
  fundet++;
}
L.genereret = new Date().toISOString();
writeFileSync(join(UD, 'laes.json'), JSON.stringify(L) + '\n');
console.log(`Læs mere: ${maal.length} hændelser, ${fraOv} fra overskrifterne, ${fundet} søgt i GDELT nu (${brugt} søgninger), ${Object.keys(L.l).length} har artikler.`);
