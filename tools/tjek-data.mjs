#!/usr/bin/env node
// Kontrollerer datasættet i site/index.html, før siden udrulles.
//
// Brug:  node tools/tjek-data.mjs [sti til index.html] [--forrige <sti til forrige udgave>] [--links]
//
// Kontrollen fanger formfejl: et script der ikke kan læses, en hændelse uden kilde,
// en dato i fremtiden, byttede koordinater, en hændelse der er forsvundet, et nyt
// forløbspunkt uden kilde.
// Den kan ikke se, om et tal er rigtigt. Det ansvar ligger i kilderne, se OPDATERING.md.
//
// FEJL standser udrulningen. ADVARSEL gør ikke, men skal læses.
//
// --links slår kildeadresserne op med curl og advarer om dem, der ikke svarer. Med --forrige
// kontrolleres kun de adresser, der er kommet til siden forrige udgave, ellers alle.
// Workflowet bruger ikke --links, fordi en kilde, der er nede, ikke må standse en udrulning.

import fs from 'node:fs';
import vm from 'node:vm';
import { execFile } from 'node:child_process';

const args = process.argv.slice(2);
const iForrige = args.indexOf('--forrige');
const forrigeSti = iForrige >= 0 ? args[iForrige + 1] : null;
const medLinks = args.includes('--links');
const sti = args.find((a, i) => !a.startsWith('--') && (iForrige < 0 || i !== iForrige + 1)) || 'site/index.html';

const TRIN = ['mistanke', 'udbrud', 'smitte', 'spredning', 'variant', 'reservoir'];
const LINKTYPER = ['eksport', 'rute', 'udbredelse', 'respons'];
const DATO = /^\d{4}(-\d{2}(-\d{2})?)?$/;
const HEL_DATO = /^\d{4}-\d{2}-\d{2}$/;
const DOEGN = 24 * 3600 * 1000;
// En hændelse med live:true skal have et nyt punkt i forløbet inden for så mange dage.
const LIVE_DAGE = 30;

const fejl = [];
const advarsler = [];

function ms(s) {
  const p = String(s).split('-').map(Number);
  const d = Date.UTC(p[0], (p[1] || 1) - 1, p[2] || 1);
  // Afviser datoer som 2026-02-31, der ellers ruller videre til marts.
  const k = new Date(d);
  if (k.getUTCFullYear() !== p[0] || (p[1] && k.getUTCMonth() + 1 !== p[1]) || (p[2] && k.getUTCDate() !== p[2])) return NaN;
  return d;
}

// Læser DATA_DATO og EVENTS ud af sidens script uden at køre resten af siden.
function laes(filsti) {
  const html = fs.readFileSync(filsti, 'utf8');
  const a = html.indexOf('<script>'), b = html.lastIndexOf('</script>');
  if (a < 0 || b < a) throw new Error('fandt ikke sidens script');
  const js = html.slice(a + 8, b);
  new vm.Script(js, { filename: filsti }); // kaster ved syntaksfejl i hele scriptet
  const m = js.match(/const DATA_DATO = '([^']*)';/);
  const s = js.indexOf('const EVENTS = ['), e = js.indexOf('\n];', s);
  if (s < 0 || e < 0) throw new Error('fandt ikke EVENTS');
  const events = vm.runInNewContext('(' + js.slice(s + 'const EVENTS = '.length, e + 2) + ')', Object.create(null), { timeout: 2000 });
  return { html, dato: m ? m[1] : null, events };
}

const tekst = (v) => typeof v === 'string' && v.trim().length > 0;
const tal = (v) => typeof v === 'number' && Number.isFinite(v);

function tjekDato(hvor, d, slut, { hel = false } = {}) {
  if (typeof d !== 'string' || !(hel ? HEL_DATO : DATO).test(d) || Number.isNaN(ms(d))) {
    fejl.push(`${hvor}: ugyldig dato ${JSON.stringify(d)}`);
    return NaN;
  }
  if (ms(d) > slut) fejl.push(`${hvor}: datoen ${d} ligger efter datasættets dato`);
  return ms(d);
}

