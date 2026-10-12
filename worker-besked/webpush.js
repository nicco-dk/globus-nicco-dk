// Web Push uden biblioteker: kryptering efter RFC 8291 (aes128gcm) og VAPID efter RFC 8292.
// Bruger kun WebCrypto, så det kører i Cloudflare Workers (og i Node 20 til test).
const enc = new TextEncoder();
export const b64u = buf => { let s = ''; for (const b of new Uint8Array(buf)) s += String.fromCharCode(b); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
export const fraB64u = s => { const t = s.replace(/-/g, '+').replace(/_/g, '/'); const p = t + '='.repeat((4 - t.length % 4) % 4); return Uint8Array.from(atob(p), c => c.charCodeAt(0)); };
const saml = (...dele) => { const n = dele.reduce((a, d) => a + d.length, 0), u = new Uint8Array(n); let i = 0; for (const d of dele) { u.set(d, i); i += d.length; } return u; };
async function hkdf(salt, ikm, info, laengde) {
  const k = await crypto.subtle.importKey('raw', ikm, 'HKDF', false, ['deriveBits']);
  return new Uint8Array(await crypto.subtle.deriveBits({ name: 'HKDF', hash: 'SHA-256', salt, info }, k, laengde * 8));
}

// Et nyt VAPID-nøglepar. Den private del gemmes som JWK, den offentlige som 65 bytes i base64url.
export async function nyeVapidNoegler() {
  const par = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
  return { privat: await crypto.subtle.exportKey('jwk', par.privateKey), offentlig: b64u(await crypto.subtle.exportKey('raw', par.publicKey)) };
}

async function vapidHeader(endpoint, vapid, sub) {
  const aud = new URL(endpoint).origin;
  const hoved = b64u(enc.encode(JSON.stringify({ typ: 'JWT', alg: 'ES256' })));
  const krop = b64u(enc.encode(JSON.stringify({ aud, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub })));
  const noegle = await crypto.subtle.importKey('jwk', vapid.privat, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, noegle, enc.encode(`${hoved}.${krop}`));
  return `vapid t=${hoved}.${krop}.${b64u(sig)}, k=${vapid.offentlig}`;
}

// Krypterer beskeden til ét abonnement (RFC 8291).
export async function krypter(tekst, p256dh, auth) {
  const uaPub = fraB64u(p256dh), authSecret = fraB64u(auth);
  const as = await crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, true, ['deriveBits']);
  const asPub = new Uint8Array(await crypto.subtle.exportKey('raw', as.publicKey));
  const uaKey = await crypto.subtle.importKey('raw', uaPub, { name: 'ECDH', namedCurve: 'P-256' }, false, []);
  const ecdh = new Uint8Array(await crypto.subtle.deriveBits({ name: 'ECDH', public: uaKey }, as.privateKey, 256));
  const ikm = await hkdf(authSecret, ecdh, saml(enc.encode('WebPush: info\0'), uaPub, asPub), 32);
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const cek = await hkdf(salt, ikm, enc.encode('Content-Encoding: aes128gcm\0'), 16);
  const nonce = await hkdf(salt, ikm, enc.encode('Content-Encoding: nonce\0'), 12);
  const k = await crypto.subtle.importKey('raw', cek, 'AES-GCM', false, ['encrypt']);
  const klar = saml(enc.encode(tekst), new Uint8Array([2]));
  const kode = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv: nonce }, k, klar));
  const rs = new Uint8Array(4); new DataView(rs.buffer).setUint32(0, 4096);
  return saml(salt, rs, new Uint8Array([asPub.length]), asPub, kode);
}

// Sender én besked. Svarer med HTTP-status fra push-tjenesten (201 er sendt, 404 og 410 betyder, at abonnementet er væk).
export async function send(abonnement, data, vapid, sub = 'https://globus.nicco.dk') {
  const krop = await krypter(JSON.stringify(data), abonnement.p256dh, abonnement.auth);
  const r = await fetch(abonnement.endpoint, {
    method: 'POST',
    headers: { Authorization: await vapidHeader(abonnement.endpoint, vapid, sub), 'Content-Encoding': 'aes128gcm', 'Content-Type': 'application/octet-stream', TTL: '86400', Urgency: 'normal' },
    body: krop
  });
  return r.status;
}
