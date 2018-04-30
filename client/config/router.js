import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history', // 默认是hash路由
    // base: '/base/', // 最为整个应用的基路径
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, from, savedPosition) { // 路由后页面滚动
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    }
    // parseQuery (query) {
    //   // 字符串参数转成对象
    // },
    // stringifyQuery (obj) {
    //   // 对象转成字符串
    // },
    // fallback: false // 默认是true，false为多页应用
  })
}