// En kilde er [navn, adresse] med https-adresse.
function tjekKilde(hvor, s) {
  if (!Array.isArray(s) || s.length !== 2 || !tekst(s[0])) { fejl.push(`${hvor}: skal være [navn, adresse]`); return; }
  let u = null;
  try { u = new URL(s[1]); } catch { /* ugyldig adresse */ }
  if (!u || u.protocol !== 'https:') fejl.push(`${hvor}: adressen skal begynde med https://`);
}

// Nøgle for et forløbspunkt: dato og tekst. Kilden i fjerde felt er ikke med, så en kilde
// kan sættes på et gammelt punkt, uden at punktet regnes som ændret.
const punkt = (r) => JSON.stringify([r[0], r[1]]);

function adresser(events) {
  const ud = new Set();
  for (const e of events || []) {
    if (!e || typeof e !== 'object') continue;
    for (const k of Array.isArray(e.src) ? e.src : []) if (Array.isArray(k) && tekst(k[1])) ud.add(k[1]);
    for (const r of Array.isArray(e.tl) ? e.tl : []) if (Array.isArray(r) && Array.isArray(r[3]) && tekst(r[3][1])) ud.add(r[3][1]);
  }
  return ud;
}

let nu;
try {
  nu = laes(sti);
} catch (err) {
  console.error(`FEJL: ${sti} kan ikke læses: ${err.message}`);
  process.exit(1);
}

// ---------- datasættets dato ----------
let slut = Infinity;
if (!nu.dato) {
  fejl.push('DATA_DATO mangler');
} else if (!HEL_DATO.test(nu.dato) || Number.isNaN(ms(nu.dato))) {
  fejl.push(`DATA_DATO er ugyldig: ${nu.dato}`);
} else {
  slut = ms(nu.dato);
  // Én dags slør, så en kørsel sent om aftenen dansk tid ikke fejler på UTC.
  if (slut > Date.now() + 36 * 3600 * 1000) fejl.push(`DATA_DATO ${nu.dato} ligger i fremtiden`);
}

