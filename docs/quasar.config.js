import { defineConfig } from '#q-app/wrappers'

import mdPlugin from './build/md/index.js'
import examplesPlugin from './build/examples.js'
import manualChunks from './build/chunks.js'

export default defineConfig(ctx => ({
  boot: [
    { path: 'gdpr', server: false }
  ],

  css: [
    'app.sass'
  ],

  build: {
    vueRouterMode: 'history',
    distDir: 'dist/quasar.dev',
    useFilenameHashes: false,
    // analyze: true,
    // rebuildCache: true,

    env: {
      DOCS_BRANCH: 'legacy-v2-app',
      SEARCH_INDEX: 'quasar-legacy-app'
    },

    viteVuePluginOptions: {
      include: [/\.(vue|md)$/]
    },

    vitePlugins: [
      mdPlugin,
      examplesPlugin(ctx.prod),
      [ 'vite-plugin-checker', {
        eslint: {
          lintCommand: 'eslint --report-unused-disable-directives "./**/*.{js,mjs,cjs,vue}"'
        }
      }, { server: false } ]
    ],

    extendViteConf (viteConf, { isClient }) {
      if (ctx.prod && isClient) {
        viteConf.build.chunkSizeWarningLimit = 650
        viteConf.build.rollupOptions = {
          output: { manualChunks }
        }
      }
    }
  },

  devServer: {
    port: 9090,
    open: {
      app: { name: 'google chrome' }
    }
  },

  framework: {
    iconSet: 'svg-mdi-v6',

    devTreeshaking: true,
    autoImportVueExtensions: [ 'vue', 'md' ],

    config: {
      loadingBar: {
        color: 'brand-primary',
        size: '4px'
      }
    },

    plugins: [
      'Cookies',
      'Dark',
      'Loading',
      'LocalStorage',
      'Meta',
      'Notify'
    ]
  },

  animations: [ 'fadeIn', 'fadeOut' ],

  pwa: {
    workboxMode: 'GenerateSW',
    injectPwaMetaTags: false,
    swFilename: 'service-worker.js',

    extendWorkboxGenerateSWOptions (cfg) {
      Object.assign(cfg, {
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cdn/,
            handler: 'StaleWhileRevalidate'
          }
        ]
      })
    }
  }
}))
