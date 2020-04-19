'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "fbcb5d7c2b859648b9d303d668a9a585",
"icons/Icon-192.png": "3f6b9e0f44a2b639f14e30a62323196d",
"icons/Icon-512.png": "fff02862a93084270ad08a21814e631f",
"index.html": "2ff4b6928524c6a043b670212f1b5945",
"/": "2ff4b6928524c6a043b670212f1b5945",
"main.dart.js": "ebf537d5199cf0f6bf14612fbca3c253",
"manifest.json": "bcaba38d3afadab68a5b2467a88f6397"
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
