const CACHE_NAME = 'netherlands-trip-v1';
// 這裡列出您希望離線也能訪問的所有核心檔案
const urlsToCache = [
  // 基礎路徑
  '/netherlands1218/', 
  '/netherlands1218/index.html',
  '/netherlands1218/favicon.ico',
  // 您的核心 CSS 和 JS 檔案
  '/netherlands1218/index.css',
  '/netherlands1218/assets/index-DAEb-piU.js' 
];

// 安裝事件：將基礎檔案加入快取
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        // 忽略 credentials，以避免跨域問題
        return cache.addAll(urlsToCache.map(url => new Request(url, {credentials: 'omit'})));
      })
  );
});

// 獲取事件：優先從快取中讀取資源
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // 從快取回傳
        }
        return fetch(event.request); // 從網路獲取
      })
  );
});

// 啟用事件：清理舊的快取版本
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
