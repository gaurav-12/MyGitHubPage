'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "0aeaba24dcc0794adcc8b44f32f2029f",
"icons/Icon-192.png": "610a13c4f3d13e19e4e0d77180045eac",
"icons/Icon-512.png": "aa6d7312459aa576d132b92697eee569",
"index.html": "61c14bffcc221ea6ab4e5ae321baf977",
"/": "61c14bffcc221ea6ab4e5ae321baf977",
"main.dart.js": "50c7bee2581c8063938fc97c17c3cb8b",
"manifest.json": "7a563662387e9496094d0b3571d91a61"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
