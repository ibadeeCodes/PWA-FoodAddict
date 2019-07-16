const staticCacheName = 'site-static';

const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/sw.js',
    '/js/materialize.min.js',
    '/js/ui.js',
    '/css/style.css',
    '/css/materialize.min.css',
    '/img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
];

// intalling service worker
self.addEventListener('install', evt => {
    evt.waitUntil(
      caches.open(staticCacheName).then(cache => {
      cache.addAll(assets);
    })
   );
});

// activating service worker.
self.addEventListener('activate', evt => {

});


self.addEventListener('fetch', evt => {

});

