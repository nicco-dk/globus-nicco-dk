// Pages Function på https://globus.nicco.dk/feed?land=DK
// RSS for ét land: rejsevejledning, varsler i landet og konflikter ifølge mediesporet.
// Bygges af de samme filer, som siden bruger (feeds.json, konflikter.json, hovedstaeder.json).
// Et punkt får et nyt id, når det ændrer sig, så en RSS-læser viser det som nyt.

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]));
const rfc = iso => { const d = new Date(iso || Date.now()); return isNaN(d) ? new Date().toUTCString() : d.toUTCString(); };

export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  const a2 = (url.searchParams.get('land') || '').toUpperCase();
  if (!/^[A-Z]{2}$/.test(a2)) return new Response('Angiv et land, fx /feed?land=DK', { status: 400, headers: { 'content-type': 'text/plain; charset=utf-8' } });
  const hent = async sti => { try { const r = await env.ASSETS.fetch(new URL(sti, url.origin)); return r.ok ? await r.json() : null; } catch { return null; } };
  const [feeds, konf, hs] = await Promise.all([hent('/feeds.json'), hent('/konflikter.json'), hent('/hovedstaeder.json')]);
  const navn = hs?.h?.[a2]?.[0] || a2;
  const side = `https://globus.nicco.dk/`;
  const punkter = [];
  for (const h of feeds?.h || []) {
    const iLand = h.a2 === a2 || (h.sted || '').split(/, | og /).includes(navn);
    if (!iLand) continue;
    punkter.push({ id: `${h.id}@${h.opd || h.tid || ''}@${h.alvor}`, titel: `${h.titel} · ${h.sted} (alvor ${h.alvor})`, tekst: `${h.tekst || ''} Kilde: ${h.kilde}.`, link: `${side}#${h.id}`, dato: h.opd || h.tid || feeds.genereret });
  }
  for (const x of konf?.s || []) {
    if (x.status === 'mistanke' || (x.a !== a2 && x.b !== a2)) continue;
    const anden = x.a === a2 ? x.bNavn : x.aNavn;
    const hvad = x.type === 'militaer' ? (x.b === a2 ? `Militær støtte fra ${x.aNavn}` : `Militær støtte til ${x.bNavn}`) : `Konflikt med ${anden}`;
    const status = x.status === 'bekraeftet' ? 'bekræftet af medier' : 'venter på tjek';
    punkter.push({ id: `${x.id}@${x.status}`, titel: `${hvad} (${status})`, tekst: `${x.medier} medier fra ${x.lande} lande har skrevet om det på ${x.dage} dage. ${x.tjek?.note || ''}`, link: x.tjek?.kilder?.[0]?.[1] || x.art?.[0]?.url || side, dato: konf.genereret });
  }
  punkter.sort((p, q) => String(q.dato).localeCompare(String(p.dato)));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>${esc(`globus.nicco.dk · ${navn}`)}</title>
<link>${side}</link>
<description>${esc(`Rejsevejledning, varsler og konflikter for ${navn}, samlet fra navngivne kilder.`)}</description>
<language>da</language>
<lastBuildDate>${rfc(feeds?.genereret)}</lastBuildDate>
${punkter.slice(0, 60).map(p => `<item><title>${esc(p.titel)}</title><link>${esc(p.link)}</link><guid isPermaLink="false">${esc(p.id)}</guid><pubDate>${rfc(p.dato)}</pubDate><description>${esc(p.tekst)}</description></item>`).join('\n')}
</channel>
</rss>`;
  return new Response(xml, { headers: { 'content-type': 'application/rss+xml; charset=utf-8', 'cache-control': 'public, max-age=600' } });
}
