export default [
  {
    name: 'Home',
    icon: 'home',
    path: 'home'
  },
  {
    name: 'Why donate',
    icon: 'assignment_late',
    path: 'why-donate'
  },
  {
    name: 'Legacy @quasar/app-vite v1',
    icon: 'build',
    path: 'quasar-cli-vite-v1',
    children: [
      {
        name: 'The quasar.config file',
        path: 'quasar-config-file'
      },
      {
        name: 'Convert project to CLI with Vite',
        path: 'convert-to-quasar-cli-with-vite'
      },
      {
        name: 'Browser Compatibility',
        path: 'browser-compatibility'
      },
      {
        name: 'Supporting TypeScript',
        path: 'supporting-ts'
      },
      {
        name: 'Directory Structure',
        path: 'directory-structure'
      },
      {
        name: 'Commands List',
        path: 'commands-list'
      },
      {
        name: 'CSS Preprocessors',
        path: 'css-preprocessors'
      },
      {
        name: 'Routing',
        path: 'routing'
      },
      {
        name: 'Lazy Loading - Code Splitting',
        path: 'lazy-loading'
      },
      {
        name: 'Handling Assets',
        path: 'handling-assets'
      },
      {
        name: 'Boot Files',
        path: 'boot-files'
      },
      {
        name: 'Prefetch Feature',
        path: 'prefetch-feature'
      },
      {
        name: 'API Proxying',
        path: 'api-proxying'
      },
      {
        name: 'Handling Vite',
        path: 'handling-vite'
      },
      {
        name: 'Handling process.env',
        path: 'handling-process-env'
      },
      {
        name: 'State Management with Pinia',
        path: 'state-management-with-pinia'
      },
      {
        name: 'State Management with Vuex',
        path: 'state-management-with-vuex'
      },
      {
        name: 'Linter',
        path: 'linter'
      },
      {
        name: 'Testing & Auditing',
        path: 'testing-and-auditing'
      },
      {
        name: 'SPA mode',
        path: 'developing-spa',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'App Icons for SPA',
            path: 'app-icons-spa'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Deploying',
            path: 'deploying'
          }
        ]
      },
      {
        name: 'SSR mode',
        path: 'developing-ssr',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Writing Universal Code',
            path: 'writing-universal-code'
          },
          {
            name: 'Upgrade guide',
            path: 'ssr-upgrade-guide'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Configuring SSR',
            path: 'configuring-ssr'
          },
          {
            name: 'ssrContext',
            path: 'ssr-context'
          },
          {
            name: 'SSR Middleware',
            path: 'ssr-middleware'
          },
          {
            name: 'SSR Webserver',
            path: 'ssr-webserver'
          },
          {
            name: 'Vue SSR Directives',
            path: 'vue-ssr-directives'
          },
          {
            name: 'App Icons for SSR',
            path: 'app-icons-ssr'
          },
          {
            name: 'SEO for SSR',
            path: 'seo-for-ssr'
          },
          {
            name: 'Client Side Hydration',
            path: 'client-side-hydration'
          },
          {
            name: 'Handling 404 and 500 Errors',
            path: 'handling-404-and-500-errors'
          },
          {
            name: 'SSR with PWA',
            path: 'ssr-with-pwa'
          },
          {
            name: 'SSR FAQ',
            path: 'ssr-frequently-asked-questions'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'SSR with Typescript',
            path: 'ssr-with-typescript'
          },
          {
            name: 'Deploying',
            path: 'deploying'
          }
        ]
      },
      {
        name: 'PWA mode',
        path: 'developing-pwa',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Configuring PWA',
            path: 'configuring-pwa'
          },
          {
            name: 'HMR for PWA',
            path: 'hmr-for-dev'
          },
          {
            name: 'App Icons for PWA',
            path: 'app-icons-pwa'
          },
          {
            name: 'Handling Service Worker',
            path: 'handling-service-worker'
          },
          {
            name: 'PWA with Typescript',
            path: 'pwa-with-typescript'
          }
        ]
      },
      {
        name: 'Developing Mobile Apps',
        path: 'developing-mobile-apps'
      },
      {
        name: 'Capacitor mode',
        path: 'developing-capacitor-apps',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Capacitor versions',
            path: 'capacitor-version-support'
          },
          {
            name: 'Configuring Capacitor',
            path: 'configuring-capacitor'
          },
          {
            name: 'App Icons for Capacitor',
            path: 'app-icons-capacitor'
          },
          {
            name: 'Capacitor API',
            path: 'capacitor-api'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Troubleshooting and Tips',
            path: 'troubleshooting-and-tips'
          },
          {
            name: 'Managing Google Analytics',
            path: 'managing-google-analytics'
          },
          {
            name: 'Publishing to Store',
            path: 'publishing-to-store'
          }
        ]
      },
      {
        name: 'Cordova mode',
        path: 'developing-cordova-apps',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Configuring Cordova',
            path: 'configuring-cordova'
          },
          {
            name: 'App Icons for Cordova',
            path: 'app-icons-cordova'
          },
          {
            name: 'Cordova Plugins',
            path: 'cordova-plugins'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Troubleshooting and Tips',
            path: 'troubleshooting-and-tips'
          },
          {
            name: 'Managing Google Analytics',
            path: 'managing-google-analytics'
          },
          {
            name: 'Publishing to Store',
            path: 'publishing-to-store'
          }
        ]
      },
      {
        name: 'Electron mode',
        path: 'developing-electron-apps',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Upgrade guide',
            path: 'electron-upgrade-guide'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Configuring Electron',
            path: 'configuring-electron'
          },
          {
            name: 'App Icons for Electron',
            path: 'app-icons-electron'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Preload Script',
            path: 'electron-preload-script'
          },
          {
            name: 'Electron Packages',
            path: 'electron-packages'
          },
          {
            name: 'Accessing files',
            path: 'electron-accessing-files'
          },
          {
            name: 'Frameless Electron Window',
            path: 'frameless-electron-window'
          },
          {
            name: 'Electron with Typescript',
            path: 'electron-with-typescript'
          },
          {
            name: 'Electron Security Concerns',
            path: 'electron-security-concerns'
          },
          {
            name: 'Troubleshooting and Tips',
            path: 'troubleshooting-and-tips'
          }
        ]
      },
      {
        name: 'Browser Extensions mode',
        path: 'developing-browser-extensions',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Configuring BEX',
            path: 'configuring-bex'
          },
          {
            name: 'App Icons for BEX',
            path: 'app-icons-browser-extension'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Types of BEX',
            path: 'types-of-bex'
          },
          {
            name: 'BEX Communication / Events',
            path: 'bex-communication'
          },
          {
            name: 'Background Script',
            path: 'background-script'
          },
          {
            name: 'Content Scripts',
            path: 'content-scripts'
          },
          {
            name: 'DOM Script',
            path: 'dom-script'
          }
        ]
      },
      {
        name: 'Ajax Requests',
        path: 'ajax-requests'
      },
      {
        name: 'Opening Dev Server To Public',
        path: 'opening-dev-server-to-public'
      }
    ]
  },
  {
    name: 'Legacy @quasar/app-webpack v3',
    icon: 'build',
    path: 'quasar-cli-webpack-v3',
    children: [
      {
        name: 'The quasar.config file',
        path: 'quasar-config-file'
      },
      {
        name: 'Convert to CLI with Webpack',
        path: 'convert-to-quasar-cli-with-webpack'
      },
      {
        name: 'Browser Compatibility',
        path: 'browser-compatibility'
      },
      {
        name: 'Supporting TypeScript',
        path: 'supporting-ts'
      },
      {
        name: 'Directory Structure',
        path: 'directory-structure'
      },
      {
        name: 'Commands List',
        path: 'commands-list'
      },
      {
        name: 'CSS Preprocessors',
        path: 'css-preprocessors'
      },
      {
        name: 'Routing',
        path: 'routing'
      },
      {
        name: 'Lazy Loading - Code Splitting',
        path: 'lazy-loading'
      },
      {
        name: 'Handling Assets',
        path: 'handling-assets'
      },
      {
        name: 'Boot Files',
        path: 'boot-files'
      },
      {
        name: 'Prefetch Feature',
        path: 'prefetch-feature'
      },
      {
        name: 'API Proxying',
        path: 'api-proxying'
      },
      {
        name: 'Handling Webpack',
        path: 'handling-webpack'
      },
      {
        name: 'Handling process.env',
        path: 'handling-process-env'
      },
      {
        name: 'State Management with Pinia',
        path: 'state-management-with-pinia'
      },
      {
        name: 'State Management with Vuex',
        path: 'state-management-with-vuex'
      },
      {
        name: 'Linter',
        path: 'linter'
      },
      {
        name: 'Testing & Auditing',
        path: 'testing-and-auditing'
      },
      {
        name: 'SPA mode',
        path: 'developing-spa',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'App Icons for SPA',
            path: 'app-icons-spa'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Deploying',
            path: 'deploying'
          }
        ]
      },
      {
        name: 'SSR mode',
        path: 'developing-ssr',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Writing Universal Code',
            path: 'writing-universal-code'
          },
          {
            name: 'Upgrade guide',
            path: 'ssr-upgrade-guide'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Configuring SSR',
            path: 'configuring-ssr'
          },
          {
            name: 'ssrContext',
            path: 'ssr-context'
          },
          {
            name: 'SSR Middleware',
            path: 'ssr-middleware'
          },
          {
            name: 'SSR Production Export',
            path: 'ssr-production-export'
          },
          {
            name: 'Vue SSR Directives',
            path: 'vue-ssr-directives'
          },
          {
            name: 'App Icons for SSR',
            path: 'app-icons-ssr'
          },
          {
            name: 'SEO for SSR',
            path: 'seo-for-ssr'
          },
          {
            name: 'Client Side Hydration',
            path: 'client-side-hydration'
          },
          {
            name: 'Handling 404 and 500 Errors',
            path: 'handling-404-and-500-errors'
          },
          {
            name: 'SSR with PWA',
            path: 'ssr-with-pwa'
          },
          {
            name: 'SSR Frequently Asked Questions',
            path: 'ssr-frequently-asked-questions'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'SSR with Typescript',
            path: 'ssr-with-typescript'
          },
          {
            name: 'Deploying',
            path: 'deploying'
          }
        ]
      },
      {
        name: 'PWA mode',
        path: 'developing-pwa',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Configuring PWA',
            path: 'configuring-pwa'
          },
          {
            name: 'HMR for PWA',
            path: 'hmr-for-dev'
          },
          {
            name: 'App Icons for PWA',
            path: 'app-icons-pwa'
          },
          {
            name: 'Handling Service Worker',
            path: 'handling-service-worker'
          },
          {
            name: 'PWA with Typescript',
            path: 'pwa-with-typescript'
          }
        ]
      },
      {
        name: 'Developing Mobile Apps',
        path: 'developing-mobile-apps'
      },
      {
        name: 'Capacitor mode',
        path: 'developing-capacitor-apps',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Capacitor versions',
            path: 'capacitor-version-support'
          },
          {
            name: 'Configuring Capacitor',
            path: 'configuring-capacitor'
          },
          {
            name: 'App Icons for Capacitor',
            path: 'app-icons-capacitor'
          },
          {
            name: 'Capacitor API',
            path: 'capacitor-api'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Troubleshooting and Tips',
            path: 'troubleshooting-and-tips'
          },
          {
            name: 'Managing Google Analytics',
            path: 'managing-google-analytics'
          },
          {
            name: 'Publishing to Store',
            path: 'publishing-to-store'
          }
        ]
      },
      {
        name: 'Cordova mode',
        path: 'developing-cordova-apps',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Configuring Cordova',
            path: 'configuring-cordova'
          },
          {
            name: 'App Icons for Cordova',
            path: 'app-icons-cordova'
          },
          {
            name: 'Cordova Plugins',
            path: 'cordova-plugins'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Troubleshooting and Tips',
            path: 'troubleshooting-and-tips'
          },
          {
            name: 'Managing Google Analytics',
            path: 'managing-google-analytics'
          },
          {
            name: 'Publishing to Store',
            path: 'publishing-to-store'
          }
        ]
      },
      {
        name: 'Electron mode',
        path: 'developing-electron-apps',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Upgrade guide',
            path: 'electron-upgrade-guide'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Configuring Electron',
            path: 'configuring-electron'
          },
          {
            name: 'App Icons for Electron',
            path: 'app-icons-electron'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Preload Script',
            path: 'electron-preload-script'
          },
          {
            name: 'Electron Packages',
            path: 'electron-packages'
          },
          {
            name: 'Accessing files',
            path: 'electron-accessing-files'
          },
          {
            name: 'Frameless Electron Window',
            path: 'frameless-electron-window'
          },
          {
            name: 'Electron with Typescript',
            path: 'electron-with-typescript'
          },
          {
            name: 'Electron Security Concerns',
            path: 'electron-security-concerns'
          },
          {
            name: 'Troubleshooting and Tips',
            path: 'troubleshooting-and-tips'
          }
        ]
      },
      {
        name: 'Browser Extensions mode',
        path: 'developing-browser-extensions',
        children: [
          {
            name: 'Introduction',
            path: 'introduction'
          },
          {
            name: 'Preparation',
            path: 'preparation'
          },
          {
            name: 'Configuring BEX',
            path: 'configuring-bex'
          },
          {
            name: 'App Icons for BEX',
            path: 'app-icons-browser-extension'
          },
          {
            name: 'Build Commands',
            path: 'build-commands'
          },
          {
            name: 'Types of BEX',
            path: 'types-of-bex'
          },
          {
            name: 'BEX Communication / Events',
            path: 'bex-communication'
          },
          {
            name: 'Background Hooks',
            path: 'background-hooks'
          },
          {
            name: 'Content Hooks',
            path: 'content-hooks'
          },
          {
            name: 'DOM Hooks',
            path: 'dom-hooks'
          }
        ]
      },
      {
        name: 'Ajax Requests',
        path: 'ajax-requests'
      },
      {
        name: 'Opening Dev Server To Public',
        path: 'opening-dev-server-to-public'
      }
    ]
  }
]
