const CACHE = 'rrace-v2';
const ASSETS = ['./', './index.html', './manifest.json'];

self.addEventListener('install', e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

// Network-first: always try fresh, fall back to cache if offline
self.addEventListener('fetch', e=>{
  e.respondWith(
    fetch(e.request)
      .then(res=>{
        const clone = res.clone();
        caches.open(CACHE).then(c=>c.put(e.request, clone));
        return res;
      })
      .catch(()=> caches.match(e.request))
  );
});
