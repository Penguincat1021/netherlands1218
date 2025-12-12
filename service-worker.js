const CACHE_NAME = 'netherlands-trip-v1';
// 這裡列出您希望離線也能訪問的基礎檔案
const urlsToCache = [
  '/netherlands1218/', 
  '/netherlands1218/index.html',
  '/netherlands1218/favicon.ico' 
  // ⚠️ 如果您使用 Vite/React，請記得未來加入主要的 JS 和 CSS 檔路徑！
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache.map(url => new Request(url, {credentials: 'omit'})));
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; 
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
