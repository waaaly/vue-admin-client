const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
        // 自动补全的扩展名
        extensions: ['.js', '.vue', '.json'],
        // 默认路径代理
        // 例如 import Vue from 'vue'，会自动到 'vue/dist/vue.common.js'中寻找
        alias: {
            '@': resolve('src'),
            '@assets': resolve('assets'),
    	}
    },
  },
}