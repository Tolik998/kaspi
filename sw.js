const CACHE = 'kaspi-v2';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './images.js',
  './img_home.png',
  './img_transfer.png',
  './img_gov.png',
  './img_qr.png',
  './manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);
  const isCritical =
    url.pathname.endsWith('/app.js') ||
    url.pathname.endsWith('/style.css') ||
    url.pathname.endsWith('/images.js') ||
    url.pathname === '/';

  e.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);

      if (isCritical) {
        try {
          const res = await fetch(e.request);
          cache.put(e.request, res.clone());
          return res;
        } catch {
          const cached = await cache.match(e.request);
          if (cached) return cached;
          return cache.match('./index.html');
        }
      }

      const cached = await cache.match(e.request);
      if (cached) return cached;
      try {
        const res = await fetch(e.request);
        cache.put(e.request, res.clone());
        return res;
      } catch {
        return cache.match('./index.html');
      }
    })()
  );
});
