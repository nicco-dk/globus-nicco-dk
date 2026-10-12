// globus-besked: push-beskeder om de lande, man følger på globus.nicco.dk.
//
// Siden tilmelder browserens push-abonnement og listen over fulgte lande gennem Pages Functionen /besked
// (functions/besked/[[sti]].js), som kalder denne Worker gennem en service binding. Workeren har ingen offentlig adresse.
// Abonnementerne gemmes i en Durable Object (SQLite). Der gemmes kun det, browseren giver til push: en adresse hos
// browserens push-tjeneste og to nøgler, plus landekoderne. Ingen navne, e-mails eller IP-adresser.
//
// Hver time kl. xx.47, efter udrulningen, henter Workeren https://globus.nicco.dk/status (functions/status.js), sammenligner
// hvert land med forrige time og sender en besked til dem, der følger et land, hvor noget er ændret:
// ny rejsevejledning eller nyt niveau, et nyt smitteudbrud, et nyt varsel fra alvor 3, en bekræftet konflikt, eller
// at krig og konflikt er steget til alvor 3 eller mere. Første kørsel gemmer kun udgangspunktet.
import { DurableObject } from 'cloudflare:workers';
import { send, nyeVapidNoegler } from './webpush.js';

const STATUS_URL = 'https://globus.nicco.dk/status';
// Kun kendte push-tjenester. Alt andet afvises, så Workeren ikke kan bruges til at sende til vilkårlige adresser.
const TJENESTER = [/^https:\/\/fcm\.googleapis\.com\//, /^https:\/\/updates\.push\.services\.mozilla\.com\//, /^https:\/\/push\.services\.mozilla\.com\//,
  /^https:\/\/web\.push\.apple\.com\//, /^https:\/\/[a-z0-9.-]+\.notify\.windows\.com\//, /^https:\/\/[a-z0-9.-]+\.push\.apple\.com\//];
const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

// Beskeder for ét land ud fra forrige og nuværende status.
export function aendringer(foer, nu) {
  if (!foer) return [];
  const ud = [], navn = nu.navn;
  if (nu.rejse && (!foer.rejse || foer.rejse[0] !== nu.rejse[0] || foer.rejse[1] !== nu.rejse[1]))
    ud.push({ titel: `${navn}: rejsevejledningen er ændret`, tekst: `${nu.rejse[1]} (${nu.rejse[2]}).`, alvor: nu.rejse[0] });
  else if (foer.rejse && !nu.rejse) ud.push({ titel: `${navn}: rejsevejledningen er lempet`, tekst: 'Hverken Udenrigsministeriet eller det britiske udenrigsministerium fraråder længere rejser eller beder om ekstra forsigtighed.', alvor: 1 });
  const gamleS = new Set((foer.smitte || []).map(x => x[0]));
  for (const [id, sygdom, a] of nu.smitte || []) if (!gamleS.has(id)) ud.push({ titel: `${navn}: nyt smitteudbrud`, tekst: `${sygdom}, alvor ${a}.`, alvor: a, id });
  const gamleV = new Set((foer.varsler || []).map(x => x[0]));
  for (const [id, titel, a] of nu.varsler || []) if (!gamleV.has(id)) ud.push({ titel: `${navn}: ${titel}`, tekst: `Nyt varsel, alvor ${a}.`, alvor: a, id });
  const gamleK = new Set(foer.konf || []);
  for (const [id, anden] of nu.konfNavne || []) if (!gamleK.has(id)) ud.push({ titel: `${navn}: konflikt bekræftet af medier`, tekst: `Konflikt med ${anden}, bekræftet af medier fra flere lande. Medier er ikke myndigheder.`, alvor: 3 });
  if ((nu.krig || 0) >= 3 && (nu.krig || 0) > (foer.krig || 0)) ud.push({ titel: `${navn}: krig og konflikt alvor ${nu.krig}`, tekst: 'Omtalen af kampe og angreb er steget, ifølge medierne på listen.', alvor: nu.krig });
  return ud;
}

export class Abonnenter extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.sql = ctx.storage.sql;
    this.sql.exec(`CREATE TABLE IF NOT EXISTS abo (endpoint TEXT PRIMARY KEY, p256dh TEXT NOT NULL, auth TEXT NOT NULL, lande TEXT NOT NULL, oprettet INTEGER, opdateret INTEGER)`);
    this.sql.exec(`CREATE TABLE IF NOT EXISTS status (a2 TEXT PRIMARY KEY, data TEXT NOT NULL)`);
  }
  async vapid() {
    let v = await this.ctx.storage.get('vapid');
    if (!v) { v = await nyeVapidNoegler(); await this.ctx.storage.put('vapid', v); }
    return v;
  }
  async noegle() { return (await this.vapid()).offentlig; }
  tilmeld(endpoint, p256dh, auth, lande) {
    const nu = Date.now();
    this.sql.exec(`INSERT INTO abo (endpoint, p256dh, auth, lande, oprettet, opdateret) VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(endpoint) DO UPDATE SET p256dh = excluded.p256dh, auth = excluded.auth, lande = excluded.lande, opdateret = excluded.opdateret`,
      endpoint, p256dh, auth, JSON.stringify(lande), nu, nu);
    return this.sql.exec('SELECT COUNT(*) AS n FROM abo').one().n;
  }
  afmeld(endpoint) { this.sql.exec('DELETE FROM abo WHERE endpoint = ?', endpoint); }
  async proev(endpoint) {
    const r = this.sql.exec('SELECT * FROM abo WHERE endpoint = ?', endpoint).toArray()[0]; if (!r) return 404;
    const s = await send(r, { titel: 'Beskeder er slået til', tekst: 'Du får en besked her, når der sker noget nyt i de lande, du følger på globus.nicco.dk.', url: '/' }, await this.vapid());
    if (s === 404 || s === 410) this.afmeld(endpoint);
    return s;
  }
  // Den timevise gennemgang.
  async gennemgaa(status) {
    const lande = status && status.l; if (!lande) return { fejl: 'ingen status' };
    const foer = new Map(this.sql.exec('SELECT a2, data FROM status').toArray().map(r => [r.a2, JSON.parse(r.data)]));
    const beskeder = new Map();
    for (const [a2, nu] of Object.entries(lande)) {
      const b = aendringer(foer.get(a2), nu);
      if (b.length) beskeder.set(a2, b);
      this.sql.exec('INSERT INTO status (a2, data) VALUES (?, ?) ON CONFLICT(a2) DO UPDATE SET data = excluded.data', a2, JSON.stringify(nu));
    }
    let sendt = 0, fjernet = 0;
    if (beskeder.size) {
      const vapid = await this.vapid();
      for (const abo of this.sql.exec('SELECT * FROM abo').toArray()) {
        const mine = JSON.parse(abo.lande).filter(a2 => beskeder.has(a2));
        if (!mine.length) continue;
        // Én besked pr. abonnent: den alvorligste ændring, og hvor mange andre der er.
        const alle = mine.flatMap(a2 => beskeder.get(a2).map(b => Object.assign({ a2 }, b))).sort((p, q) => q.alvor - p.alvor);
        const top = alle[0];
        const data = { titel: top.titel, tekst: top.tekst + (alle.length > 1 ? ` Og ${alle.length - 1} ${alle.length === 2 ? 'ændring mere' : 'ændringer mere'} i de lande, du følger.` : ''), url: `/#${top.id || 'land-' + top.a2}`, tag: `globus-${top.a2}` };
        try {
          const s = await send(abo, data, vapid);
          if (s === 404 || s === 410) { this.afmeld(abo.endpoint); fjernet++; } else if (s < 300) sendt++;
          else console.log(`Push-tjenesten svarede ${s}`);
        } catch (e) { console.log(`Kunne ikke sende: ${e.message}`); }
      }
    }
    const ud = { tid: new Date().toISOString(), lande: Object.keys(lande).length, aendrede: [...beskeder.keys()], sendt, fjernet, foersteGang: foer.size === 0 };
    await this.ctx.storage.put('sidst', ud);
    return ud;
  }
  // Tal uden persondata: hvor mange abonnementer, hvor mange lande der følges, og hvordan seneste gennemgang gik.
  async tilstand() {
    const abo = this.sql.exec('SELECT lande FROM abo').toArray();
    const lande = new Set(); for (const r of abo) for (const a2 of JSON.parse(r.lande)) lande.add(a2);
    return { abonnementer: abo.length, lande: lande.size, sidst: (await this.ctx.storage.get('sidst')) || null };
  }
}

