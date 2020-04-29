'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "f9662a85d7f90f6933b7b8c3e3b2a6ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "68a64fd6198e7ff38af24ff32a8d4bee",
"icons/Icon-192.png": "ebed4e2449e2c2dd43bdd8539bc6bfb8",
"icons/Icon-512.png": "23904f23b39fc4f20e54563b49d97a3c",
"index.html": "3357c060ae3d6a46aa836b9cb47b416e",
"/": "3357c060ae3d6a46aa836b9cb47b416e",
"main.dart.js": "13a5b87dbe39d912fee84e526ba71b30",
"manifest.json": "bb7accda1de65ec19c10f4132ef5d04e"
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
