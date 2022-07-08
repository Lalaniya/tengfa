const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
      proxy:{
        '/n':{
          target:'https://api.tf2sc.cn',
          changeOrigin:true,
          pathRewrite:{'^/n':''}
        },
        '/z':{
          target:'https://www.tf2sc.cn',
          changeOrigin: true,
          pathRewrite:{'^/z':''}
        }
      }
  }
})