const stub = env => env.ABONNENTER.get(env.ABONNENTER.idFromName('alle'));

export default {
  async fetch(request, env) {
    const url = new URL(request.url), sti = url.pathname.replace(/^\/+/, '');
    const o = stub(env);
    if (request.method === 'GET' && sti === 'noegle') return json({ k: await o.noegle() });
    if (request.method === 'GET' && sti === 'tilstand') return json(await o.tilstand());
    if (request.method !== 'POST') return json({ fejl: 'ukendt' }, 404);
    let j; try { j = await request.json(); } catch { return json({ fejl: 'ikke json' }, 400); }
    const ep = j && j.sub && j.sub.endpoint, k = j && j.sub && j.sub.keys;
    if (typeof ep !== 'string' || ep.length > 1000 || !TJENESTER.some(r => r.test(ep))) return json({ fejl: 'ukendt push-tjeneste' }, 400);
    if (sti === 'afmeld') { await o.afmeld(ep); return json({ ok: true }); }
    if (sti === 'proev') return json({ status: await o.proev(ep) });
    if (sti === 'tilmeld') {
      if (!k || typeof k.p256dh !== 'string' || typeof k.auth !== 'string' || k.p256dh.length > 200 || k.auth.length > 50) return json({ fejl: 'mangler nøgler' }, 400);
      const lande = Array.isArray(j.lande) ? [...new Set(j.lande.filter(a => typeof a === 'string' && /^[A-Z]{2}$/.test(a)))].slice(0, 60) : [];
      if (!lande.length) { await o.afmeld(ep); return json({ ok: true, lande: 0 }); }
      await o.tilmeld(ep, k.p256dh, k.auth, lande);
      return json({ ok: true, lande: lande.length });
    }
    return json({ fejl: 'ukendt' }, 404);
  },
  async scheduled(event, env, ctx) {
    ctx.waitUntil((async () => {
      const r = await fetch(`${STATUS_URL}?v=${Date.now()}`, { headers: { 'user-agent': 'globus-besked' } });
      if (!r.ok) { console.log(`Status svarede ${r.status}`); return; }
      console.log(JSON.stringify(await stub(env).gennemgaa(await r.json())));
    })());
  }
};
