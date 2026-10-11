#!/usr/bin/env node
// Henter maskinmeldinger til globus.nicco.dk og skriver dem til én datafil.
//
//   node tools/hent-feeds.mjs site/feeds.json [--forrige URL-eller-fil]
//
// Kilderne er offentlige feeds fra navngivne myndigheder og organisationer.
// Scriptet bruger ingen AI og skriver kun det, kilden selv angiver: sted,
// tidspunkt, tal og kildens egen varselsfarve. Alvor oversættes efter faste
// regler, som står i ALVOR nedenfor og i OPDATERING.md.
//
// Fejler en kilde, genbruges dens meldinger fra forrige udgave af filen, med
// det gamle hentetidspunkt, så siden kan vise, at de ikke er friske.
// Smitteudbruddene i EVENTS i index.html røres ikke.

import { readFileSync, writeFileSync } from 'node:fs';

const UD = process.argv[2];
if (!UD) { console.error('Brug: node tools/hent-feeds.mjs site/feeds.json [--forrige URL]'); process.exit(2); }
const fi = process.argv.indexOf('--forrige');
const FORRIGE = fi > 0 ? process.argv[fi + 1] : null;

const LANDE = JSON.parse(readFileSync(new URL('./lande.json', import.meta.url), 'utf8'));
const NU = new Date();
const UA = 'globus.nicco.dk/1.0 (+https://globus.nicco.dk; feedlaeser)';
const DAG = 864e5;

// Hvor ofte en kilde hentes. Rejsevejledningerne er ca. 200 sider og ændres sjældent.
const INTERVAL = { um: 6 * 36e5, fcdo: 6 * 36e5, fts: 24 * 36e5 };
// Lande, hvor Udenrigsministeriet ingen rejsevejledning har. Sættes af um() og bruges af fcdo().
let UM_UDEN = null;
// Hæves, når en kildes felter ændres, så gamle meldinger hentes forfra.
const VERSION = 4;

