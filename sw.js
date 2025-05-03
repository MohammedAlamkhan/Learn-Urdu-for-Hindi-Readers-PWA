const CACHE_NAME = 'urdu-flashcards-cache-v1'; // Change version to update cache
const urlsToCache = [
    '/',
    'index.html',
    'style.css',
    'script.js',
    'icon-48x48.png',
    'icon-72x72.png',
    'icon-96x96.png',
    'icon-144x144.png',
    'icon-192x192.png',
    'icon-512x512.png',
];

// Install event: Cache necessary files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('All resources cached successfully');
                // Activate the new service worker immediately
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('Failed to cache resources:', error);
            })
    );
});

// Activate event: Clean up old caches
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME]; // Only keep the current cache version
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // Take control of uncontrolled clients (open tabs)
            return self.clients.claim();
        })
    );
});


// Fetch event: Serve from cache first, then network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                // Not in cache - fetch from network
                return fetch(event.request)
                    .then(networkResponse => {
                        // Check if we received a valid response
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                           // Don't cache non-basic requests (like Chrome extensions) or errors
                           // For Google Fonts (opaque response), we might let them pass through without caching here.
                           return networkResponse;
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and because we want the browser to consume the response
                        // as well as the cache consuming the response, we need
                        // to clone it so we have two streams.
                        const responseToCache = networkResponse.clone();

                        // Optional: Cache the newly fetched resource dynamically
                        // Be cautious with this for resources like Google Fonts
                        /*
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        */

                        return networkResponse;
                    })
                    .catch(error => {
                        console.error('Fetch failed; returning offline page instead.', error);
                        // Optional: You could return a basic offline fallback page here
                        // For this app, if index.html is cached, it should still load.
                    });
            })
    );
});