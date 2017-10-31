var cacheName = 'v1';

var cacheFiles = [
  '/',
  'index.html',
  'manifest.json',
  'fonts/Flat-UI-Icons.dev.svg',
  'fonts/Flat-UI-Icons.eot',
  'fonts/Flat-UI-Icons.svg',
  'fonts/Flat-UI-Icons.ttf',
  'fonts/Flat-UI-Icons.woff',
  'fonts/iconmoon-session.json',
  'img/logo_guia.svg',
  'img/logo_guia2.svg',
  'img/icon-gl.png',
  'img/icon-gl_192x192.png',
  'img/icon-gl_512x512.png',
  'img/img1.jpg',
  'img/github-logo.svg',
  'img/icon-search.svg',
  'partials/add.html',
  'partials/header.html',
  'partials/list.html',
  'partials/loading.html',
  'js/main.js',
  'js/index.js',
  'js/controllers/company-controller.js',
  'js/directives/uiDirective.js',
  'js/lib/angular-route.min.js',
  'js/lib/angular.min.js',
  'js/lib/ngMask.min.js',
  'css/app.css'
];


self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Installed');

  e.waitUntil(

    // Open the cache
    caches.open(cacheName).then(function(cache) {

      // Add all the default files to the cache
      console.log('[ServiceWorker] Caching cacheFiles');
      return cache.addAll(cacheFiles);
    })
  );
})

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activated');


  e.waitUntil(

    // Get all the cache keys (cacheName)
    caches.keys().then(function(cacheNames) {
      return Promise.all(cacheNames.map(function(thisCacheName) {

        // If a cached item is saved under a previous cacheName
        if (thisCacheName !== cacheName) {

          // Delete that cached file
          console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
          return caches.delete(thisCacheName);
        }
      }));
    })
  ); // end e.waitUntil
})

self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
})
