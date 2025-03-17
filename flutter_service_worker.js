'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4b6fb0b70fbf993f95fad3ca7de91a17",
"version.json": "070c20b7ec608297d2f49890fb87b356",
"index.html": "61da6a324bdcb29f9b67cbf73e2fea08",
"/": "61da6a324bdcb29f9b67cbf73e2fea08",
"main.dart.js": "5c99a9eb7d677667762d8d8ee0fc7680",
"AssetManifest.json": "f11bfabe2cfb53287069c9873f36ffc9",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"NOTICES": "32c7ff304e9b209ecfe096cc567d50be",
"favicon.png": "a88877fdeeb310d7a9e18a18f9bd42ac",
"FontManifest.json": "96502eed8c4c97b1a3dc99ef2e8fdd84",
"AssetManifest.bin.json": "36dc8da299006804276bb591764c0811",
"icons/Icon-192.png": "418fa5cdfc7948dfb97644061decc3c7",
"icons/Icon-maskable-192.png": "418fa5cdfc7948dfb97644061decc3c7",
"icons/Icon-maskable-512.png": "15010642ebcc9367787c3551e711dd3b",
"icons/Icon-512.png": "15010642ebcc9367787c3551e711dd3b",
"manifest.json": "9b8d03b53a1620d60f93346086e7b5a2",
"shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"AssetManifest.bin": "1212fa0d6ddaaf63405251c21957740c",
"fonts/MaterialIcons-Regular.otf": "c0fa87e52c70d247bad57e1898856079",
"assets/Achieve+.svg": "44c2244a43db71b10c59af9053cf3263",
"assets/studywithmento.svg": "eb1d5710a06e35bdbb20dfbb95670f84",
"assets/intro/tr_work_slide_1.png": "b45bde6e16149eabd7dc233fcf2f06eb",
"assets/intro/tr_work_slide_3.png": "d40482d5074c32c9c4f25d7bfb8be233",
"assets/intro/tr_work_slide_2.png": "2cc3634546bc4ed3c29a2930cca17958",
"assets/intro/Frame%25201948754624.png": "551e4ab73211de9c78c0ffce8115cb97",
"assets/intro/Frame%25201948754626.png": "bb3f0e8149dfc73277d66f81732f0b66",
"assets/intro/tr_work_slide_4.png": "ce8cb0655691d243da2acf6e8e207030",
"assets/intro/intro_process_1.png": "834d1ee5dd00da3e4c34709943b46675",
"assets/intro/intro_process_2.png": "2d771df81cd4b54346fca1f70cbd4f01",
"assets/intro/intro_process_3.png": "5c8719de72dce4bfa505ca29bb2aedf0",
"assets/intro/Frame%25201948754628.png": "33d20eed166d1f83c01cf96fb741877b",
"assets/banner.png": "82aea92341f3a1ac03b1d43e3eaa49bf",
"assets/banner.svg": "a3a688257c99c37e1d84f6196e9471a7",
"assets/service.png": "51451958a9a6c76a717c2733f9442191",
"assets/studywithmento.png": "7745c322d6ed45154c67c934119c98c7",
"assets/AssetManifest.json": "7ba7dcfeb427fc4dabbf08feb8c602c8",
"assets/dev2.png": "a7ab41c009a511a38ae5891ef522fbab",
"assets/deb_slide_1_4.png": "a9b712aba1c9abfd5a6f61784a630d71",
"assets/mac_dashboard.svg": "2631ac15866244c4e3b958d8ab575d9d",
"assets/dev1.png": "3f8f919fa8c1cd903c32fa9066cf0b88",
"assets/dev0.png": "eaf6ec8ee9c4994fc85fe1ea130ba3e9",
"assets/NOTICES": "15b1773c63792ca6d8383af7e7a4cb78",
"assets/Achieve+.png": "f428d6555dea0d3e2c85b66c2cc6d00e",
"assets/service_mockup.png": "ca4b2632b37654f9a8923f38ca58490b",
"assets/dev_slide_1_4.png": "a9b712aba1c9abfd5a6f61784a630d71",
"assets/envset.svg": "0f0bd88210f44420e57f3c65dea3292d",
"assets/Screen.png": "509155e53e8b0d89dc0f3381811d47d9",
"assets/teambuild.svg": "b5b78d1030a6b2c7cc7f4969ee8c7925",
"assets/FontManifest.json": "96502eed8c4c97b1a3dc99ef2e8fdd84",
"assets/dev_slide_1_1.png": "100ee42a2250595af3c7cb59118a27b4",
"assets/AssetManifest.bin.json": "03fbd4ead0f3c274eb3a178a2c2a534b",
"assets/output.png": "6375f61b6126bfd27277bbc039426d24",
"assets/review/chat_bubble3.png": "4f303e0423db83c173fadd68b36c4871",
"assets/review/chat_bubble3-1.svg": "d2b819a0d92c54ac9441e912ecfb4717",
"assets/review/chat_bubble2.png": "6f448fe097916c30d32558d43366b2a6",
"assets/review/chat_bubble1.png": "97837dc3fdef0dea696c0abe60fd69e3",
"assets/review/chat_bubble5.png": "571b692fb437bae324f1c47c3fd2f856",
"assets/review/chat_bubble4.png": "0cf37ff182bf6ec27107373f8fbddb36",
"assets/review/chat_bubble6.png": "97a1760eff80d254b1226a9c679733df",
"assets/review/chat_bubble7.png": "3f25831a2c450ba4492d3b79a9338f27",
"assets/review/chat_bubble7.svg": "4742141f876f0a4c1a3426465ce4281b",
"assets/review/chat_bubble6.svg": "e8a1abf7cc297ad8720c3bded1a47ae4",
"assets/review/chat_bubble4.svg": "1a1fadc4a0ca3e3abcf361d80f1b5efc",
"assets/review/chat_bubble5.svg": "c2e3365f289c0a96a73ded70a7f3de1f",
"assets/review/chat_bubble1.svg": "64f1c13d780d42ba7dbdb6c85d6cca66",
"assets/review/chat_bubble2.svg": "1fbcff53bccac2cbefac4334ae4d9ba3",
"assets/review/chat_bubble3-1.png": "94ddde6b9e7b07c85cce73d0e72db74c",
"assets/review/chat_bubble3.svg": "8179422c8945442c87af72b8ed6bd0d4",
"assets/review/chat_bubble8.svg": "897b639f28b2a00d6db6f0c45a5581e0",
"assets/review/chat_bubble9.svg": "bc5ddd672fbab503ce8e70539873b5c0",
"assets/review/chat_bubble8.png": "ff87224fdf846d508b61165646af79a5",
"assets/dev_slide_3_2.png": "5c9007fb06c83dc1e8640895b465a018",
"assets/dev_slide_1_2.png": "fe4f4d36dcaadd95fdd18127348ca011",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/process_1.svg": "4cb3f31b29b4f23102a5f00a5ff0b6ad",
"assets/dev_slide_1_3.png": "f91c27bde49c4eb450e7d05940cbc1f8",
"assets/dev_slide_3_1.png": "7614019afddd51b735aa4137ef685d92",
"assets/process_1.png": "554d68dc220a472ddeac748756ae31d6",
"assets/dev_slide_4_1.png": "a3d01b1b8386ce3a2c1e4c7295544df9",
"assets/AssetManifest.bin": "13a896a25d348abfc79a56f016ebb703",
"assets/preparation.png": "e96e5e4a8c5b9ccdf6596a7ecd6bd791",
"assets/dev_slide_2_5.png": "1933f086f1b98eacbe7c377cdcd3b9d2",
"assets/output.svg": "32e52b71e0486a48ba70c3b5d73697a5",
"assets/dev_slide_2_4.png": "68e801f0644a70d0b62fe28413f7510f",
"assets/fonts/Arita/AritaDotumKR-Light.ttf": "298a00f0bf515c8d821bab42c5c40248",
"assets/fonts/Arita/AritaDotumKR-Bold.ttf": "fdb002f32cff7efa0b2ddff372797c6c",
"assets/fonts/Arita/AritaDotumKR-Medium.ttf": "f3e0bed98046b3453e1b6e2386fbe38a",
"assets/fonts/Arita/AritaDotumKR-Thin.ttf": "af5bdaccac466d054b9d4c38c877d8fd",
"assets/fonts/Arita/AritaDotumKR-SemiBold.ttf": "7f01172018190cd7d7f8c0b7a858ec10",
"assets/fonts/MaterialIcons-Regular.otf": "c0fa87e52c70d247bad57e1898856079",
"assets/dev_slide_4_2.png": "640e2d5ae884f564a3db09f3bb8d6005",
"assets/assets/Achieve+.svg": "44c2244a43db71b10c59af9053cf3263",
"assets/assets/studywithmento.svg": "eb1d5710a06e35bdbb20dfbb95670f84",
"assets/assets/intro/tr_work_slide_1.png": "b45bde6e16149eabd7dc233fcf2f06eb",
"assets/assets/intro/tr_work_slide_3.png": "d40482d5074c32c9c4f25d7bfb8be233",
"assets/assets/intro/tr_work_slide_2.png": "2cc3634546bc4ed3c29a2930cca17958",
"assets/assets/intro/Frame%25201948754624.png": "551e4ab73211de9c78c0ffce8115cb97",
"assets/assets/intro/Frame%25201948754626.png": "bb3f0e8149dfc73277d66f81732f0b66",
"assets/assets/intro/tr_work_slide_4.png": "ce8cb0655691d243da2acf6e8e207030",
"assets/assets/intro/intro_process_1.png": "834d1ee5dd00da3e4c34709943b46675",
"assets/assets/intro/intro_process_2.png": "2d771df81cd4b54346fca1f70cbd4f01",
"assets/assets/intro/intro_process_3.png": "5c8719de72dce4bfa505ca29bb2aedf0",
"assets/assets/intro/Frame%25201948754628.png": "33d20eed166d1f83c01cf96fb741877b",
"assets/assets/banner.png": "82aea92341f3a1ac03b1d43e3eaa49bf",
"assets/assets/banner.svg": "a3a688257c99c37e1d84f6196e9471a7",
"assets/assets/service.png": "51451958a9a6c76a717c2733f9442191",
"assets/assets/studywithmento.png": "7745c322d6ed45154c67c934119c98c7",
"assets/assets/dev2.png": "a7ab41c009a511a38ae5891ef522fbab",
"assets/assets/deb_slide_1_4.png": "a9b712aba1c9abfd5a6f61784a630d71",
"assets/assets/mac_dashboard.svg": "2631ac15866244c4e3b958d8ab575d9d",
"assets/assets/dev1.png": "3f8f919fa8c1cd903c32fa9066cf0b88",
"assets/assets/dev0.png": "eaf6ec8ee9c4994fc85fe1ea130ba3e9",
"assets/assets/Achieve+.png": "f428d6555dea0d3e2c85b66c2cc6d00e",
"assets/assets/service_mockup.png": "ca4b2632b37654f9a8923f38ca58490b",
"assets/assets/dev_slide_1_4.png": "a9b712aba1c9abfd5a6f61784a630d71",
"assets/assets/envset.svg": "0f0bd88210f44420e57f3c65dea3292d",
"assets/assets/Screen.png": "509155e53e8b0d89dc0f3381811d47d9",
"assets/assets/logo.png": "4a4d7ad2d49bffe14c75226d2e43bdf2",
"assets/assets/teambuild.svg": "b5b78d1030a6b2c7cc7f4969ee8c7925",
"assets/assets/dev_slide_1_1.png": "100ee42a2250595af3c7cb59118a27b4",
"assets/assets/output.png": "6375f61b6126bfd27277bbc039426d24",
"assets/assets/review/chat_bubble3.png": "4f303e0423db83c173fadd68b36c4871",
"assets/assets/review/chat_bubble3-1.svg": "d2b819a0d92c54ac9441e912ecfb4717",
"assets/assets/review/chat_bubble2.png": "6f448fe097916c30d32558d43366b2a6",
"assets/assets/review/chat_bubble1.png": "97837dc3fdef0dea696c0abe60fd69e3",
"assets/assets/review/chat_bubble5.png": "571b692fb437bae324f1c47c3fd2f856",
"assets/assets/review/chat_bubble4.png": "0cf37ff182bf6ec27107373f8fbddb36",
"assets/assets/review/chat_bubble6.png": "97a1760eff80d254b1226a9c679733df",
"assets/assets/review/chat_bubble7.png": "3f25831a2c450ba4492d3b79a9338f27",
"assets/assets/review/chat_bubble7.svg": "4742141f876f0a4c1a3426465ce4281b",
"assets/assets/review/chat_bubble6.svg": "e8a1abf7cc297ad8720c3bded1a47ae4",
"assets/assets/review/chat_bubble4.svg": "1a1fadc4a0ca3e3abcf361d80f1b5efc",
"assets/assets/review/chat_bubble5.svg": "c2e3365f289c0a96a73ded70a7f3de1f",
"assets/assets/review/chat_bubble1.svg": "64f1c13d780d42ba7dbdb6c85d6cca66",
"assets/assets/review/chat_bubble2.svg": "1fbcff53bccac2cbefac4334ae4d9ba3",
"assets/assets/review/chat_bubble3-1.png": "94ddde6b9e7b07c85cce73d0e72db74c",
"assets/assets/review/chat_bubble3.svg": "8179422c8945442c87af72b8ed6bd0d4",
"assets/assets/review/chat_bubble8.svg": "897b639f28b2a00d6db6f0c45a5581e0",
"assets/assets/review/chat_bubble9.svg": "bc5ddd672fbab503ce8e70539873b5c0",
"assets/assets/review/chat_bubble8.png": "ff87224fdf846d508b61165646af79a5",
"assets/assets/dev_slide_3_2.png": "5c9007fb06c83dc1e8640895b465a018",
"assets/assets/dev_slide_1_2.png": "fe4f4d36dcaadd95fdd18127348ca011",
"assets/assets/process_1.svg": "4cb3f31b29b4f23102a5f00a5ff0b6ad",
"assets/assets/dev_slide_1_3.png": "f91c27bde49c4eb450e7d05940cbc1f8",
"assets/assets/dev_slide_3_1.png": "7614019afddd51b735aa4137ef685d92",
"assets/assets/process_1.png": "554d68dc220a472ddeac748756ae31d6",
"assets/assets/kakao.png": "464bf0284970bf758ca404db4d3c03cd",
"assets/assets/dev_slide_4_1.png": "a3d01b1b8386ce3a2c1e4c7295544df9",
"assets/assets/preparation.png": "e96e5e4a8c5b9ccdf6596a7ecd6bd791",
"assets/assets/dev_slide_2_5.png": "1933f086f1b98eacbe7c377cdcd3b9d2",
"assets/assets/output.svg": "32e52b71e0486a48ba70c3b5d73697a5",
"assets/assets/dev_slide_2_4.png": "68e801f0644a70d0b62fe28413f7510f",
"assets/assets/fonts/Arita/AritaDotumKR-Light.ttf": "298a00f0bf515c8d821bab42c5c40248",
"assets/assets/fonts/Arita/AritaDotumKR-Bold.ttf": "fdb002f32cff7efa0b2ddff372797c6c",
"assets/assets/fonts/Arita/AritaDotumKR-Medium.ttf": "f3e0bed98046b3453e1b6e2386fbe38a",
"assets/assets/fonts/Arita/AritaDotumKR-Thin.ttf": "af5bdaccac466d054b9d4c38c877d8fd",
"assets/assets/fonts/Arita/AritaDotumKR-SemiBold.ttf": "7f01172018190cd7d7f8c0b7a858ec10",
"assets/assets/dev_slide_4_2.png": "640e2d5ae884f564a3db09f3bb8d6005",
"assets/assets/teambuild.png": "6bd94dc71c2f4d24a79754065c215e98",
"assets/assets/logo.svg": "71dd05fda14d021cf413f94bbe269ae0",
"assets/assets/dev_slide_2_1.png": "8597320cb8f9f4101d1c982b3b5303be",
"assets/assets/envset.png": "79a12831892f0baf7896e8eadadc309d",
"assets/assets/dev_slide_2_3.png": "079fe032ccd847207ea85fca9a288531",
"assets/assets/test.svg": "90294f3ba1dd2f469e6047b9d60f551d",
"assets/assets/dev_slide_2_2.png": "be77bd84cfddb6b0ef5a217e79852e86",
"assets/teambuild.png": "6bd94dc71c2f4d24a79754065c215e98",
"assets/logo.svg": "71dd05fda14d021cf413f94bbe269ae0",
"assets/dev_slide_2_1.png": "8597320cb8f9f4101d1c982b3b5303be",
"assets/envset.png": "79a12831892f0baf7896e8eadadc309d",
"assets/dev_slide_2_3.png": "079fe032ccd847207ea85fca9a288531",
"assets/test.svg": "90294f3ba1dd2f469e6047b9d60f551d",
"assets/dev_slide_2_2.png": "be77bd84cfddb6b0ef5a217e79852e86",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
