// Pages Function på https://globus.nicco.dk/hvor
// Svarer med den omtrentlige placering, Cloudflare har slået op for besøgendes IP-adresse,
// så kloden kan starte over ens eget område. Intet gemmes, og IP-adressen sendes ikke videre.
export function onRequest({ request }) {
  const cf = request.cf || {};
  const tal = v => (v === undefined || v === null || v === '' || !Number.isFinite(+v)) ? null : Math.round(+v * 10) / 10;
  return new Response(JSON.stringify({ lat: tal(cf.latitude), lon: tal(cf.longitude), land: cf.country || null }), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'private, no-store' }
  });
}
