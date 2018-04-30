import Vuex from 'vuex'
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
export default () => {
  return new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      updateCount (state, num) {
        state.count = num
      }
    }
  })
}
