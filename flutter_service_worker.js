'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8fde2e2ae5cb172588ed68ad102d1bca",
"assets/assets/images/accessibility-1.png": "f236a7d85737330527ec5f399c2502d5",
"assets/assets/images/accessibility-2.png": "9889f2d263545d934d4f5cb91cf2a508",
"assets/assets/images/accessibility-3.png": "4421cee3b88e0ac29f740b92f90f2b1d",
"assets/assets/images/appicon.png": "fc4c5c205cae4d3dd28a3b068f7b42fc",
"assets/assets/images/arrow.svg": "d4dc804e282c00e8863c6517fa722fbe",
"assets/assets/images/bear.png": "a402c819c5726b05c56f7c26db5ef16c",
"assets/assets/images/classroom_icon.png": "99dd171d338ed4a498c3bc23257d6672",
"assets/assets/images/dashboard_ico.png": "ff214384b681cfed9427df4c8adc2ed1",
"assets/assets/images/drive.png": "40d23831393a619df48384cee68bb158",
"assets/assets/images/drive_ico.png": "b85828469084dbca92a7bb935813d503",
"assets/assets/images/error_icon.png": "43a8143968dc307ba5c9999bcf9644af",
"assets/assets/images/error_icon.svg": "4035f788ad97360e3587166a6cb91a69",
"assets/assets/images/failure_lock.png": "e0cf5b031d30d6da1d60846c5d6d9073",
"assets/assets/images/google_sheet.svg": "436d525b61b075dfdaa86142215ae0f5",
"assets/assets/images/google_sheets_icon.svg": "d880494aca8dbe2752c82229d72dc171",
"assets/assets/images/Google_Sheets_Logo.svg": "eb042ef0d3d132f79bb2bb33a8e064b8",
"assets/assets/images/google_sheet_old.svg": "c21a2d89499265dc6c06c8c5c600c1b5",
"assets/assets/images/graded+_dark.png": "5ec915c5b9e1ebbee5d15bbd0d47ee56",
"assets/assets/images/graded+_dark_old.png": "d2d8d26ae5a3c254d707ca701c3651bf",
"assets/assets/images/graded+_light.png": "0bf5dade827cbe90bb0491f647c2bcfa",
"assets/assets/images/graded+_light_old.png": "98c076c95078f7a314cd4c252dc5e97a",
"assets/assets/images/graded_landing_image.png": "706a93125c031e6bae86a2217391d0cd",
"assets/assets/images/graded_plus_dark.png": "6b46d80380117c1cb061040ca4df6f66",
"assets/assets/images/graded_plus_intro_cr_step3_img.png": "fe1b05cd79da7cf72aef22a6229792ff",
"assets/assets/images/graded_plus_intro_cr_step3_img_old.png": "f30a35aeee17f7f5d752709c2d340092",
"assets/assets/images/graded_plus_intro_mcq_step3_img.png": "fae6e9edf6493cbd463ac31f2fe74177",
"assets/assets/images/graded_plus_intro_mcq_step3_img_old.png": "bd2b4efa09546fc6353af8d2062e35ed",
"assets/assets/images/graded_plus_intro_step2_img.png": "18a1c613c9bbe93984ab6251823fe021",
"assets/assets/images/graded_plus_intro_step2_img_old.png": "c489e1c4e05a3359a7cea525da678515",
"assets/assets/images/graded_plus_light.png": "f99a2a8ce8813f4583276980cf7de371",
"assets/assets/images/gtranslate.png": "b425fd291a405019e0de666f4c2917ca",
"assets/assets/images/landingPage_image.png": "ddbd7097ed0b2bfe5f64523ee7b9a9d8",
"assets/assets/images/language.png": "35c482fa08751e9afaa9e3e1336ddafb",
"assets/assets/images/login_lock.png": "d89cc9158e35209dc34578ebc26e5b17",
"assets/assets/images/MicrosoftTeams-image__2_-removebg-preview.png": "f55408498c95e89cd2d44887eb7afcdc",
"assets/assets/images/newonboarding_image1.png": "d9b2df5ee146e64aca614666313d28e7",
"assets/assets/images/newonboarding_image5.png": "18e1a9b02102a5b6599c9729aea6e962",
"assets/assets/images/no_data_icon.png": "86f102d158ba01e599dd964e1f19582d",
"assets/assets/images/no_data_icon.svg": "1383b7090d93a90c13660d79226c1a8d",
"assets/assets/images/no_internet_icon.png": "4e9690162ba25e7b142dbbd3bc96b6be",
"assets/assets/images/no_internet_icon.svg": "2e0d98d7cdb4b2f3fc9f856cf07365a6",
"assets/assets/images/ocr_background.png": "fec463c1e26dab7398d3aa973ca7cdb5",
"assets/assets/images/onboarding_image1.jpg": "364e29e4d74ef67fab0833de8f565284",
"assets/assets/images/onboarding_image2.png": "6f4cae80bf8f12983af837024f13d321",
"assets/assets/images/onboarding_image2_individual.png": "d62a7d5442ecf9b3aa9cdeefd66ee576",
"assets/assets/images/onboarding_image3.png": "57b16db0ef9d1c82f8e71003a46c31e0",
"assets/assets/images/onboarding_image3_individual.png": "d12473bbbd5f41f8962c101c3831080a",
"assets/assets/images/onboarding_image4.png": "abb46952a46193ec7fefbf5fe5bcba96",
"assets/assets/images/onboarding_image4_individual.png": "9c33f07abc0069d64256098dd1ce9c72",
"assets/assets/images/onboarding_image5.png": "72178f40dd4d7abb0e5e677f417d490b",
"assets/assets/images/onboarding_image5_individual.png": "dfee6a450820f87a1179b525c12edcfa",
"assets/assets/images/otp_lock.png": "ff841aed028a3b9bbd514eafe1f0992d",
"assets/assets/images/pbis+.png": "7664699837275a60497c50050b8295e7",
"assets/assets/images/pbis+.svg": "2da817fe7941571afed62dd18581cd45",
"assets/assets/images/pbis+_old.png": "aba15284fad5c4c3137bf2f033c04114",
"assets/assets/images/pbis_plus_dark.png": "78d525f59bbb4d677bcf5c5ff2770f10",
"assets/assets/images/pbis_plus_light.png": "8d81a35caafab7026227cb086f2363bf",
"assets/assets/images/slides.svg": "a64be3f5d73f2467cb9ddddd5c752f1d",
"assets/assets/images/splash_bear_icon.png": "fc4c5c205cae4d3dd28a3b068f7b42fc",
"assets/assets/images/splash_screen_icon.png": "67b53041b222b84a2d184f945b35c332",
"assets/assets/images/student+.png": "080b60e96cd57f4ac3ace0cf6f6b0134",
"assets/assets/images/student_plus_dark.png": "e897c69396a91cd9cabb906408d4c259",
"assets/assets/images/student_plus_light.png": "95fe962a168b26c7ff007eea36f8852a",
"assets/assets/images/success_lock.png": "1f805eb04b96b552817f265126866b4a",
"assets/assets/ocr_result_section_bottom_button_icons/Classroom.svg": "2e37d3788a4d4f4ae343deab134f09c7",
"assets/assets/ocr_result_section_bottom_button_icons/Dashboard.svg": "7f683af23a4064fba8a655bca9f8f4c1",
"assets/assets/ocr_result_section_bottom_button_icons/Dashboard_new.svg": "7eaa6aba7443ac3781bfe343395dff0e",
"assets/assets/ocr_result_section_bottom_button_icons/Dashboard_new1.svg": "f8e0fcc412b74d4d9ff2f9c508d31965",
"assets/assets/ocr_result_section_bottom_button_icons/Dashboard_old.svg": "5507f12b58d182636c9a3d91fcbc62d0",
"assets/assets/ocr_result_section_bottom_button_icons/Done.svg": "19873a86f30abe5e85dc3107b0c2d5d5",
"assets/assets/ocr_result_section_bottom_button_icons/Drive.svg": "17fe9103ee3f96be3fe4c68dedf3124f",
"assets/assets/ocr_result_section_bottom_button_icons/DriveOld.svg": "68700442a9bb77370e6b72c3ba0ca410",
"assets/assets/ocr_result_section_bottom_button_icons/History.svg": "110a3a62b49f8ce2ab46fde7f97643d9",
"assets/assets/ocr_result_section_bottom_button_icons/History_old.svg": "5602106f28b664a5fc29955e862865a9",
"assets/assets/ocr_result_section_bottom_button_icons/Share.svg": "dfddb69138d8e6d1fe693690447cc0cc",
"assets/assets/ocr_result_section_bottom_button_icons/Slide.svg": "82ec5472bae13d4e21030482981a4e25",
"assets/assets/ocr_result_section_bottom_button_icons/Spreadsheet.svg": "436d525b61b075dfdaa86142215ae0f5",
"assets/assets/Pbis_plus/add_icon.svg": "84e6877b4fbcc99e5c15800442b776db",
"assets/assets/Pbis_plus/collaboration.svg": "58ccbc6e7d83820bd5a6b73e43892b6f",
"assets/assets/Pbis_plus/courteous.svg": "c1cfbb91e3ba47acf59c981ef7c355c2",
"assets/assets/Pbis_plus/delete.svg": "7761ae0a54d7a7074c6642001b2ab9d7",
"assets/assets/Pbis_plus/Edit.svg": "f2a9344f18c6426f9864b8e1d564522d",
"assets/assets/Pbis_plus/Engaged.svg": "881b5e7b7b300a46b610bba4db6b14d4",
"assets/assets/Pbis_plus/Helpful.svg": "8c2482c4702ab9cf7d09019849110fe2",
"assets/assets/Pbis_plus/listening.svg": "e37f23e42ffad28099c80e8836d64f19",
"assets/assets/Pbis_plus/lucide_edit.svg": "e714fcfb109dd176434f9c38c8b0ff48",
"assets/assets/Pbis_plus/nice_work.svg": "6c4ee962ba212944b5607c6a8e0b5312",
"assets/assets/Pbis_plus/notes_student_profile.svg": "80b0e0ee5d7d5e94d21f4f19c9d4014d",
"assets/assets/Pbis_plus/participation.svg": "0cd6860bb72edb7c03440e82d37a7e2a",
"assets/assets/Pbis_plus/punctual.svg": "6843cc323d059108774d390fb515580c",
"assets/assets/Pbis_plus/responsible.svg": "5fd79beae3532902341f55b0a4638078",
"assets/assets/pbis_sound/sound1.wav": "0fff1965a655903eadabbddcb41aba06",
"assets/assets/pbis_sound/sound2.wav": "aa898617ce83139c61f4e1af7829ac79",
"assets/assets/pbis_sound/sound3.wav": "8f44580808817a8d326764bb6a965b21",
"assets/assets/pbis_sound/sound4.wav": "3f86d5bbaa4d829287990f356f6d3aa3",
"assets/assets/pbis_sound/sound5.wav": "d3494790e4489e5d17094bbb19e6d545",
"assets/assets/pbis_sound/sound6.wav": "ea02828fcfc0d9e7fcc91ad02b0e9dcb",
"assets/FontManifest.json": "bd2d1398e66ebaffdb26cd6c48419905",
"assets/fonts/CustomFlutterIcons.ttf": "1a3e45a3592a46ba892eac2b4949ed2b",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/fonts/Roboto-Italic.ttf": "465d1affcd03e9c6096f3313a47e0bf5",
"assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/lib/src/modules/pbis_plus/bloc/pbis_plus_bloc.dart": "312e3b2c2beffd008ca179e70791edd6",
"assets/lib/src/modules/pbis_plus/bloc/pbis_plus_event.dart": "1e73b2937ba249b4417dce4960bd8617",
"assets/lib/src/modules/pbis_plus/bloc/pbis_plus_state.dart": "b2b023276e88d85e702a1bb884ff25ec",
"assets/lib/src/modules/pbis_plus/pbis_plus_asset/pbis_plus_classroom_shimmer_loading_data.json": "56110625ef7da50016ce3c406a7826ad",
"assets/NOTICES": "e46b38e6e0044ade92c755b1df0a9238",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "42bccdd35f29a0462c759ba0320e109d",
"/": "42bccdd35f29a0462c759ba0320e109d",
"main.dart.js": "486b09a33d76270874a03c78f4ab346e",
"manifest.json": "0ceccd831badde5b973e7af798d27ec1",
"version.json": "1ba5f037bde516eb623329b700397a0d"
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
