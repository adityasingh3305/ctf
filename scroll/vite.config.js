import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
        runtimeCaching: [
          {
            // Dev proxy path
            urlPattern: /^\/api\/reddit\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'reddit-api-cache',
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 4 },
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            // Direct reddit.com JSON (the actual fetch path used at runtime)
            urlPattern: /^https:\/\/(www\.|old\.)?reddit\.com\/.+\.json/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'reddit-json-cache',
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 4 },
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            // Reddit preview/media images (i.redd.it, preview.redd.it, v.redd.it thumbnails)
            urlPattern: /^https:\/\/(i|preview|external-preview)\.redd\.it\//i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'reddit-image-cache',
              expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 },
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            // Other external images (redgifs thumbs, etc.)
            urlPattern: /^https:\/\/.*\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'external-image-cache',
              expiration: { maxEntries: 128, maxAgeSeconds: 60 * 60 * 12 },
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            // Google Fonts stylesheets
            urlPattern: /^https:\/\/fonts\.googleapis\.com\//i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
            }
          },
          {
            // Google Fonts & Bootstrap Icons font files
            urlPattern: /^https:\/\/(fonts\.gstatic\.com|cdn\.jsdelivr\.net)\//i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-font-cache',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] }
            }
          }
        ]
      },
      manifest: {
        name: 'RedditScroller',
        short_name: 'ScrollX',
        description: 'A high-performance Reddit scroller',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        icons: [
          {
            src: 'https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://www.redditstatic.com/desktop2x/img/favicon/android-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    proxy: {
      '/api/reddit': {
        target: 'https://www.reddit.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/reddit/, ''),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq, req) => {
            // Forward browser cookies if present (helps bypass Cloudflare)
            if (req.headers.cookie) {
              proxyReq.setHeader('Cookie', req.headers.cookie);
            }
            proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36');
            proxyReq.setHeader('Accept', 'application/json, text/html;q=0.9');
            proxyReq.setHeader('Accept-Language', 'en-US,en;q=0.9');
            proxyReq.setHeader('Referer', 'https://www.reddit.com/');
          });
        },
      },
    },
  },
});