// Formkontrol af fanen Konspirationer: site/konspirationer/teorier.json og hver teoris datafil.
// Køres i hånden før et commit, der rører site/konspirationer/:  node tools/tjek-konspirationer.mjs
// Den er bevidst ikke en del af udrulningen: fanen må aldrig kunne standse globus' egen udrulning.
// Kontrollen fanger formfejl. Den kan ikke se, om en kilde faktisk siger det, punktet siger.
import fs from 'fs';
import path from 'path';

const MAPPE = process.argv[2] || 'site/konspirationer';
const LVL = ['dok', 'sand', 'uu', 'fik'];
const TYPER = ['officiel', 'medie', 'faktatjek', 'osint', 'socialt', 'opslag'];
const DATO = /^\d{4}-\d{2}-\d{2}$/;
const TANKESTREG = /[\u2013\u2014\u2015\u2212]/;

const fejl = [], adv = [];
const læs = f => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { fejl.push(`${f}: kan ikke læses som JSON (${e.message})`); return null; } };
const datoOk = d => DATO.test(d) && !Number.isNaN(Date.parse(d + 'T00:00:00Z'));

// Ingen tankestreger i nogen tekst, heller ikke i kildernes titler.
function streger(v, sti, fil) {
  if (typeof v === 'string') { if (TANKESTREG.test(v)) fejl.push(`${fil}: tankestreg i ${sti}: "${v.slice(0, 80)}"`); return; }
  if (Array.isArray(v)) v.forEach((x, i) => streger(x, `${sti}[${i}]`, fil));
  else if (v && typeof v === 'object') for (const k in v) streger(v[k], `${sti}.${k}`, fil);
}

const idx = læs(path.join(MAPPE, 'teorier.json'));
if (idx) {
  if (!Array.isArray(idx.teorier) || !idx.teorier.length) fejl.push('teorier.json: listen teorier mangler eller er tom');
  const set = new Set();
  for (const t of idx.teorier || []) {
    if (!t.id || !/^[a-z0-9-]+$/.test(t.id)) fejl.push(`teorier.json: ugyldigt id ${JSON.stringify(t.id)}`);
    if (set.has(t.id)) fejl.push(`teorier.json: id ${t.id} findes to gange`); set.add(t.id);
    if (!t.fane || !t.fil || !/^[a-z0-9-]+\.json$/.test(t.fil)) fejl.push(`teorier.json: ${t.id} mangler fane eller har et ugyldigt filnavn`);
    const fil = path.join(MAPPE, t.fil || '');
    const d = fs.existsSync(fil) ? læs(fil) : (fejl.push(`${t.fil}: filen findes ikke`), null);
    if (!d) continue;
    streger(d, t.id, t.fil);
    if (d.id !== t.id) fejl.push(`${t.fil}: id ${d.id} svarer ikke til teorier.json (${t.id})`);
    for (const k of ['fane', 'paastand', 'vurdering', 'status']) if (!d[k]) fejl.push(`${t.fil}: feltet ${k} mangler`);
    // Relationerne er teoriens egne. Hver får en af de fire faste farver.
    const REL = (d.relationer || []).map(r => r.k);
    if (!REL.length) fejl.push(`${t.fil}: relationer mangler`);
    for (const r of d.relationer || []) if (!r.k || !r.l || ![1, 2, 3, 4].includes(r.farve)) fejl.push(`${t.fil}: relationen ${r.k} skal have k, l og farve 1 til 4`);
    if (d.status && !datoOk(d.status)) fejl.push(`${t.fil}: status ${d.status} er ikke en dato`);
    const K = d.kilder || {};
    for (const [k, v] of Object.entries(K)) {
      if (!v.titel) fejl.push(`${t.fil}: kilde ${k} mangler titel`);
      if (!/^https:\/\/\S+$/.test(v.url || '')) fejl.push(`${t.fil}: kilde ${k} har ingen https-adresse`);
      if (!TYPER.includes(v.type)) fejl.push(`${t.fil}: kilde ${k} har ukendt type ${v.type}`);
    }
    const brugt = new Set(), ids = new Set();
    for (const p of d.punkter || []) {
      const h = `${t.fil}: punkt ${p.id}`;
      if (!p.id || ids.has(p.id)) fejl.push(`${h}: mangler id eller findes to gange`); ids.add(p.id);
      if (!datoOk(p.d || '')) fejl.push(`${h}: ugyldig dato ${p.d}`);
      if (!p.t) fejl.push(`${h}: mangler titel`);
      if (!LVL.includes(p.lvl)) fejl.push(`${h}: evidens skal være ${LVL.join(', ')}, ikke ${p.lvl}`);
      if (!REL.includes(p.rel)) fejl.push(`${h}: relation skal være ${REL.join(', ')}, ikke ${p.rel}`);
      if (p.thr && !(d.traade || {})[p.thr]) fejl.push(`${h}: tråden ${p.thr} findes ikke i traade`);
      if (!p.fakta) fejl.push(`${h}: mangler "kildegrundlaget siger"`);
      if (!p.laes) fejl.push(`${h}: mangler "sådan bruges det i teorien"`);
      if (!Array.isArray(p.src) || !p.src.length) fejl.push(`${h}: har ingen kilde`);
      for (const s of p.src || []) { if (!K[s]) fejl.push(`${h}: kilden ${s} findes ikke`); brugt.add(s); }
      const harLat = p.lat !== undefined, harLon = p.lon !== undefined;
      if (harLat !== harLon) fejl.push(`${h}: har kun den ene koordinat`);
      if (harLat && !(Math.abs(p.lat) <= 90 && Math.abs(p.lon) <= 180)) fejl.push(`${h}: koordinater uden for kloden`);
      if (!harLat && p.approx) adv.push(`${h}: er mærket omtrentlig uden koordinater`);
    }
    for (const k of Object.keys(K)) if (!brugt.has(k)) adv.push(`${t.fil}: kilden ${k} bruges ikke af noget punkt`);
    if (d.anker && !ids.has(d.anker.id)) fejl.push(`${t.fil}: ankeret peger på ${d.anker.id}, som ikke findes`);
    for (const a of d.advarselstegn || []) if (!Array.isArray(a.traade) || a.traade.length !== 3) fejl.push(`${t.fil}: advarselstegnet "${a.tegn}" skal have tre tråde`);
    if (d.efterspil) {
      if (!d.efterspil.tekst || !d.efterspil.dato) fejl.push(`${t.fil}: efterspil skal have dato og tekst`);
      for (const s of d.efterspil.src || []) if (!K[s]) fejl.push(`${t.fil}: efterspillets kilde ${s} findes ikke`);
    }
    console.log(`${t.id}: ${(d.punkter || []).length} punkter, ${Object.keys(K).length} kilder, status ${d.status}`);
  }
}
for (const a of adv) console.log('Advarsel: ' + a);
if (fejl.length) { for (const f of fejl) console.error('Fejl: ' + f); process.exit(1); }
console.log('Kontrol bestået.');
