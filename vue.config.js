module.exports = {
  lintOnSave: true,
  runtimeCompiler: false,
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/scss/_handle.scss";`
      }
    }
  },
  devServer: {
    hot:true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000/blog',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
  }
};
