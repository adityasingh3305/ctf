if (!self.define) {
    let e, s = {};
    const n = (n, a) => (n = new URL(n + ".js", a).href, s[n] || new Promise(s => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = n, e.onload = s, document.head.appendChild(e)
        } else e = n, importScripts(n), s()
    }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e
    }));
    self.define = (a, i) => {
        const c = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (s[c]) return;
        let t = {};
        const r = e => n(e, c),
            l = {
                module: {
                    uri: c
                },
                exports: t,
                require: r
            };
        s[c] = Promise.all(a.map(e => l[e] || r(e))).then(e => (i(...e), t))
    }
}
define(["./workbox-4754cb34"], function(e) {
    "use strict";
    importScripts(), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
        url: "/80c5b862d6385b3a3601.txt",
        revision: "944a0b14fc3050e909cb34d437ef6d66"
    }, {
        url: "/Scrollx_transparent.png",
        revision: "2289fb979969370d5e6a155aa692e259"
    }, {
        url: "/_next/static/H19plNnTKDGxS8fLKclvK/_buildManifest.js",
        revision: "425ab93faa05c2f694af57df9ad0869b"
    }, {
        url: "/_next/static/H19plNnTKDGxS8fLKclvK/_ssgManifest.js",
        revision: "b6652df95db52feb4daf4eca35380933"
    }, {
        url: "/_next/static/chunks/172-7044d66af8d66ea0.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/173-5128d4bc79966bd8.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/239-2923c1a01fa45404.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/343.340ad782bac31feb.js",
        revision: "340ad782bac31feb"
    }, {
        url: "/_next/static/chunks/388-ce3f55ba6dc01374.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/391-0ba42ed03192d595.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/488-1e3d1143ebe3da13.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/4bd1b696-46d575e9cb5a7fa0.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/516-9bb59aea76a58601.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/517-e6efe4713e41e3bb.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/578.8febf92e202d866e.js",
        revision: "8febf92e202d866e"
    }, {
        url: "/_next/static/chunks/602-a667f581e5ada193.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/691-571e6e81f0de575b.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/693-7b797156eb3be3d6.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/926-442c3159a069fe0f.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/93-cca983be6a4af169.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/960-1f1989ee2b287d85.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/a4634e51-086d98fd6426fbc9.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/app/%5Bsite%5D/page-8fcc198800941a1e.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/app/%5Bsite%5D/post/%5Bid%5D/page-a083062442c224f6.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/app/_not-found/page-64180820c216c8ae.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/app/about/page-02feb5aedf94d754.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/app/bot/%5Bsite%5D/page-0908d58ffaf6fb4b.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/app/bot/%5Bsite%5D/post/%5Bid%5D/page-4124f1022d643e5a.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/app/bot/reddit.com/user/page-dc3fd52a40b60f13.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/app/embed/page-e9dd78cb6179cc0f.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/app/foryou/page-17dd7fb1dbe484e5.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/app/layout-e6415c18ddf6ab57.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/app/not-found-272ad4c9aa33594d.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/app/page-b0faec987663c6a5.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/app/reddit.com/user/page-7f0b91b0b5ba9ba0.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/app/saved/%5Bsite%5D/page-8493de3ab69b0086.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/app/tag/%5Btag%5D/page-9364cf45aea148b1.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/framework-58f97e80b1d6e3ea.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/main-74f3103cb9fcb7a9.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/main-app-eb9ee07a7f4506ed.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/pages/_app-abffdcde9d309a0c.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/pages/_error-94b8133dd8229633.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
        revision: "846118c33b2c0e922d7b3a7676f81f6f"
    }, {
        url: "/_next/static/chunks/webpack-25d9174f7de08886.js",
        revision: "H19plNnTKDGxS8fLKclvK"
    }, {
        url: "/_next/static/css/b5f7511c7268abe8.css",
        revision: "b5f7511c7268abe8"
    }, {
        url: "/_next/static/media/4473ecc91f70f139-s.p.woff",
        revision: "78e6fc13ea317b55ab0bd6dc4849c110"
    }, {
        url: "/_next/static/media/463dafcda517f24f-s.p.woff",
        revision: "cbeb6d2d96eaa268b4b5beb0b46d9632"
    }, {
        url: "/android-icon-144x144.png",
        revision: "0a23139277a9c3a653d6ea23c65ea548"
    }, {
        url: "/android-icon-192x192.png",
        revision: "b7178e329e195867db49bcb2bddc839d"
    }, {
        url: "/android-icon-36x36.png",
        revision: "7cb5d7105e40461db7adfac134d9ff34"
    }, {
        url: "/android-icon-48x48.png",
        revision: "efadb3cfc2233b91228b9eae3cb78a3e"
    }, {
        url: "/android-icon-72x72.png",
        revision: "3facbd73b05e689e69a75508b07a8864"
    }, {
        url: "/android-icon-96x96.png",
        revision: "6fbf66e9a37d47c67dc4256e4413ddff"
    }, {
        url: "/image.png",
        revision: "4fa64d0d4b8312dd841f32520ee6abac"
    }, {
        url: "/manifest.json",
        revision: "2d1ba0112876a53259bd0997ad2cb43c"
    }, {
        url: "/ms-icon-310x310.png",
        revision: "177f866468a6ad73a30046bfd3a2dc9e"
    }, {
        url: "/robots.txt",
        revision: "75f31331423d7372abe3c87ea1ab9a7b"
    }, {
        url: "/scrollx_tag_sitemap.xml",
        revision: "ab35144cdd163390f336c9e2775d54e6"
    }, {
        url: "/sitemap_reddit.xml",
        revision: "8ae6c749d1faf3d8f4230562160f8a16"
    }, {
        url: "/sitemap_rule34.xml",
        revision: "0c149d14fed26faf03be90dac8c0551c"
    }, {
        url: "/sitemap_rule34_2.xml",
        revision: "84885528e459f5b6acaf8c4ce378ef3b"
    }], {
        ignoreURLParametersMatching: []
    }), e.cleanupOutdatedCaches(), e.registerRoute("/", new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [{
            cacheWillUpdate: async ({
                request: e,
                response: s,
                event: n,
                state: a
            }) => s && "opaqueredirect" === s.type ? new Response(s.body, {
                status: 200,
                statusText: "OK",
                headers: s.headers
            }) : s
        }]
    }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3
        })]
    }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(({
        url: e
    }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
    }, new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(({
        url: e
    }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/")
    }, new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(({
        url: e
    }) => !(self.origin === e.origin), new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 3600
        })]
    }), "GET")
});