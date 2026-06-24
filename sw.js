const CACHE_NAME = 'electrician-hub-v1';
const assets = [
    './',
    './index.html',
    './certificate.html',
    './style.css',
    './script.js',
    './manifest.json'
];

// Service worker install aur assets cache karna
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(assets);
        })
    );
});

// Fetch events control karne ke liye
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => {
            return res || fetch(e.request);
        })
    );
});