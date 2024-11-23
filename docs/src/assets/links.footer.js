import { socialLinks } from './links.social.js'

export const footerLinks = [
  {
    name: socialLinks.name,
    children: socialLinks.children.concat([
      { name: 'Blog', path: 'https://blog.quasar.dev', external: true },
      { name: 'Announcements', path: 'https://github.com/quasarframework/quasar/discussions/categories/announcements', external: true }
    ])
  },
  {
    name: '@quasar/app-vite v1',
    children: [
      { name: 'Developing SPA', path: '/quasar-cli-vite-v1/developing-spa/introduction' },
      { name: 'Developing SSR', path: '/quasar-cli-vite-v1/developing-ssr/introduction' },
      { name: 'Developing PWA', path: '/quasar-cli-vite-v1/developing-pwa/introduction' },
      { name: 'Developing Capacitor Apps', path: '/quasar-cli-vite-v1/developing-capacitor-apps/introduction' },
      { name: 'Developing Cordova Apps', path: '/quasar-cli-vite-v1/developing-cordova-apps/introduction' },
      { name: 'Developing Electron Apps', path: '/quasar-cli-vite-v1/developing-electron-apps/introduction' },
      { name: 'Developing Browser Extensions', path: '/quasar-cli-vite-v1/developing-browser-extensions/introduction' }
    ]
  },
  {
    name: '@quasar/app-webpack v3',
    children: [
      { name: 'Developing SPA', path: '/quasar-cli-webpack-v3/developing-spa/introduction' },
      { name: 'Developing SSR', path: '/quasar-cli-webpack-v3/developing-ssr/introduction' },
      { name: 'Developing PWA', path: '/quasar-cli-webpack-v3/developing-pwa/introduction' },
      { name: 'Developing Capacitor Apps', path: '/quasar-cli-webpack-v3/developing-capacitor-apps/introduction' },
      { name: 'Developing Cordova Apps', path: '/quasar-cli-webpack-v3/developing-cordova-apps/introduction' },
      { name: 'Developing Electron Apps', path: '/quasar-cli-webpack-v3/developing-electron-apps/introduction' },
      { name: 'Developing Browser Extensions', path: '/quasar-cli-webpack-v3/developing-browser-extensions/introduction' }
    ]
  }
]
