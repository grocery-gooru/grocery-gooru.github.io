export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'We handle the hassle so you don\'t have to',
    titleTemplate: 'Grocery Guru | %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'We Handle The Hassle So You Don\'t Have To. Shop for groceries. Fulfill your monthly prescription. Collect your post, pay your bills, and do your laundry.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css',
    '@/assets/styles/gurufont.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-facebook-pixel-module',
    '@nuxtjs/sitemap',
    '@nuxtjs/redirect-module'
  ],

  // Facebook tracking pixel https://www.npmjs.com/package/nuxt-facebook-pixel-module
  facebook: {
    track: 'PageView',
    pixelId: '1750533488449821',
    autoPageView: true,
    disabled: false
  },

  // Sitemap https://sitemap.nuxtjs.org/
  sitemap: {
    hostname: 'https://grocery-guru.com',
    trailingSlash: false,
    filter({ routes }) {
      return routes.map(route => {
        if (route.name === 'index') {
          route.url = ''
          route.path = ''
        }
        return route
      })
    }
  },

  router: {
    trailingSlash: false
  },

  // https://github.com/nuxt-community/redirect-module#readme
  redirect: [
    {
      from: '(?!^\/$|^\/[?].*$)(.*\/[?](.*)$|.*\/$)',
      to: (from, req) => {
        const base = req._parsedUrl.pathname.replace(/\/$/, '')  // We take pathname instead of req.url because of the query parameters
        const search = req._parsedUrl.search
        return base + (search != null ? search : '')
      },
      statusCode: 301
    }
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
