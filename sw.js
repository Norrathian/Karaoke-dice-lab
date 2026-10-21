/* Karaoke Dice Lab service worker — offline cache + tap-to-apply updates (app v1.0) */
var CACHE = 'kdl-v3';
var ASSETS = ['./', './index.html', './manifest.json', './icon%20192.png', './icon%20512.png'];
self.addEventListener('install', function (e) {
  // No automatic skipWaiting: a new version waits until the user taps
  // "Tap to update" in the app (or fully closes and reopens it).
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }));
});
self.addEventListener('message', function (e) {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(function (r) { return r || fetch(e.request); }));
});
