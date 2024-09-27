

const CACHE_NAME = 'my-cache-v1';
const urls = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
].filter(url => url.startsWith('http') || url.startsWith('https'));

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urls))
    .then(() => console.log('Resources cached successfully'))
    .catch(error => console.error('Error caching resources:', error))
  );
});

self.addEventListener('fetch', event => {
    event.respondWith(
       caches.match(event.request)
         .then(response => {
           if (response) {
             console.log('Found resource in cache:', event.request.url);
             return response;
           }
  
           console.log('Resource not found in cache, fetching from network:', event.request.url);
           return fetch(event.request);
         })
         .catch(error => {
           console.error('Error fetching resource:', error);
           throw error;
         })
     );
   });