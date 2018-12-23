'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)
const SkeletonPlugin = require('page-skeleton-webpack-plugin').SkeletonPlugin

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    new SkeletonPlugin({
      pathname: path.resolve(__dirname, `../index.html`),
      staticDir: path.resolve(__dirname, '../dist'),
      routes: ['/main'],
      port: '7890',
      loading: 'chiaroscuro',
      svg: {
        color: '#EFEFEF',
        shape: 'circle',
        shapeOpposite: ['.Rating-gray_1kpffd5_0 svg']
      },
      image: {
        shape: 'rect', // `rect` | `circle`
        color: '#EFEFEF',
        shapeOpposite: ['.mint-swipe-items-wrap img']
      },
      pseudo: {
        color: '#EFEFEF', // or transparent
        shape: 'circle', // circle | rect
        shapeOpposite: ['.delivery-icon-hollow_3q8_B5r_0', '.index-premium_39rl0v9']
      },
      button: {
        color: '#EFEFEF',
        excludes: ['.mint-swipe-items-wrap a']
      },
      defer: 5000,
      excludes: [],
      remove: [],
      hide: ['.index-dashedline_7B79b3W', '.Rating-actived_GBtiHkB_0'],
      grayBlock: ['#header'],
      cssUnit: 'rem',
      headless: true,
      // minify: false,
      cookies: [{
        name: 'SID',
        value: 'a495vvmEPEE4DZi083dr8yR3EAPYqW40HaWA',
        url: 'https://h5.ele.me'
      }, {
        name: 'USERID',
        value: '273745271',
        url: 'https://h5.ele.me'
      }],
      noInfo: false
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
