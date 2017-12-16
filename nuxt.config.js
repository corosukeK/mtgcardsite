const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mtgcardsite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    '~plugins/buefy'
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'MtG Card Search',
    short_name: 'MtGSearch',
    description: 'Sample demo',
    lang: 'ja',
    theme_color: '#fff',
    background_color: '#FAFAFA',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
