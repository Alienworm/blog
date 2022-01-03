module.exports = {
  outputDir: "/dist",
  lintOnSave: true,
  runtimeCompiler: false,
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/scss/index.scss";`
      }
    }
  },
  parallel: require("os").cpus().length > 1,
  // devServer: {
  //   hot:true,
  //   open: true,
  //   proxy: {
  //     '/api': {
  //       target: 'http://127.0.0.1:8090/medical_insurance',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '/'
  //       }
  //     }
  //   },
  // },
  pluginOptions: {}
};
