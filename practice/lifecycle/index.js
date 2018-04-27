import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  // template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount') // 服务端渲染不会调用
  },
  mounted () {
    console.log(this.$el, 'mounted') // 服务端渲染不会调用
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  },
  render (h) {
    // throw new TypeError('render error')
    console.log('render function invoked')
    return h('div', {}, this.text)
  },
  renderError (h, err) { // 开发时才会被调用，显示错误信息，只有本组件报错才会调用
    return h('div', {}, err.stack)
  },
  errorCaptured () {
    // 用于开发环境，收集线上的错误，子组件也会捕获到，会向上冒泡
  }
})

app.$mount('#root')

// setInterval(() => {
//   app.text += 1
// }, 1000)

setTimeout(() => {
  app.$destroy()
}, 1000)
