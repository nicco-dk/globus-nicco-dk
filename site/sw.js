// Service worker for globus.nicco.dk som webapp.
// Siden og data hentes altid fra nettet først, så man ser det nyeste. Er man uden net, vises det, der sidst blev hentet,
// og siden siger selv, hvornår data er fra. Faste filer (skrifter, kort, regioner) hentes fra lageret og opdateres i baggrunden.
const LAGER = 'globus-v1';
const SKAL = ['/', '/graenser.json', '/hovedstaeder.json', '/manifest.webmanifest', '/favicon.svg', '/ikon-192.png'];
self.addEventListener('install', ev => { ev.waitUntil(caches.open(LAGER).then(c => c.addAll(SKAL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', ev => {
  ev.waitUntil(caches.keys().then(n => Promise.all(n.filter(k => k !== LAGER).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', ev => {
  const r = ev.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin) return;
  // Funktionerne (placering og RSS) og mediesporets tilstand gemmes ikke.
  if (u.pathname === '/hvor' || u.pathname === '/feed' || u.pathname === '/medier-tal.json') return;
  const netFoerst = r.mode === 'navigate' || u.pathname === '/' || u.pathname.endsWith('.json') || u.pathname.endsWith('.html');
  if (netFoerst) {
    ev.respondWith(fetch(r).then(svar => {
      if (svar.ok) { const k = svar.clone(); caches.open(LAGER).then(c => c.put(r.mode === 'navigate' ? '/' : r, k)); }
      return svar;
    }).catch(() => caches.match(r.mode === 'navigate' ? '/' : r).then(x => x || caches.match('/'))));
    return;
  }
  ev.respondWith(caches.match(r).then(x => {
    const hent = fetch(r).then(svar => { if (svar.ok) { const k = svar.clone(); caches.open(LAGER).then(c => c.put(r, k)); } return svar; });
    return x || hent;
  }));
});
