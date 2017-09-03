var CACHE_NAME = 'static-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll([
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
        'js/controllers/company-controller.js',
        'js/directives/uiDirective.js',
        'js/lib/angular-route.min.js',
        'js/lib/angular.min.js',
        'js/lib/ngMask.min.js',
        'js/index.js',
        'css/app.css'
      ]);
    })
  );
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(CACHE_NAME) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});

// self.addEventListener('fetch', function(event) {
//   if (event.request.url == 'https://achei-litoral-leste.firebaseio.com') {
//     console.info('responding fetch with Service Worker! 🤓');
//     event.respondWith(fetch(event.request).catch(function(e) {
//       let out = {Gold: 1, Size: -1, Actions: []};
//       return new Response(JSON.stringify(out));
//     }));
//     return;
//   }

//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       return response || fetch(event.request);
//     })
//   );
// });
