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
  const store = new Vuex.Store({
    strict: isDev, // 启用严格模式，无法在mutation之外修改数据，不要在正式环境使用
    state: defaultState,
    mutations,
    getters,
    actions
    // modules: { // vuex模块化
    //   a: {
    //     namespaced: true,
    //     state: {
    //       text: 1
    //     },
    //     mutations: {
    //       updateText (state, text) { // state是a模块单独的state
    //         console.log('a.state', state)
    //         state.text = text
    //       }
    //     },
    //     getters: {
    //       textPlus (state, getters, rootState) {
    //         return state.text + 1
    //       }
    //     },
    //     actions: {
    //       add ({state, commit, rootState}) {
    //         // commit('updateText', rootState.count)
    //         commit('updateCount', rootState.count, {root: true})
    //       }
    //     }
    //   },
    //   b: {
    //     state: {
    //       text: 2
    //     }
    //   }
    // }
  })

  // 加入webpack热更替功能
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './actions/actions',
      './getters/getters'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}
