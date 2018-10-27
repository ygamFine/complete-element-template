'use strict'
require('./check-versions')()

// process 是 node 中的 global 全局对象的属性，env 设置环境变量
process.env.NODE_ENV = 'production'

// ora 是一个 命令行转圈圈的动画插件
const ora = require('ora')
// rm linux 命令
const rm = require('rimraf')
// 路径相关模块
const path = require('path')
// 用来在命令行输入不同颜色的文字
const chalk = require('chalk')
// 引入 webpack 模块
const webpack = require('webpack')
// 外部配置文件
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
// 开启转圈圈动画
const spinner = ora('正在编译文件，请稍后...')
spinner.start()
// 删除方法 删除 入口文件 和 相关资源文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  // 如果删除的过程中出现错误，就抛出错误，同时程序终止
  if (err) throw err
  // 没有错误 执行 webpack 模块进行编译
  webpack(webpackConfig, (err, stats) => {
    // 回调函数是 webpack 过程中执行
    // 停止转圈圈动画
    spinner.stop()
    // 有错误就抛出
    if (err) throw err
    // 在控制台输出以下信息
    // stats 对象中保存着搬移过程中的各种信息
    process.stdout.write(stats.toString({
      // 增加控制台颜色开关
      colors: true,
      // 不增加内置模块信息
      modules: false,
      // 不增加子级信息
      children: false,
      // 允许少的输出
      chunks: false,
      //不讲内置模块的信息加到包信息
      chunkModules: false
    }) + '\n\n')
    // 如果 编译时 错误
    if (stats.hasErrors()) {
      // 控制台输入 错误 提示
      console.log(chalk.red('  编译失败.\n'))
      // 终止程序
      process.exit(1)
    }

    console.log(chalk.cyan('  编译完成.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
