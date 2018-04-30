import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

// import Vue from 'vue'
//
// Vue.use(Vuex)
//
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     updateCount (state, num) {
//       state.count = num
//     }
//   }
// })

// export default store

// 创建时要改成export一个方法，服务器渲染时不能用同一个store防止内存溢出

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  return new Vuex.Store({
    strict: isDev, // 启用严格模式，无法在mutation之外修改数据，不要在正式环境使用
    state: defaultState,
    mutations,
    getters,
    actions
  })
}
