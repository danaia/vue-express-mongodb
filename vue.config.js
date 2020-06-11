const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
module.exports = {
  transpileDependencies: ['vuetify'],

  configureWebpack: {
    entry: {
      app: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000']
      // app: ['webpack-hot-middleware/client']
    },
    plugins: [
      new webpack.SourceMapDevToolPlugin({}),
      // new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.NoErrorsPlugin(),
      //https://github.com/webpack-contrib/webpack-bundle-analyzer
      new BundleAnalyzerPlugin({
        openAnalyzer: false
      })
    ],
    // resolve: {
    //   root: [path.resolve(__dirname, './')]
    // },
    optimization: {
      splitChunks: {
        chunks: 'all' //'async'
        // cacheGroups: {}
      }
    }
  }
}
