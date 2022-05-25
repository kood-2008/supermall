/*const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true

})*/
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {  //内部已经配置过 '@' = 'src' 别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  lintOnSave:false  //关闭语法检查
}

