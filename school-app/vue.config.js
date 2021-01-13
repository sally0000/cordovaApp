// const autoprefixer = require('autoprefixer');
// const pxtorem = require('postcss-pxtorem');
module.exports ={
  outputDir: '../www',
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  assetsDir: 'static',
  css: {
    // modules:false,
    // extract:true,
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          // autoprefixer(),
          // pxtorem({
          //   rootValue: 37.5,
          //   propList: ['*']
          // })
        ]
      },
    }
  }
}