import mdPageList from 'src/pages/listing.js'
import DocLayout from 'src/layouts/doc-layout/DocLayout.vue'

const routes = [
  { path: '/', redirect: '/home' },

  {
    path: '/',
    component: DocLayout,
    children: Object.keys(mdPageList).map(key => {
      const acc = { component: mdPageList[ key ] }

      if (acc.path === void 0) {
        const parts = key.substring(1, key.length - 3).split('/')
        const len = parts.length
        const path = parts[ len - 2 ] === parts[ len - 1 ]
          ? parts.slice(0, len - 1)
          : parts

        acc.path = path.join('/')
      }

      return acc
    })
  },

  // Always leave this as last one
  {
    path: '/:catchAll(.*)*',
    component: DocLayout,
    children: [{
      path: '',
      component: () => import('../pages/Page404.vue'),
      meta: { fullscreen: true }
    }]
  }
]

export default routes
