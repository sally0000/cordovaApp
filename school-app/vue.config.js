const path = require('path')
module.exports = {
  // 基本路径   整个文件夹在哪
  publicPath: './',
  // 输出文件目录   文件夹名
  outputDir: '../www',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。    资源放的目录
  assetsDir: "./static",
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径    index的路劲和名字
  indexPath: './index.html',
  filenameHashing: process.env.NODE_ENV === 'production' ? 'false' : 'true',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // runtimeCompiler: true, // 运行时版本是否需要编译
  transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy : null
	//proxy: {
	//	'/api': {
	//		target: 'http://localhost:3000/api',
	//		changeOrigin: true,
	//		pathRewrite: {
	//			'^/api': ''
	//		}
	//	}
	//}
  }
}
