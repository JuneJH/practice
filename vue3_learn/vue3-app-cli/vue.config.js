const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: false,
  devServer:{
    port: 9527,
    disableHostCheck: true,
    // proxy: {
    //   '/xxx': {
    //     target: 'https://xxx.com/xxx',
    //     ws: true,
    //     changOrigin: true
    //   }
    // }
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@img',resolve('src/assets/img'))
      .set('@views',resolve('src/views'))
      .end()
  }
}