// Pages Function på https://globus.nicco.dk/status
// Et kort resumé pr. land af det, siden viser: rejsevejledningens niveau, levende smitteudbrud, varsler fra alvor 3,
// bekræftede konflikter og alvor for krig og konflikt. Bruges af Workeren globus-besked (worker-besked/besked.js)
// til at finde de lande, hvor noget er ændret siden forrige time. Bygges af de samme filer, som siden bruger.
import { hentData, smitteAlvor, smitteMistanke } from '../lib/data.mjs';

export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  const d = await hentData(env, url.origin);
  const hs = (d.hs && d.hs.h) || {};
  const feeds = (d.feeds && d.feeds.h) || [];
  const konf = d.konf || {};
  const l = {};
  const land = a2 => (l[a2] = l[a2] || { navn: (hs[a2] && hs[a2][0]) || a2, rejse: null, smitte: [], varsler: [], konf: [], konfNavne: [], krig: 0 });
  // Landets navn som helt ord, så Niger ikke rammer Nigeria.
  const iTekst = (t, n) => new RegExp(`(^|[^A-Za-zÀ-ÿ])${n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|[^A-Za-zÀ-ÿ])`).test(String(t || ''));
  const navnTilA2 = {}; for (const a2 in hs) navnTilA2[hs[a2][0]] = a2;
  // Rejsevejledning: det højeste niveau fra Udenrigsministeriet eller det britiske udenrigsministerium.
  for (const h of feeds) if (h.ret === 'rejse' && h.a2) { const x = land(h.a2); if (!x.rejse || h.alvor > x.rejse[0]) x.rejse = [h.alvor, h.titel, h.kilde]; }
  // Varsler fra alvor 3 i landet.
  for (const h of feeds) {
    if (h.ret === 'rejse' || h.ret === 'krig' || (h.alvor || 0) < 3) continue;
    const lande = new Set(h.a2 ? [h.a2] : []);
    for (const del of String(h.sted || '').split(/, | og /)) if (navnTilA2[del]) lande.add(navnTilA2[del]);
    for (const a2 of lande) land(a2).varsler.push([h.id, h.titel, h.alvor]);
  }
  // Levende smitteudbrud i landet, efter landets navn i feltet country, som på siden.
  // Fjerde felt er 1 for en mistanke uden alvor. Det er lagt til bagest, så de tre første felter er som før.
  for (const e of d.events || []) {
    if (!e.live) continue;
    for (const a2 in hs) if (iTekst(e.country, hs[a2][0])) land(a2).smitte.push([e.id, e.disease, smitteAlvor(e), smitteMistanke(e) ? 1 : 0]);
  }
  // Bekræftede konflikter og landets alvor for krig og konflikt, med samme loft som på siden.
  const bek = new Set();
  for (const x of konf.s || []) if (x.type === 'konflikt' && x.status === 'bekraeftet') {
    bek.add(x.a); bek.add(x.b);
    land(x.a).konf.push(x.id); land(x.a).konfNavne.push([x.id, x.bNavn]);
    land(x.b).konf.push(x.id); land(x.b).konfNavne.push([x.id, x.aNavn]);
  }
  for (const k of konf.k || []) {
    const x = land(k.a2); let a = k.alvor || 0;
    if (!(((x.rejse && x.rejse[0]) || 0) >= 3 || bek.has(k.a2))) a = Math.min(a, 2);
    if (bek.has(k.a2)) a = Math.max(a, 3);
    x.krig = a;
  }
  return new Response(JSON.stringify({ genereret: new Date().toISOString(), data: d.dataDato, l }), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=300' }
  });
}
