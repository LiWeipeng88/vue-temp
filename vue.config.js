const path = require('path')
function resolve(dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  assetsDir: 'assets',
  publicPath: './',
  lintOnSave: true, // 是否开启编译时是否不符合eslint提示
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true
      }
    }
  },
  // 配置别名
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('router', resolve('src/router'))
      .set('utils', resolve('src/utils'))
      .set('static', resolve('src/static'))
      .set('store', resolve('src/store'))
      .set('views', resolve('src/views'))
  },
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/_vars.scss";'
      }
    }
  }
}