// ---------- hændelserne ----------
const ev = nu.events;
const udenDato = [];   // cases med tal, men uden opgørelsesdato
const liveStille = []; // live:true uden nyt punkt i LIVE_DAGE dage
if (!Array.isArray(ev) || ev.length === 0) {
  fejl.push('EVENTS er tom eller ikke en liste');
} else {
  const ids = new Set();
  for (const [n, e] of ev.entries()) {
    const id = e && typeof e.id === 'string' ? e.id : `nr. ${n + 1}`;
    if (!e || typeof e !== 'object') { fejl.push(`${id}: ikke et objekt`); continue; }
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(e.id || '')) fejl.push(`${id}: id skal være små bogstaver, tal og bindestreger`);
    if (ids.has(e.id)) fejl.push(`${id}: id findes flere gange`);
    ids.add(e.id);

    for (const f of ['place', 'country', 'region', 'disease', 'pathogen', 'cases', 'note']) {
      if (!tekst(e[f])) fejl.push(`${id}: feltet ${f} mangler eller er tomt`);
    }
    for (const f of ['extra', 'naeste', 'gap', 'plabel']) if (f in e && !tekst(e[f])) fejl.push(`${id}: feltet ${f} er tomt`);
    if ('live' in e && typeof e.live !== 'boolean') fejl.push(`${id}: live skal være true eller false`);
    // alvor er valgfri: et helt tal fra 1 til 4. Mangler den, følger alvor trinnet.
    if ('alvor' in e && !(Number.isInteger(e.alvor) && e.alvor >= 1 && e.alvor <= 4)) fejl.push(`${id}: alvor skal være et helt tal fra 1 til 4`);

    // Et tal i cases skal stå med opgørelsesdato: "..., US CDC pr. 5. oktober".
    if (tekst(e.cases) && /\d/.test(e.cases) && !/\bpr\. /.test(e.cases)) udenDato.push(id);

    if (!tal(e.lat) || Math.abs(e.lat) > 90) fejl.push(`${id}: lat ${e.lat} er ugyldig`);
    if (!tal(e.lon) || Math.abs(e.lon) > 180) fejl.push(`${id}: lon ${e.lon} er ugyldig`);
    if (!TRIN.includes(e.stage)) fejl.push(`${id}: ukendt trin ${JSON.stringify(e.stage)}`);

    // Forløb: mindst ét punkt, i datoorden, og sidste angivne trin skal være hændelsens trin.
    // Et punkt er [dato, tekst, trin] eller [dato, tekst, trin, [navn, adresse]] med punktets kilde.
    if (!Array.isArray(e.tl) || e.tl.length === 0) {
      fejl.push(`${id}: tl mangler`);
    } else {
      let forrige = -Infinity, sidsteTrin = null;
      for (const [i, r] of e.tl.entries()) {
        const hvor = `${id} tl[${i}]`;
        if (!Array.isArray(r) || (r.length !== 3 && r.length !== 4)) { fejl.push(`${hvor}: skal være [dato, tekst, trin] eller [dato, tekst, trin, [navn, adresse]]`); continue; }
        const d = tjekDato(hvor, r[0], slut);
        if (d < forrige) fejl.push(`${hvor}: ${r[0]} ligger før det forrige punkt`);
        if (!Number.isNaN(d)) forrige = d;
        if (!tekst(r[1])) fejl.push(`${hvor}: teksten mangler`);
        if (r[2] !== '' && !TRIN.includes(r[2])) fejl.push(`${hvor}: ukendt trin ${JSON.stringify(r[2])}`);
        if (r[2]) sidsteTrin = r[2];
        if (r.length === 4) tjekKilde(`${hvor} kilde`, r[3]);
      }
      if (sidsteTrin && sidsteTrin !== e.stage) fejl.push(`${id}: stage er ${e.stage}, men forløbet ender på ${sidsteTrin}`);
      if (!sidsteTrin) advarsler.push(`${id}: intet punkt i forløbet angiver et trin`);
      if (e.live === true && Number.isFinite(slut) && Number.isFinite(forrige) && slut - forrige > LIVE_DAGE * DOEGN) {
        liveStille.push(`${id} (${Math.round((slut - forrige) / DOEGN)} dage)`);
      }
    }

    // Stedknuder: [navn, lon, lat, dato]. Bemærk rækkefølgen lon før lat.
    if ('nodes' in e) {
      if (!Array.isArray(e.nodes) || e.nodes.length === 0) fejl.push(`${id}: nodes er tom`);
      else for (const [i, k] of e.nodes.entries()) {
        const hvor = `${id} nodes[${i}]`;
        if (!Array.isArray(k) || k.length !== 4) { fejl.push(`${hvor}: skal være [navn, lon, lat, dato]`); continue; }
        if (!tekst(k[0])) fejl.push(`${hvor}: navn mangler`);
        if (!tal(k[1]) || Math.abs(k[1]) > 180) fejl.push(`${hvor}: lon ${k[1]} er ugyldig`);
        if (!tal(k[2]) || Math.abs(k[2]) > 90) fejl.push(`${hvor}: lat ${k[2]} er ugyldig (er lon og lat byttet om?)`);
        tjekDato(hvor, k[3], slut);
      }
    }

    // Forbindelser: [fra, til, dato, type], hvor fra og til er numre i nodes.
    if ('links' in e) {
      if (!Array.isArray(e.links)) fejl.push(`${id}: links skal være en liste`);
      else for (const [i, l] of e.links.entries()) {
        const hvor = `${id} links[${i}]`;
        if (!Array.isArray(l) || l.length !== 4) { fejl.push(`${hvor}: skal være [fra, til, dato, type]`); continue; }
        const antal = Array.isArray(e.nodes) ? e.nodes.length : 0;
        for (const x of [l[0], l[1]]) if (!Number.isInteger(x) || x < 0 || x >= antal) fejl.push(`${hvor}: knude ${x} findes ikke`);
        if (l[0] === l[1]) fejl.push(`${hvor}: fra og til er samme knude`);
        tjekDato(hvor, l[2], slut);
        if (!LINKTYPER.includes(l[3])) fejl.push(`${hvor}: ukendt type ${JSON.stringify(l[3])}`);
      }
    }

    // Talserie: [dato, tilfælde, dødsfald eller null], i datoorden.
    if ('pts' in e) {
      if (!Array.isArray(e.pts) || e.pts.length < 2) fejl.push(`${id}: pts skal have mindst to punkter`);
      else {
        let forrige = -Infinity;
        for (const [i, p] of e.pts.entries()) {
          const hvor = `${id} pts[${i}]`;
          if (!Array.isArray(p) || p.length !== 3) { fejl.push(`${hvor}: skal være [dato, tilfælde, dødsfald]`); continue; }
          const d = tjekDato(hvor, p[0], slut);
          if (d < forrige) fejl.push(`${hvor}: ${p[0]} ligger før det forrige punkt`);
          if (!Number.isNaN(d)) forrige = d;
          if (!tal(p[1]) || p[1] < 0) fejl.push(`${hvor}: antal tilfælde ${p[1]} er ugyldigt`);
          if (p[2] !== null && (!tal(p[2]) || p[2] < 0)) fejl.push(`${hvor}: antal dødsfald ${p[2]} er ugyldigt`);
        }
        if (!tekst(e.plabel)) fejl.push(`${id}: pts findes, men plabel mangler`);
      }
    }

    // Kilder: mindst én, hver med navn og https-adresse.
    if (!Array.isArray(e.src) || e.src.length === 0) {
      fejl.push(`${id}: ingen kilder`);
    } else for (const [i, s] of e.src.entries()) tjekKilde(`${id} src[${i}]`, s);
  }

  for (const e of ev) for (const r of (e && e.rel) || []) {
    if (!ids.has(r)) fejl.push(`${e.id}: rel peger på ${r}, som ikke findes`);
  }
}

