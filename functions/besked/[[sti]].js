// Pages Function på https://globus.nicco.dk/besked/...
// Sender tilmeldinger til push-beskeder videre til Workeren globus-besked gennem service bindingen BESKED
// (se wrangler.toml og worker-besked/besked.js). Kun GET /besked/noegle og POST til tilmeld, afmeld og proev.
export async function onRequest({ request, params, env }) {
  const sti = [].concat(params.sti || []).join('/');
  if (!env.BESKED) return new Response(JSON.stringify({ fejl: 'beskeder er ikke sat op' }), { status: 503, headers: { 'content-type': 'application/json' } });
  if (!['noegle', 'tilmeld', 'afmeld', 'proev'].includes(sti)) return new Response('Ikke fundet', { status: 404 });
  if (sti !== 'noegle' && request.method !== 'POST') return new Response('Kun POST', { status: 405 });
  const krop = request.method === 'POST' ? await request.text() : undefined;
  if (krop && krop.length > 5000) return new Response('For stor', { status: 413 });
  return env.BESKED.fetch(new Request(`https://besked/${sti}`, { method: request.method, body: krop, headers: { 'content-type': 'application/json' } }));
}
