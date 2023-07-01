'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "21.jpg": "134b240c1133186ba3f926b8ec01e3f9",
"assets/AssetManifest.json": "89f877bf7c8feca2de88d645a79a8f12",
"assets/FontManifest.json": "27f40e69030eea24ab4853095b9163f2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/assets/fonts/JosefinSans/JosefinSans-Bold.ttf": "9d3903c99fe767324c5b6be40ec53c7b",
"assets/lib/assets/fonts/JosefinSans/JosefinSans-BoldItalic.ttf": "e946eaaf7b2be6876523b952c210449b",
"assets/lib/assets/fonts/JosefinSans/JosefinSans-ExtraLight.ttf": "f9bb47e3964bfe6b0f94e7e49934cd91",
"assets/lib/assets/fonts/JosefinSans/JosefinSans-ExtraLightItalic.ttf": "db565d111b223f6238c32d9d1e5f1b7b",
"assets/lib/assets/fonts/JosefinSans/JosefinSans-Italic.ttf": "1dc0f1fae32dc2014610761deab765e5",
"assets/lib/assets/fonts/JosefinSans/JosefinSans-Light.ttf": "c07ee3e8b6a6e39327bcff0c4015ba73",
"assets/lib/assets/fonts/JosefinSans/JosefinSans-LightItalic.ttf": "9cf05bf9ca5d0a9fff1e7f1dfada8c34",
"assets/lib/assets/fonts/JosefinSans/JosefinSans-Medium.ttf": "81ed9bed3c99a91934b388d4ac5a2a94",
"assets/lib/assets/fonts/JosefinSans/JosefinSans-MediumItalic.ttf": "5cf54dac30071054f4bd8ac04a224c6d",
"assets/lib/assets/fonts/JosefinSans/JosefinSans-Regular.ttf": "67f8dddb24bbf02567f510569b29832e",
"assets/lib/assets/fonts/JosefinSans/JosefinSans-SemiBold.ttf": "a09ae657fc3b6a324c17157562befcc9",
"assets/lib/assets/fonts/JosefinSans/JosefinSans-SemiBoldItalic.ttf": "7a75d8aa0c38bfd5d2a29ad1a215f700",
"assets/lib/assets/fonts/JosefinSans/JosefinSans-Thin.ttf": "6378df8c075af4e1d947a11f8e46e1b9",
"assets/lib/assets/fonts/JosefinSans/JosefinSans-ThinItalic.ttf": "11e03ed63e216f67774f3031b2247bd2",
"assets/lib/assets/images/03.jpg": "0efe83203496ee1b0f5980fee128a018",
"assets/lib/assets/images/08.jpg": "75422a3c458306c04cf0ca1b0564f3cf",
"assets/lib/assets/images/19.jpg": "efeabc616321c1b4c0fa55f935f93438",
"assets/lib/assets/images/20.jpg": "ee1953ecbb55ef334351db90b6630bf4",
"assets/lib/assets/images/22.jpg": "f0b6152a39393ba72e280e8153856c39",
"assets/lib/assets/images/bca.png": "8c14002029a523a0cbaf65dd59306a43",
"assets/lib/assets/images/komang.JPG": "70c0dd959291443f36d991361a64eb6e",
"assets/lib/assets/images/logo.png": "cc14827d5c871a81b2b5391c610a9bd7",
"assets/lib/assets/images/logo2.png": "9de2ea753f64eb6bddf2684c1508240c",
"assets/lib/assets/images/putu.JPG": "84c1f03bf99582a2f94132507da8eb09",
"assets/lib/assets/music/Bridal-chorus.mp3": "eaa17b8af905284f3b3342f152eecae9",
"assets/NOTICES": "6310eacc1e5db3eee02a474e5c0c6d2a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "f1fae9efc5a500c947cd16be07783cee",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/icon-192.png": "30f5467c85f6ca2a7baf4f90815dbf0c",
"icons/icon-512.png": "e7d9e7f880afcd8feeedf8e8d0b46b2a",
"icons/icon-maskable-192.png": "30f5467c85f6ca2a7baf4f90815dbf0c",
"icons/icon-maskable-512.png": "e7d9e7f880afcd8feeedf8e8d0b46b2a",
"index.html": "6d81dca3d8c8177f4299b097d8932d1d",
"/": "6d81dca3d8c8177f4299b097d8932d1d",
"main.dart.js": "79d5ca546953f522c965d2fdff480912",
"manifest.json": "01f4b6a40c1e28dabeee7c63bcfeac8d",
"version.json": "7aa63981f9766539c6982dcb8f44a249"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
