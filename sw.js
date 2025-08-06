const CACHE_NAME = 'pwa-task-list-v1';
const urlsToCache = [
    '/RepoPWA0608/',
    '/RepoPWA0608/index.html',
    '/RepoPWA0608/style.css',
    '/RepoPWA0608/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
