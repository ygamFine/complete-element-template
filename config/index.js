'use strict'
// Template version: 1.3.1

const path = require('path')

module.exports = {
  dev: {

    // 静态资源文件夹
    assetsSubDirectory: 'static',
    // 发布路径
    assetsPublicPath: '/',
    // 常用来配置 代理 API
    proxyTable: {},

    // 地址
    host: 'localhost',
    // 端口
    port: 9426,
    // 是否自动打开浏览器
    autoOpenBrowser: true,
    // 查询错误
    errorOverlay: true,
    // 通知错误
    notifyOnErrors: true,
    // poll是跟devserver相关的一个配置，webpack为我们提供的devserver是可以监控文件改动的，但在有些情况下却不能工作，我们可以设置一个轮询（poll）来解决
    poll: false,

    /**
     * Source Maps
     */

    // webpack提供的用来方便调试的配置，它有四种模式，可以查看webpack文档了解更多
    devtool: 'cheap-module-eval-source-map',

    // 一个配合devtool的配置，当给文件名插入新的hash导致清除缓存时是否生成souce maps，默认在开发环境下为true
    cacheBusting: true,
    // 是否开启cssSourceMap
    cssSourceMap: true
  },

  build: {
    // 编译后 index.html 的路径
    index: path.resolve(__dirname, '../dist/index.html'),

    // 编译后的文件根目录
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 静态文件夹
    assetsSubDirectory: 'static',
    // 发布路径
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    // 是否开启source-map
    productionSourceMap: true,
    // 与 dev 一样
    devtool: '#source-map',

    // 是否进行压缩
    productionGzip: false,
    // 设置后 对相应扩展名的文件进行压缩
    productionGzipExtensions: ['js', 'css'],
    // 是否开启打包后的分析报告
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
