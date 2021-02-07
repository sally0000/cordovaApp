// 具体配置可以去 postcss-pxtorem 仓库看看文档
module.exports ={
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    "postcss-pxtorem": {
      rootValue: 37.5, // Vant 官方根字体大小是 37.5
      propList: ['*'], 
    }
  }
}