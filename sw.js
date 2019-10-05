var CACHE_NAME = 'NDBSL-sw-caches';
var urlsToCache = [
    'https://kumachan0210.github.io/Key_management/index.html',
    'https://kumachan0210.github.io/Key_management/offline.html',
    'https://kumachan0210.github.io/Key_management/manifest.json',
    'https://kumachan0210.github.io/Key_management/bbt.js',
    'https://kumachan0210.github.io/Key_management/jquery-3.4.1.min.js',
    'https://kumachan0210.github.io/Key_management/socket.io/socket.js',
    'https://kumachan0210.github.io/Key_management/socket.io/index.js',
    'https://kumachan0210.github.io/Key_management/socket.io/manager.js',
    'https://kumachan0210.github.io/Key_management/socket.io/on.js',
    'https://kumachan0210.github.io/Key_management/socket.io/url.js',
    'https://kumachan0210.github.io/Key_management/TemplateData/favicon.ico',
    'https://kumachan0210.github.io/Key_management/TemplateData/fullscreen.png',
    'https://kumachan0210.github.io/Key_management/TemplateData/progressEmpty.Dark.png',
    'https://kumachan0210.github.io/Key_management/TemplateData/progressEmpty.Light.png',
    'https://kumachan0210.github.io/Key_management/TemplateData/progressFull.Dark.png',
    'https://kumachan0210.github.io/Key_management/TemplateData/progressFull.Light.png',
    'https://kumachan0210.github.io/Key_management/TemplateData/progressLogo.Dark.png',
    'https://kumachan0210.github.io/Key_management/TemplateData/progressLogo.Light.png',
    'https://kumachan0210.github.io/Key_management/TemplateData/style.css',
    'https://kumachan0210.github.io/Key_management/TemplateData/UnityProgress.js',
    'https://kumachan0210.github.io/Key_management/TemplateData/webgl-logo.png',
    'https://kumachan0210.github.io/Key_management/Build/build.data.unityweb',
    'https://kumachan0210.github.io/Key_management/Build/build.json',
    'https://kumachan0210.github.io/Key_management/Build/build.wasm.code.unityweb',
    'https://kumachan0210.github.io/Key_management/Build/build.wasm.framework.unityweb',
    'https://kumachan0210.github.io/Key_management/Build/UnityLoader.js',
    'https://kumachan0210.github.io/Key_management/picture/key48.png',
    'https://kumachan0210.github.io/Key_management/picture/key72.png',
    'https://kumachan0210.github.io/Key_management/picture/key96.png',
    'https://kumachan0210.github.io/Key_management/picture/key144.png',
    'https://kumachan0210.github.io/Key_management/picture/key168.png',
    'https://kumachan0210.github.io/Key_management/picture/key192.png',
    'https://kumachan0210.github.io/Key_management/picture/key256.png',
    'https://kumachan0210.github.io/Key_management/picture/key512.png'

];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log('[ServiceWorker] Installing');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("activate", function(event) {
    console.log("[PWA Builder] Claiming clients for current page");
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    //ブラウザが回線に接続しているかをboolで返してくれる
    var online = navigator.onLine;

    //回線が使えるときの処理
    if (online) {
        event.respondWith(
            caches.match(event.request)
            .then(
                function(response) {
                    if (response) {
                        return response;
                    }
                    //ローカルにキャッシュがあればすぐ返して終わりですが、
                    //無かった場合はここで新しく取得します
                    return fetch(event.request)
                        .then(function(response) {
                            return response;
                        }).catch(function(error) {
                            //デバッグ用
                            return console.log(error);
                        });
                })
        );
    } else {
        //オフラインのときの制御    
        //オフラインでキャッシュもなかったパターン
        return caches.match("/Key_management/offline.html");

    }
});