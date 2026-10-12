// Pages Function på https://globus.nicco.dk/oversaet
// Maskinoversætter sidens danske datatekster til engelsk med Cloudflare Workers AI (modellen m2m100), når man har valgt
// engelsk. Siden mærker teksten som maskinoversat. Hver oversættelse gemmes i Cloudflares cache, så den samme tekst kun
// oversættes én gang. Højst 25 tekster pr. kald og 1.500 tegn pr. tekst.
const MODEL = '@cf/meta/m2m100-1.2b';
const svar = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

async function noegle(tekst, til) {
  const h = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${til}|${tekst}`));
  return `https://globus.nicco.dk/__mt/${til}/${[...new Uint8Array(h)].map(b => b.toString(16).padStart(2, '0')).join('')}`;
}

export async function onRequest({ request, env, waitUntil }) {
  if (request.method !== 'POST') return svar({ fejl: 'kun POST' }, 405);
  if (!env.AI) return svar({ fejl: 'oversættelse er ikke sat op' }, 503);
  let j; try { j = await request.json(); } catch { return svar({ fejl: 'ikke json' }, 400); }
  const til = j && j.til === 'en' ? 'en' : null;
  const tekster = Array.isArray(j && j.tekster) ? j.tekster.slice(0, 25).map(t => String(t || '').slice(0, 1500)) : [];
  if (!til || !tekster.length) return svar({ fejl: 'angiv til og tekster' }, 400);
  const cache = caches.default;
  // Én sætning ad gangen: modellen springer ellers sætninger over i længere tekster.
  // Tal må ikke ændre sig. Har oversættelsen andre tal end originalen, beholdes den danske sætning.
  const tal = t => (t.match(/\d[\d.,]*/g) || []).map(x => x.replace(/[.,](?=\d{3}\b)/g, '').replace(/[.,]$/, '').replace(',', '.')).sort().join('|');
  const saetning = async t => {
    const k = await noegle(t, til);
    const hit = await cache.match(k); if (hit) return (await hit.json()).o;
    try {
      const r = await env.AI.run(MODEL, { text: t, source_lang: 'danish', target_lang: 'english' });
      let ud = r && r.translated_text ? String(r.translated_text).trim() : null;
      if (ud && tal(ud) !== tal(t)) ud = t;
      if (ud) waitUntil(cache.put(k, new Response(JSON.stringify({ o: ud }), { headers: { 'content-type': 'application/json', 'cache-control': 'public, max-age=2592000' } })));
      return ud;
    } catch { return null; }
  };
  const o = await Promise.all(tekster.map(async t => {
    if (!t.trim()) return '';
    const dele = t.split(/(?<=[.!?])\s+(?=[A-ZÆØÅ"«(])/).filter(Boolean).slice(0, 12);
    const ud = await Promise.all(dele.map(saetning));
    return ud.some(x => x === null) ? null : ud.join(' ');
  }));
  return svar({ o, model: MODEL });
}
