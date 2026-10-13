// Pages Function på https://globus.nicco.dk/h/<id>
// Delte links går hertil, så et link til en hændelse, et sted eller et land får sin egen titel, tekst og
// (når Wikipedia har et frit billede af emnet) sit eget billede, når det deles på fx Facebook eller Messenger.
// En person, der åbner linket, sendes straks videre til https://globus.nicco.dk/#<id>.
import { hentData, smitteAlvor, smitteMistanke, esc } from '../../lib/data.mjs';

const STANDARD = 'Verden lige nu på en klode: krig og konflikt, smitteudbrud, naturkatastrofer og rejsevejledninger. Hver oplysning med sin navngivne kilde.';
const ALV = ['', 'Under opsyn', 'Vær opmærksom', 'Alvorligt', 'Kritisk', 'Akut'];
const RNAVN = { rejse: 'Rejsevejledning', krig: 'Krig og konflikt', smitte: 'Smitteudbrud', hede: 'Hede og klima', jord: 'Jordskælv', flod: 'Oversvømmelse', storm: 'Storm', brand: 'Naturbrand', vulkan: 'Vulkan' };
// Engelske Wikipedia-artikler til billedet, samme valg som siden selv bruger.
const SYG = [[/^Ebola/, 'Ebola'], [/^Mæslinger/, 'Measles'], [/^Fugleinfluenza/, 'Avian influenza'], [/^Salmonell/, 'Salmonella'], [/^Mpox/, 'Mpox'], [/^Polio/, 'Poliomyelitis'], [/^Kolera/, 'Cholera'], [/^Dengue/, 'Dengue fever'], [/^Miltbrand/, 'Anthrax'], [/^Marburg/, 'Marburg virus disease'], [/^Lungebetændelse/, 'Pneumonia'], [/^Pest/, 'Plague (disease)']];

async function wikiBillede(titel) {
  if (!titel) return null;
  try {
    const r = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(titel)}`, { headers: { 'user-agent': 'globus.nicco.dk (delte links)' }, cf: { cacheTtl: 86400 } });
    if (!r.ok) return null;
    const j = await r.json();
    // Facebook og Messenger viser ikke SVG. Er originalen en SVG (fx et flag), bruges Wikipedias PNG-udgave.
    const org = j.originalimage && j.originalimage.source, lille = j.thumbnail && j.thumbnail.source;
    const u = String((org && !/\.svg($|\?)/i.test(org) ? org : lille) || '').split('?')[0];
    // Kun frie billeder fra Wikimedia Commons, som på siden.
    return /^https:\/\/(upload|thumb)\.wikimedia\.org\/wikipedia\/commons\//.test(u) ? u : null;
  } catch { return null; }
}

export async function onRequest({ request, params, env }) {
  const url = new URL(request.url);
  const id = String(params.id || '').slice(0, 120);
  const d = await hentData(env, url.origin);
  const landNavn = a2 => (d.hs && d.hs.h && d.hs.h[a2] && d.hs.h[a2][0]) || a2;
  // Engelsk navn til Wikipedia: fra Intl, når den findes, ellers fra GDELT-navnet i konflikter.json.
  const enNavn = a2 => { try { const n = new Intl.DisplayNames(['en'], { type: 'region' }).of(a2); if (n && n !== a2) return n; } catch {} const k = ((d.konf && d.konf.k) || []).find(x => x.a2 === a2); return k && k.en ? k.en : null; };
  let titel = 'globus.nicco.dk', tekst = STANDARD, emne = null;

  const ev = (d.events || []).find(e => e.id === id);
  const fd = ((d.feeds && d.feeds.h) || []).find(e => e.id === id);
  const land = id.match(/^(?:land|konflikt)-([A-Z]{2})$/);
  const sted = id.match(/^sted-([dk])-(-?\d+(?:p\d+)?)_(-?\d+(?:p\d+)?)$/);
  if (ev) {
    const a = smitteAlvor(ev);
    titel = `${ev.disease} · ${ev.country}`;
    tekst = (smitteMistanke(ev) ? `Mistanke om smitteudbrud, ikke bekræftet. ${ev.note || ''}` : `Smitteudbrud, alvor ${a} (${ALV[a].toLowerCase()}). ${ev.note || ''}`).trim();
    emne = (SYG.find(([r]) => r.test(ev.disease)) || [])[1] || null;
  } else if (fd) {
    titel = fd.sted ? `${fd.titel} · ${fd.sted}` : fd.titel;
    tekst = `${RNAVN[fd.ret] || ''}${fd.alvor ? `, alvor ${fd.alvor}` : ''}. ${fd.tekst || ''} Kilde: ${fd.kilde}.`.replace(/^, /, '').trim();
    emne = fd.a2 ? enNavn(fd.a2) : null;
  } else if (land) {
    const a2 = land[1];
    titel = `${landNavn(a2)} · alt om landet lige nu`;
    tekst = `Rejsevejledning, krig og konflikt, smitteudbrud og varsler for ${landNavn(a2)}, samlet fra navngivne kilder.`;
    emne = enNavn(a2);
  } else if (sted && d.konf) {
    const la = +sted[2].replace('p', '.'), lo = +sted[3].replace('p', '.');
    const celle = (sted[1] === 'd' ? d.konf.vd : d.konf.v || []).find(c => c[0] === la && c[1] === lo);
    const navn = celle && celle[4] && celle[4].navn ? celle[4].navn : 'Et sted';
    titel = `${sted[1] === 'd' ? 'Demonstrationer' : 'Kampe og angreb'} · ${navn}`;
    tekst = celle ? `Omtalt ${Number(celle[2]).toLocaleString('da-DK')} gange af medierne på listen de sidste 7 dage, ifølge GDELT. Medier er ikke myndigheder.` : STANDARD;
    emne = celle && celle[3] ? enNavn(celle[3]) : null;
  }
  if (tekst.length > 300) tekst = tekst.slice(0, 297).replace(/\s+\S*$/, '') + '…';
  const billede = (await wikiBillede(emne)) || `${url.origin}/og.png`;
  const maal = `${url.origin}/${id ? '#' + encodeURIComponent(id) : ''}`;
  const html = `<!doctype html>
<html lang="da">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titel)} · globus.nicco.dk</title>
<meta name="description" content="${esc(tekst)}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="globus.nicco.dk">
<meta property="og:title" content="${esc(titel)}">
<meta property="og:description" content="${esc(tekst)}">
<meta property="og:url" content="${esc(url.origin + url.pathname)}">
<meta property="og:image" content="${esc(billede)}">
<meta property="og:locale" content="da_DK">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="${esc(maal)}">
<meta http-equiv="refresh" content="0; url=${esc(maal)}">
<style>body{font:16px system-ui,sans-serif;background:#070d14;color:#e4ecf3;padding:24px}a{color:#4fb3c9}</style>
</head>
<body>
<p><a href="${esc(maal)}">Åbn ${esc(titel)} på globus.nicco.dk</a></p>
<script>location.replace(${JSON.stringify(maal)});</script>
</body>
</html>`;
  return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=900' } });
}