if (udenDato.length) advarsler.push(`cases har tal uden opgørelsesdato ("pr. ...") i ${udenDato.length} hændelser: ${udenDato.join(', ')}. Sæt kilde og dato på, næste gang tallet opdateres`);
if (liveStille.length) advarsler.push(`live:true uden nyt punkt i forløbet i over ${LIVE_DAGE} dage: ${liveStille.join(', ')}. Sæt live til false, hvis kilderne er tavse`);

// Tankestreger bruges ikke i sidens tekster.
{
  const m = JSON.stringify(ev || []).match(/[—–]/g);
  if (m) fejl.push(`datasættet indeholder ${m.length} tankestreg(er). Brug komma, punktum eller kolon`);
}

// ---------- sammenligning med forrige udgave ----------
let foer = null;
if (forrigeSti) {
  try { foer = laes(forrigeSti); } catch (err) { advarsler.push(`forrige udgave kunne ikke læses, sammenligning sprunget over: ${err.message}`); }
  if (foer && Array.isArray(ev)) {
    const nuIds = new Set(ev.map((e) => e && e.id));
    const vaek = foer.events.map((e) => e.id).filter((id) => !nuIds.has(id));
    if (vaek.length) fejl.push(`hændelser er forsvundet: ${vaek.join(', ')}. En afsluttet hændelse beholdes med live:false`);
    if (foer.dato && nu.dato && HEL_DATO.test(nu.dato) && ms(nu.dato) < ms(foer.dato)) fejl.push(`DATA_DATO går baglæns: ${foer.dato} til ${nu.dato}`);
    const nye = ev.filter((e) => !foer.events.some((f) => f.id === e.id)).map((e) => e.id);
    if (nye.length > 5) fejl.push(`${nye.length} nye hændelser i én opdatering (højst 5): ${nye.join(', ')}`);
    const aendret = ev.filter((e) => { const f = foer.events.find((x) => x.id === e.id); return f && JSON.stringify(f) !== JSON.stringify(e); }).map((e) => e.id);

    // Forløbet: et nyt eller ændret punkt skal bære sin kilde, og gamle punkter skal stå, som de stod.
    for (const e of ev) {
      if (!e || !Array.isArray(e.tl)) continue;
      const f = foer.events.find((x) => x.id === e.id);
      const gamle = Array.isArray(f && f.tl) ? f.tl.filter(Array.isArray) : [];
      const kendte = new Set(gamle.map(punkt));
      for (const [i, r] of e.tl.entries()) {
        if (!Array.isArray(r) || kendte.has(punkt(r))) continue;
        if (!Array.isArray(r[3])) fejl.push(`${e.id} tl[${i}]: nyt eller ændret punkt uden kilde. Sæt kilden som fjerde felt: [dato, tekst, trin, [navn, adresse]]`);
      }
      const staar = new Set(e.tl.filter(Array.isArray).map(punkt));
      const rettet = gamle.filter((r) => !staar.has(punkt(r)));
      if (rettet.length) advarsler.push(`${e.id}: ${rettet.length} punkt(er) fra forrige udgave er ændret eller fjernet (${rettet.map((r) => r[0]).join(', ')}). Gamle punkter rettes kun af ejeren, se OPDATERING.md`);
    }

    console.log(`Sammenlignet med forrige udgave: ${nye.length} nye (${nye.join(', ') || 'ingen'}), ${aendret.length} ændrede (${aendret.join(', ') || 'ingen'}), dato ${foer.dato || 'ukendt'} til ${nu.dato}.`);
  }
}