// ---------- hjælpere ----------
async function hent(url, { tekst = true, forsoeg = 2 } = {}) {
  let sidst;
  for (let i = 0; i < forsoeg; i++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA, 'Accept-Language': 'da,en' }, signal: AbortSignal.timeout(30000) });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return tekst ? await r.text() : await r.json();
    } catch (e) { sidst = e; await new Promise(r => setTimeout(r, 1500)); }
  }
  throw new Error(`${url}: ${sidst.message}`);
}
const ent = s => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&nbsp;/g, ' ').replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d));
const tag = (s, n) => { const m = s.match(new RegExp(`<${n}(?:\\s[^>]*)?>([\\s\\S]*?)</${n}>`)); return m ? ent(m[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim()) : ''; };
const attr = (s, n, a) => { const m = s.match(new RegExp(`<${n}\\s[^>]*${a}="([^"]*)"`)); return m ? ent(m[1]) : ''; };
const ren = s => ent(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const iso = d => new Date(d).toISOString().slice(0, 16) + 'Z';
const tal = n => Number(n).toLocaleString('da-DK');
const datoDa = d => { const x = new Date(d); return x.toLocaleDateString('da-DK', { day: 'numeric', month: 'long', timeZone: 'UTC', ...(x.getUTCFullYear() !== NU.getUTCFullYear() ? { year: 'numeric' } : {}) }); };
// Engelske landenavne fra GDACS oversættes til dansk. Ukendte navne bliver stående.
const EN = new Map();
for (const L of Object.values(LANDE.lande)) for (const n of L.en || []) EN.set(n.toLowerCase(), L.n);
Object.entries({ 'russia': 'RU', 'the democratic republic of congo': 'CD', 'democratic republic of congo': 'CD', 'republic of congo': 'CG', 'the bahamas': 'BS', 'czech republic': 'CZ', 'bosnia & herzegovina': 'BA', 'united states': 'US', 'brunei': 'BN' })
  .forEach(([k, a2]) => EN.set(k, LANDE.lande[a2].n));
// Engelske landenavne til landekode, til donorlandene i FTS.
const EN2 = new Map();
for (const [a2, L] of Object.entries(LANDE.lande)) for (const n of L.en || []) EN2.set(n.toLowerCase(), a2);
Object.entries({ 'russia': 'RU', 'russian federation': 'RU', 'türkiye': 'TR', 'turkey': 'TR', 'united states': 'US', 'united kingdom': 'GB', 'korea, republic of': 'KR',
  'republic of korea': 'KR', 'czech republic': 'CZ', 'czechia': 'CZ', 'the netherlands': 'NL', 'netherlands': 'NL', 'viet nam': 'VN', 'iran, islamic republic of': 'IR' })
  .forEach(([k, a2]) => EN2.set(k, a2));
const landDa = s => { const l = s.split(/,\s*/).filter(Boolean).map(n => EN.get(n.toLowerCase()) || n); return l.length > 4 ? `${l.slice(0, 3).join(', ')} og ${l.length - 3} andre lande` : l.join(', '); };
async function iKoe(liste, n, f) {
  const ud = []; let i = 0;
  await Promise.all(Array.from({ length: n }, async () => { while (i < liste.length) { const j = i++; ud[j] = await f(liste[j]).catch(e => ({ fejl: e.message })); } }));
  return ud;
}

// ---------- alvor ----------
// Én skala fra 1 til 4 for alle retninger. Kildens egen farve bestemmer.
const ALVOR = {
  gdacs: { Green: 1, Orange: 3, Red: 4 },          // GDACS' tre varselsniveauer
  pager: { green: 1, yellow: 2, orange: 3, red: 4 }, // USGS PAGER
  meteoalarm: { Yellow: 2, Orange: 3, Red: 4 },     // Meteoalarm, grøn tages ikke med
  um: { 'var-opmarksom': 1, 'var-ekstra-forsigtig': 2, 'vi-frarader-alle-ikke-nodvendige-rejser-til': 3, 'vi-frarader-alle-rejser-til': 4 }
};

// ---------- kilder ----------
const KILDER = {
  // Jordskælv fra M5,5 eller med PAGER-varsel, seneste 7 døgn.
  async usgs() {
    const j = await hent('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson', { tekst: false });
    return j.features.filter(f => f.properties.mag >= 5.5 || f.properties.alert).map(f => {
      const p = f.properties, [lon, lat, dybde] = f.geometry.coordinates;
      const a = ALVOR.pager[p.alert] || 1;
      const del = [`Styrke ${String(p.mag).replace('.', ',')} i ${Math.round(dybde)} km dybde.`];
      del.push(p.alert ? `USGS PAGER: ${({ green: 'grøn', yellow: 'gul', orange: 'orange', red: 'rød' })[p.alert]}.` : 'USGS har ikke udsendt et PAGER-varsel.');
      if (p.tsunami) del.push('USGS har markeret skælvet med tsunamiflag. Følg de lokale myndigheder.');
      if (p.felt) del.push(`${tal(p.felt)} har meldt, at de mærkede det.`);
      return { id: 'usgs-' + f.id, ret: 'jord', alvor: a, titel: `Jordskælv M${String(p.mag).replace('.', ',')}`, sted: p.place || '', lat, lon,
        tid: iso(p.time), opd: iso(p.updated), kilde: 'USGS', url: p.url, tekst: del.join(' ') };
    });
  },

  // Storme, oversvømmelser, vulkaner, tørke og brande fra GDACS, kun igangværende.
  async gdacs() {
    const x = await hent('https://www.gdacs.org/xml/rss.xml');
    const RET = { TC: 'storm', FL: 'flod', VO: 'vulkan', DR: 'hede', WF: 'brand' };
    const NAVN = { TC: 'Tropisk cyklon', FL: 'Oversvømmelse', VO: 'Vulkanudbrud', DR: 'Tørke', WF: 'Naturbrand' };
    const ud = [];
    for (const it of x.split('<item>').slice(1)) {
      const type = tag(it, 'gdacs:eventtype'); if (!RET[type]) continue;
      if (tag(it, 'gdacs:iscurrent') !== 'true') continue;
      const niv = tag(it, 'gdacs:alertlevel'), a = ALVOR.gdacs[niv]; if (!a) continue;
      const lat = +tag(it, 'geo:lat'), lon = +tag(it, 'geo:long');
      const land = landDa(tag(it, 'gdacs:country')), navn = tag(it, 'gdacs:eventname');
      const sv = it.match(/<gdacs:severity unit="([^"]*)" value="([^"]*)"/), pop = it.match(/<gdacs:population unit="[^"]*" value="([^"]*)"/);
      const del = [`GDACS-varsel: ${({ Green: 'grønt', Orange: 'orange', Red: 'rødt' })[niv]}.`];
      if (type === 'WF' && sv && +sv[2]) del.push(`Brændt areal ca. ${tal(Math.round(+sv[2]))} ha.`);
      if (type === 'TC' && sv && +sv[2]) del.push(`Vind op til ${tal(Math.round(+sv[2]))} ${sv[1] === 'km/h' ? 'km/t' : sv[1]}.`);
      if (pop && +pop[1]) del.push(`GDACS anslår ${tal(+pop[1])} mennesker i det berørte område.`);
      const fra = tag(it, 'gdacs:fromdate');
      if (fra) del.push(`Startet ${datoDa(fra)}.`);
      ud.push({ id: `gdacs-${type}${tag(it, 'gdacs:eventid')}`, ret: RET[type], alvor: a,
        titel: NAVN[type] + (navn && type !== 'WF' && type !== 'DR' ? ' ' + navn : ''), sted: land, lat, lon,
        tid: iso(fra || tag(it, 'pubDate')), opd: iso(tag(it, 'gdacs:datemodified') || tag(it, 'pubDate')),
        kilde: 'GDACS', url: tag(it, 'link'), tekst: del.join(' '), _ep: tag(it, 'gdacs:episodeid') });
    }
    // Stormenes bane fra GDACS' geometri. Linjestykkerne sættes sammen i rækkefølge.
    await iKoe(ud.filter(x => x.ret === 'storm'), 4, async x => {
      const id = x.id.replace('gdacs-TC', '');
      const g = await hent(`https://www.gdacs.org/gdacsapi/api/polygons/getgeometry?eventtype=TC&eventid=${id}&episodeid=${x._ep || 1}`, { tekst: false });
      const stk = (g.features || []).filter(f => f.geometry && f.geometry.type === 'LineString' && /^Line_Line_\d+$/.test(f.properties.Class || ''))
        .sort((a, b) => +a.properties.Class.split('_').pop() - +b.properties.Class.split('_').pop())
        .map(f => f.geometry.coordinates.map(([lo, la]) => [Math.round(lo * 100) / 100, Math.round(la * 100) / 100]));
      const bane = [];
      for (const l of stk) {
        const sidste = bane[bane.length - 1];
        if (sidste && sidste[sidste.length - 1][0] === l[0][0] && sidste[sidste.length - 1][1] === l[0][1]) sidste.push(...l.slice(1));
        else bane.push(l);
      }
      if (bane.length) x.bane = bane;
    });
    for (const x of ud) delete x._ep;
    return ud;
  },

  // Varsler for hede, kulde, brand, oversvømmelse og vind i Europa. Ét punkt pr. land og retning.
  async meteoalarm() {
    const TYPE = { 'High-temperature': ['hede', 'hedevarsel'], 'Low-temperature': ['hede', 'kuldevarsel'], 'Forest-fire': ['brand', 'brandfarevarsel'],
      'Flooding': ['flod', 'oversvømmelsesvarsel'], 'Rain-flood': ['flod', 'varsel om regn og oversvømmelse'], 'Wind': ['storm', 'vindvarsel'], 'Coastal event': ['flod', 'varsel om højvande ved kysten'] };
    const FARVE = { Yellow: 'gult', Orange: 'orange', Red: 'rødt' };
    const svar = await iKoe(Object.entries(LANDE.meteoalarm), 6, async ([slug, a2]) => ({ a2, slug, x: await hent(`https://feeds.meteoalarm.org/feeds/meteoalarm-legacy-atom-${slug}`) }));
    const fejl = svar.filter(s => s.fejl); if (fejl.length > svar.length / 2) throw new Error(`${fejl.length} lande fejlede`);
    const grp = new Map();
    for (const s of svar) {
      if (s.fejl) continue;
      for (const e of s.x.split('<entry>').slice(1)) {
        const t = tag(e, 'title').match(/^(Yellow|Orange|Red) (.+?) Warning issued for .+? - (.+)$/i); if (!t) continue;
        const farve = t[1][0].toUpperCase() + t[1].slice(1).toLowerCase();
        const typ = Object.keys(TYPE).find(k => k.toLowerCase() === t[2].toLowerCase()); if (!typ) continue;
        const slut = new Date(tag(e, 'cap:expires')); if (!(slut > NU)) continue;
        const [ret, ord] = TYPE[typ], key = ret + s.a2;
        const g = grp.get(key) || { a2: s.a2, slug: s.slug, ret, alvor: 0, omr: new Map(), typer: new Set(), tid: null, opd: null };
        const a = ALVOR.meteoalarm[farve];
        g.alvor = Math.max(g.alvor, a); g.typer.add(ord);
        const omr = t[3].trim(); g.omr.set(omr, Math.max(g.omr.get(omr) || 0, a));
        const start = tag(e, 'cap:onset') || tag(e, 'cap:effective'), sendt = tag(e, 'cap:sent');
        if (start && (!g.tid || start < g.tid)) g.tid = start;
        if (sendt && (!g.opd || sendt > g.opd)) g.opd = sendt;
        g.farve = Object.entries(ALVOR.meteoalarm).find(([, v]) => v === g.alvor)[0];
        grp.set(key, g);
      }
    }
    return [...grp.values()].map(g => {
      const L = LANDE.lande[g.a2], omr = [...g.omr.entries()].sort((a, b) => b[1] - a[1]);
      const vis = omr.slice(0, 8).map(o => o[0]).join(', ') + (omr.length > 8 ? ` og ${omr.length - 8} andre` : '');
      return { id: `meteoalarm-${g.ret}-${g.a2}`, ret: g.ret, alvor: g.alvor,
        titel: [...g.typer].map((t, i) => i ? t : t[0].toUpperCase() + t.slice(1)).join(' og '), sted: L.n, lat: L.lat, lon: L.lon,
        tid: iso(g.tid || g.opd), opd: iso(g.opd || g.tid), kilde: 'Meteoalarm', url: `https://meteoalarm.org/en/live/region/${g.a2}`,
        tekst: `Højeste varsel: ${FARVE[g.farve]}. Gælder ${omr.length === 1 ? 'området' : omr.length + ' områder'}: ${vis}. Punktet står midt i landet.` };
    });
  },

  // Udenrigsministeriets rejsevejledninger. Lande med mindst gul (vær ekstra forsigtig).
  async um() {
    const slugs = Object.keys(LANDE.um);
    UM_UDEN = [];
    const sider = await iKoe(slugs, 5, async slug => ({ slug, s: await hent(`https://um.dk/rejse-og-ophold/rejse-til-udlandet/rejsevejledninger/${slug}/`) }));
    const fejl = sider.filter(s => s.fejl); if (fejl.length > slugs.length / 4) throw new Error(`${fejl.length} sider fejlede`);
    const NIV = { 2: 'Vær ekstra forsigtig', 3: 'Vi fraråder alle ikke-nødvendige rejser', 4: 'Vi fraråder alle rejser' };
    const ud = [];
    for (const { slug, s } of sider) {
      if (!s) continue;
      const niv = [];
      for (const m of s.matchAll(/<li class="accordion-item travel-guide-accordion__item[^"]*"\s*id="tg-accordion-([a-z-]+)">([\s\S]*?)<\/li>/g)) {
        const a = ALVOR.um[m[1]]; if (!a) continue;
        // Undertitlen er de områder, niveauet gælder for, fx "Hele landet".
        const omr = ren((m[2].match(/class="travel-guide-accordion__subtitle"[^>]*>([\s\S]*?)<\/(?:span|div|p)>/) || [, ''])[1]);
        niv.push([a, omr]);
      }
      if (!niv.length) { if (/Vi har ingen rejsevejledning/.test(s)) UM_UDEN.push(LANDE.um[slug]); continue; }
      const top = Math.max(...niv.map(n => n[0])); if (top < 2) continue;
      const a2 = LANDE.um[slug], L = LANDE.lande[a2];
      const omr = niv.filter(n => n[0] >= 2 && n[1]).sort((a, b) => b[0] - a[0]).map(([a, t]) => `${NIV[a]}: ${t.replace(/\.$/, '')}.`);
      const hele = niv.some(([a, t]) => a === top && /^hele landet\b/i.test(t) && !/undtagen/i.test(t));
      // Basis er det niveau, der gælder for resten af landet ("Hele landet" eller "Hele landet undtagen ...").
      // Siden farver landet efter basis og markerer, at dele af landet har et højere niveau.
      const hel = niv.filter(([, t]) => /^hele\b/i.test(t)).map(n => n[0]);
      const basis = hel.length ? Math.min(...hel) : Math.min(...niv.map(n => n[0]));
      const dm = ren((s.match(/id="tg-accordion-dato-for-seneste-opdatering"[\s\S]*?<\/li>/) || [''])[0]).match(/senest opdateret den (\d{1,2})\. (\w+) (\d{4})/);
      const MDR = ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'];
      const opd = dm && MDR.includes(dm[2]) ? new Date(Date.UTC(+dm[3], MDR.indexOf(dm[2]), +dm[1])) : null;
      ud.push({ id: 'um-' + slug, ret: 'krig', alvor: top, basis, a2, titel: NIV[top] + (hele ? '' : ' til dele af landet'), sted: L.n, lat: L.lat, lon: L.lon,
        tid: opd ? iso(opd) : null, opd: opd ? iso(opd) : null, kilde: 'Udenrigsministeriet',
        url: `https://um.dk/rejse-og-ophold/rejse-til-udlandet/rejsevejledninger/${slug}/`,
        tekst: omr.join(' ') + (opd ? ` Rejsevejledningen er senest opdateret ${datoDa(opd)}.` : '') });
    }
    return ud;
  },

  // Smithsonians ugentlige vulkanrapport. Ny aktivitet er alvor 2, fortsat aktivitet alvor 1.
  // Lande uden dansk rejsevejledning: det britiske udenrigsministeriums (FCDO) niveau fra GOV.UK's åbne API.
  async fcdo() {
    const uden = UM_UDEN ?? forrige.kilder?.um?.uden ?? [];
    if (!uden.length) return [];
    const idx = await hent('https://www.gov.uk/api/content/foreign-travel-advice', { tekst: false });
    const slugs = new Map();
    for (const c of idx.links?.children || []) { const n = c.details?.country?.name, sl = c.details?.country?.slug; if (n && sl) slugs.set(EN2.get(n.toLowerCase()) || n, sl); }
    const NIV = { avoid_all_travel_to_whole_country: [4, 4], avoid_all_travel_to_parts: [4, 0], avoid_all_but_essential_travel_to_whole_country: [3, 3], avoid_all_but_essential_travel_to_parts: [3, 0] };
    const TXT = { 4: 'fraråder alle rejser', 3: 'fraråder alle ikke-nødvendige rejser' };
    const svar = await iKoe(uden.filter(a2 => slugs.has(a2)), 4, async a2 => ({ a2, d: await hent(`https://www.gov.uk/api/content/foreign-travel-advice/${slugs.get(a2)}`, { tekst: false }) }));
    const ud = [];
    for (const { a2, d } of svar.filter(x => !x.fejl)) {
      const st = (d.details?.alert_status || []).map(k => NIV[k]).filter(Boolean);
      if (!st.length) continue;
      const top = Math.max(...st.map(x => x[0])), hel = st.filter(x => x[1]).map(x => x[1]);
      const basis = hel.length ? Math.max(...hel) : 1, L = LANDE.lande[a2], opd = d.public_updated_at;
      ud.push({ id: 'fcdo-' + a2, ret: 'krig', alvor: top, basis, a2, titel: `Storbritannien ${TXT[top]}` + (basis >= top ? '' : ' til dele af landet'),
        sted: L.n, lat: L.lat, lon: L.lon, tid: opd ? iso(opd) : null, opd: opd ? iso(opd) : null, kilde: 'FCDO (UK)',
        url: `https://www.gov.uk/foreign-travel-advice/${slugs.get(a2)}`,
        tekst: `Udenrigsministeriet har ingen rejsevejledning for ${L.n}. Det britiske udenrigsministerium ${TXT[top]}${basis >= top ? ' til hele landet' : ' til dele af landet'}.` + (opd ? ` Opdateret ${datoDa(opd)}.` : '') });
    }
    return ud;
  },

  async gvp() {
    const x = await hent('https://volcano.si.edu/news/WeeklyVolcanoRSS.xml');
    const ud = [];
    for (const it of x.split('<item>').slice(1)) {
      const titel = tag(it, 'title'), link = tag(it, 'link');
      const p = (tag(it, 'georss:point') || '').split(/\s+/).map(Number);
      if (p.length !== 2 || !p.every(Number.isFinite)) continue;
      const m = titel.match(/^(.+?)\s*\((.+?)\)/);
      const beskr = ren(tag(it, 'description'));
      const ny = /new activity|unrest/i.test(beskr.slice(0, 200)) || /new activity|unrest/i.test(tag(it, 'category'));
      const vnr = (link.match(/vn=(\d+)/) || [])[1] || titel;
      ud.push({ id: 'gvp-' + vnr, ret: 'vulkan', alvor: ny ? 2 : 1, titel: m ? m[1] : titel, sted: m ? m[2] : '', lat: p[0], lon: p[1],
        tid: iso(tag(it, 'pubDate') || NU), opd: iso(tag(it, 'pubDate') || NU), kilde: 'Smithsonian GVP', url: link,
        tekst: (ny ? 'Ny aktivitet eller uro i ugens rapport.' : 'Fortsat aktivitet i ugens rapport.') + ' Rapporten udgives på engelsk af Smithsonian og USGS.' });
    }
    return ud;
  }
};

// ---------- kontrol ----------
const RETNINGER = new Set(['krig', 'smitte', 'hede', 'jord', 'flod', 'storm', 'brand', 'vulkan']);
function gyldig(h) {
  return h && typeof h.id === 'string' && RETNINGER.has(h.ret) && Number.isInteger(h.alvor) && h.alvor >= 1 && h.alvor <= 4
    && Number.isFinite(h.lat) && Number.isFinite(h.lon) && Math.abs(h.lat) <= 90 && Math.abs(h.lon) <= 180
    && typeof h.titel === 'string' && h.titel && typeof h.kilde === 'string' && /^https:\/\//.test(h.url || '');
}

// ---------- kør ----------
let forrige = { kilder: {}, h: [] };
if (FORRIGE) {
  try { forrige = /^https?:/.test(FORRIGE) ? await hent(FORRIGE + (FORRIGE.includes('?') ? '&' : '?') + 'v=' + Date.now(), { tekst: false }) : JSON.parse(readFileSync(FORRIGE, 'utf8')); }
  catch (e) { console.log(`Forrige udgave kunne ikke læses (${e.message}). Starter forfra.`); }
}
const kilder = {}, h = [];
for (const [navn, f] of Object.entries(KILDER)) {
  const gl = forrige.kilder?.[navn];
  // Genbrug kræver, at de gemte meldinger har samme felter som nu (version).
  if (INTERVAL[navn] && gl?.ok && gl.v === VERSION && NU - new Date(gl.hentet) < INTERVAL[navn]) {
    const genbrug = (forrige.h || []).filter(x => x.id.startsWith(navn === 'um' ? 'um-' : navn + '-'));
    kilder[navn] = gl; h.push(...genbrug);
    console.log(`${navn}: genbrugt ${genbrug.length} fra ${gl.hentet} (hentes højst hver ${INTERVAL[navn] / 36e5}. time)`);
    continue;
  }
  try {
    const t0 = Date.now();
    const alle = await f(), ok = alle.filter(gyldig);
    if (ok.length < alle.length) console.log(`${navn}: ${alle.length - ok.length} meldinger afvist i kontrollen`);
    kilder[navn] = { ok: true, v: VERSION, hentet: NU.toISOString(), antal: ok.length };
    if (navn === 'um') kilder.um.uden = UM_UDEN;
    h.push(...ok);
    console.log(`${navn}: ${ok.length} meldinger (${((Date.now() - t0) / 1000).toFixed(1)} s)`);
  } catch (e) {
    const praefiks = navn === 'um' ? 'um-' : navn + '-';
    const genbrug = (forrige.h || []).filter(x => x.id.startsWith(praefiks) && gyldig(x));
    kilder[navn] = { ok: false, hentet: gl?.hentet || null, antal: genbrug.length, fejl: String(e.message).slice(0, 200) };
    h.push(...genbrug);
    console.log(`::warning::${navn} fejlede (${e.message}). Genbruger ${genbrug.length} meldinger fra forrige udgave.`);
  }
}
// ---------- forbindelser: humanitær hjælp fra OCHA FTS ----------
// For lande med rejsevejledning fra orange og op: alle donorlande med mindst 1 mio. USD i år
// (udbetalt eller forpligtet, ikke løfter). EU's organer samles som EU.
const MIN_USD = 1e6;
let f = [];
{
  const gl = forrige.kilder?.fts;
  if (gl?.ok && gl.v === VERSION && NU - new Date(gl.hentet) < INTERVAL.fts && Array.isArray(forrige.f)) {
    f = forrige.f; kilder.fts = gl;
    console.log(`fts: genbrugt ${f.length} forbindelser fra ${gl.hentet}`);
  } else {
    try {
      const aar = NU.getUTCFullYear(), t0 = Date.now();
      const lande = [...new Set(h.filter(x => x.ret === 'krig' && x.alvor >= 3 && x.a2).map(x => x.a2))];
      const svar = await iKoe(lande, 3, async a2 => ({ a2, j: await hent(`https://api.hpc.tools/v1/public/fts/flow?countryISO3=${LANDE.lande[a2].i3}&year=${aar}`, { tekst: false }) }));
      const fejl = svar.filter(x => x.fejl); if (fejl.length > lande.length / 2) throw new Error(`${fejl.length} lande fejlede`);
      const ukendt = new Set();
      for (const { a2, j } of svar.filter(x => !x.fejl)) {
        const sum = new Map(); let locId = null;
        for (const fl of j.data?.flows || []) {
          if (fl.status === 'pledge') continue;
          const dest = (fl.destinationObjects || []).find(o => o.type === 'Location');
          if (!dest) continue; locId = locId || dest.id;
          const org = (fl.sourceObjects || []).find(o => o.type === 'Organization');
          const loc = (fl.sourceObjects || []).find(o => o.type === 'Location');
          let nogle = null;
          if (org && /^European Commission/i.test(org.name)) nogle = 'EU';
          else if (loc && org && (org.organizationTypes || []).includes('Governments')) { nogle = EN2.get(loc.name.toLowerCase()); if (!nogle) ukendt.add(loc.name); }
          if (!nogle || nogle === a2) continue;
          sum.set(nogle, (sum.get(nogle) || 0) + (+fl.amountUSD || 0));
        }
        for (const [d, usd] of sum) {
          if (usd < MIN_USD) continue;
          const L = d === 'EU' ? { n: 'EU', lat: 50.85, lon: 4.35 } : LANDE.lande[d];
          if (!L) continue;
          f.push({ id: `fts-${a2}-${d}`, type: 'hjaelp', til: a2, fra: d, fraNavn: L.n, lat: L.lat, lon: L.lon, usd: Math.round(usd), aar,
            kilde: 'OCHA FTS', url: locId ? `https://fts.unocha.org/countries/${locId}/summary/${aar}` : 'https://fts.unocha.org/' });
        }
      }
      if (ukendt.size) console.log(`fts: ukendte donorlande sprunget over: ${[...ukendt].slice(0, 15).join(', ')}`);
      kilder.fts = { ok: true, v: VERSION, hentet: NU.toISOString(), antal: f.length };
      console.log(`fts: ${f.length} forbindelser til ${lande.length} lande (${((Date.now() - t0) / 1000).toFixed(1)} s)`);
    } catch (e) {
      f = Array.isArray(forrige.f) ? forrige.f : [];
      kilder.fts = { ok: false, hentet: forrige.kilder?.fts?.hentet || null, antal: f.length, fejl: String(e.message).slice(0, 200) };
      console.log(`::warning::fts fejlede (${e.message}). Genbruger ${f.length} forbindelser.`);
    }
  }
  f = f.filter(x => x && Number.isFinite(x.lat) && Number.isFinite(x.lon) && /^https:\/\//.test(x.url) && x.usd >= MIN_USD);
}

// Samme id to gange kan ikke forekomme. Den første vinder.
const set = new Set(), ud = h.filter(x => !set.has(x.id) && set.add(x.id));
ud.sort((a, b) => b.alvor - a.alvor || (b.opd || '').localeCompare(a.opd || ''));
writeFileSync(UD, JSON.stringify({ genereret: NU.toISOString(), kilder, h: ud, f }) + '\n');
const pr = {}; for (const x of ud) pr[x.ret] = (pr[x.ret] || 0) + 1;
console.log(`Skrev ${ud.length} meldinger til ${UD}: ${Object.entries(pr).map(([k, v]) => `${k} ${v}`).join(', ')}`);
