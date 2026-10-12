// Fælles læsning af sidens data til Pages Functions (functions/h/[id].js og functions/status.js).
// Alt læses fra de filer, siden selv bruger, gennem env.ASSETS. Intet hentes udefra.
import JSON5 from './json5.mjs';

export async function hentData(env, origin, hvad = ['feeds', 'konf', 'hs', 'events']) {
  const json = async sti => { try { const r = await env.ASSETS.fetch(new URL(sti, origin)); return r.ok ? await r.json() : null; } catch { return null; } };
  const ud = {};
  await Promise.all(hvad.map(async k => {
    if (k === 'feeds') ud.feeds = await json('/feeds.json');
    if (k === 'konf') ud.konf = await json('/konflikter.json');
    if (k === 'hs') ud.hs = await json('/hovedstaeder.json');
    if (k === 'events') {
      try {
        const html = await (await env.ASSETS.fetch(new URL('/index.html', origin))).text();
        const s = html.indexOf('const EVENTS = ['), e = html.indexOf('\n];', s);
        ud.events = s > 0 && e > s ? JSON5.parse(html.slice(s + 'const EVENTS = '.length, e + 2)) : [];
        const m = html.match(/const DATA_DATO = '([^']*)';/); ud.dataDato = m ? m[1] : null;
      } catch { ud.events = []; }
    }
  }));
  return ud;
}

// Smitteudbruddets trin og alvor på seneste punkt, som siden regner det (uden reglen for akut).
export function smitteAlvor(e) {
  const st = e.stage || (e.tl && e.tl.length ? e.tl[e.tl.length - 1][2] : '');
  return e.alvor || (st === 'reservoir' || st === 'mistanke' ? 1 : 2);
}

export const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
