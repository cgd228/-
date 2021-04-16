const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
const pathResolve = dir => path.join(__dirname, dir)

// webpack build externals
const assetsCDN = {
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios',
    'element-ui': 'ELEMENT'
  },
  css: [],
  js: [
    '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js',
    '//unpkg.com/element-ui/lib/index.js'
  ]
}

module.exports = {
  lintOnSave: !isProd,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  productionSourceMap: false,
  filenameHashing: true,
  publicPath: './',
  configureWebpack: {
    externals: isProd ? assetsCDN.externals : {}
  },
  chainWebpack: config => {
    config.resolve.alias.set('@c', pathResolve('src/components')).set('assets', pathResolve('src/assets'))

    config.resolve.extensions.merge(['.vue', '.js', '.json'])

    // 公共组件抽离打包
    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs', // 打包后的文件名
          test: /[\\/]node_modules[\\/]/, // 匹配的模块
          priority: 10, // 优先级
          chunks: 'initial'
        },
        elementUI: {
          name: 'chunk-elementUI',
          priority: 20,
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/
        },
        commons: {
          name: 'chunk-commons',
          test: pathResolve('src/components'),
          minChunks: 2, // 只有被引入两次后 才会被抽离出公共打包
          priority: 5,
          reuseExistingChunk: true
        }
      }
    })

    // CDN引入
    if (isProd) {
      config.plugin('html').tap(args => {
        args[0].cdn = assetsCDN
        return args
      })
    }
  },
  devServer: {
    port: 8800,
    open: true
  }
}
