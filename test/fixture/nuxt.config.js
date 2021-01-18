module.exports = {
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: ['../../lib/index.js'],
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
}
