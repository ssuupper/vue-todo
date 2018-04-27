// const docLoader = require.resolve('./doc-loader') // 自定义loader

module.exports = (isDev) => {
  return {
    preserveWhitespace: true, // 写.vue文件时去掉多余空格
    extractCSS: !isDev, // vue默认不会把.vue中的css打包到css文件中
    cssModules: { // 实现css module的功能
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]', // 最终把css对应的classname编译成独一无二的名字
      camelCase: true // 把css的横杠连接的方式转换成js中的变量驼峰命名方式
    }
    // hotReload: false // 热重载功能，不需要设置，会根据环境变量生成
    // loaders: { // 配置自定义loader，js、html、css
    //     'docs': docLoader
    // }，
    // preLoader: { // loader解析前处理
    //
    // },
    // postLoader: { // loader解析后处理
    //
    // }
  }
}
