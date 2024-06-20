export default {
    target: 'static',
    router: {
      base: '/idaproject-test/'
    },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'idaproject-test',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      src: '~assets/styles/styles.scss',
      lang: 'scss',
    },
  ],
  styleResources: {
    scss: [
      '~assets/styles/global/normalize.scss',
      '~assets/styles/global/vars.scss',
      '~assets/styles/global/mixins.scss',
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/animation.js', },
    { src: '@plugins/vee-validate.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    productionSourceMap: false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css', 'svg'],
    extend (config) {
      config.node = { fs: 'empty' }
    },
    transpile: [
      'vue-intersect',
      'vee-validate/dist/rules'
    ],
  },
}