// ---------- kildeadresser ----------
// Slår adresserne op med curl, som følger systemets proxy og certifikater. Giver kun advarsler:
// flere myndigheder afviser automatiske opslag med 403, selv om siden findes.
function slaaOp(adresse) {
  return new Promise((resolve) => {
    execFile('curl', ['-sS', '-L', '-o', '/dev/null', '-m', '25', '-A', 'Mozilla/5.0 (kildekontrol, globus.nicco.dk)', '-w', '%{http_code}', adresse],
      { timeout: 40000 }, (err, stdout) => {
        if (err && err.code === 'ENOENT') return resolve({ adresse, mangler: true });
        const kode = Number(String(stdout).trim().slice(-3)) || 0;
        resolve({ adresse, kode });
      });
  });
}

if (medLinks && Array.isArray(ev)) {
  const kendte = foer ? adresser(foer.events) : new Set();
  const liste = [...adresser(ev)].filter((a) => !kendte.has(a));
  const svar = [];
  for (let i = 0; i < liste.length; i += 6) svar.push(...await Promise.all(liste.slice(i, i + 6).map(slaaOp)));
  if (svar.some((s) => s.mangler)) {
    advarsler.push('kildeadresserne er ikke kontrolleret: curl findes ikke');
  } else {
    let daarlige = 0;
    for (const s of svar) {
      if (s.kode >= 200 && s.kode < 400) continue;
      daarlige++;
      const hvad = s.kode === 0 ? 'svarede ikke' : `svarede ${s.kode}`;
      const mere = s.kode === 403 || s.kode === 429 ? ' Kan være en afvisning af automatiske opslag' : '';
      advarsler.push(`kilden ${s.adresse} ${hvad}.${mere} Åbn den på anden vis, før den bruges`);
    }
    console.log(`Kildeadresser kontrolleret: ${svar.length}${foer ? ' nye siden forrige udgave' : ''}, heraf ${daarlige} uden gyldigt svar.`);
  }
}

for (const a of advarsler) console.log(`ADVARSEL: ${a}`);
if (fejl.length) {
  for (const f of fejl) console.error(`FEJL: ${f}`);
  console.error(`\nDatakontrol fejlede med ${fejl.length} fejl. Siden udrulles ikke.`);
  process.exit(1);
}
console.log(`Datakontrol bestået: ${ev.length} hændelser, datasæt pr. ${nu.dato}${advarsler.length ? `, ${advarsler.length} advarsler` : ''}.`);
