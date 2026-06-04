// Service Worker - AI工具导航缓存策略
const CACHE_NAME = 'ai-tools-v1';
const STATIC_ASSETS = [
    '/ai-tools-hub/manifest.json',
    '/ai-tools-hub/images/icons/icon-192.png',
    '/ai-tools-hub/images/icons/icon-512.png',
    '/ai-tools-hub/',
    '/ai-tools-hub/css/style.min.css',
    '/ai-tools-hub/js/tools-data.min.js',
    '/ai-tools-hub/js/enhance.min.js'
];

// 安装阶段：预缓存关键资源
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS)).then(() => self.skipWaiting())
    );
});

// 激活阶段：清理旧缓存
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

// 请求拦截：静态资源缓存优先，HTML 网络优先
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // 跳过第三方请求（AdSense等）
    if (!url.origin.includes('junagent.github.io')) return;

    // 静态资源（CSS/JS/图片）：缓存优先
    if (/\.(css|js|png|jpg|jpeg|svg|ico|woff2)$/.test(url.pathname)) {
        event.respondWith(
            caches.match(event.request).then(cached => {
                if (cached) return cached;
                return fetch(event.request).then(response => {
                    if (response.ok) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    }
                    return response;
                });
            })
        );
        return;
    }

    // HTML 页面：网络优先，回退缓存
    if (event.request.headers.get('accept')?.includes('text/html')) {
        event.respondWith(
            fetch(event.request).then(response => {
                if (response.ok) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                }
                return response;
            }).catch(() => caches.match(event.request))
        );
    }
});
