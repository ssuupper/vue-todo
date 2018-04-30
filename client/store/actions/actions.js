export default { // mutation不能有异步的代码，如果有异步代码要使用actions
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', data.num)
    }, data.time)
  }
}
