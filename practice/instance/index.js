import Vue from 'vue'

const app = new Vue({
  // el: '#root', // 指定template渲染出来的内容挂载到的地方，最终会把root节点替换掉
  template: '<div ref="div">{{text}} {{obj.a}}</div>', // 最终会被vue编译成render function
  data: {
    text: 0,
    obj: {}
  },
  watch: {
    text (newText, oldText) {
      console.log(`${newText} : ${oldText}`)
    }
  }
})

app.$mount('#root') // vue示例挂载到root节点上，相当于el属性的配置

// app.text = 'text1'

// let i = 0
setInterval(() => {
  // i++
  app.text += 1
  // app.text += 1
  // app.text += 1
  // app.text += 1
  // app.text += 1
  // app.$nextTick() // 将回调延迟到下次dom更新循环之后执行
  // app.obj.a = i // data里面没声明就使用的话时非响应式的，值是改变的，但不会引起vue的instance进行重新渲染，使用forceUpdate强制刷新
  // app.$set(app.obj, 'a', i) // 通过这种方式vue会补上reactive
  // app.$forceUpdate() // 不建议这么使用，性能降低
  // app.$options.data.text += 1 // 不会修改data的属性的值和data不是同一个对象
  // app.$data.text += 1 // 此做法生效，此text和vue根结点的text是同一个
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = (h) => { // 等待值有变化时重新渲染时生效
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root) // vue的根结点
// console.log(app.$root === app)
// console.log(app.$children) // <item><div></div></item>
// console.log(app.$slots) // vue插槽
// console.log(app.$scopedSlots) // vue的scoped插槽
// console.log(app.$refs) // vue模版的引用，html时返回html节点的对象，vue组件时返回组件的实例
// console.log(app.$isServer) // 服务端渲染时使用，判断时使用

// Vue实例上的方法

// const unWatch = app.$watch('text', (newText, oldText) => { // 监听值的变化
//   console.log(`${newText} : ${oldText}`)
// })
// setTimeout(() => {
//   unWatch() // 上面的watch方法不会自动注销
// }, 2000)
// 事件监听
// app.$on('test', (a, b) => { // 只能监听同一个vue对象上的事件
//   console.log(`test emited ${a} ${b}`)
// })
// app.$emit('test', 1, 2)
// app.$once('test', (a, b) => { // 只监听一次
//   console.log(`test emited ${a} ${b}`)
// })
// setInterval(() => {
//   app.$emit('test', 1, 2)
// }, 1000)

// app.$forceUpdate() // vue组件强制刷新一次
