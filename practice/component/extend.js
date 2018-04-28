import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
    <div>
      <div>Text: {{text}}</div>
      <div>PropOne: {{propOne}}</div>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  mounted () {
    console.log('comp mounted')
  }
}

// const parent = new Vue({
//   name: 'parent'
// })

const component2 = { // 使用继承属性，进行组件的扩展
  // parent: parent, // 通过new来创建才可以指定parent，此处没有办法修改
  extends: component,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log(this.$parent.$options.name, 'comp2 mounted')
    this.$parent.text = 12345
  }
}

// const CompVue = Vue.extend(component) // 使用extend得到vue的子类
//
// new CompVue({
//   el: '#root',
//   // props: { // 此方法修改props属性值是无法拿到的
//   //   propOne: 'xxx'
//   // }
//   propsData: { // 此方法修改props属性值可以
//     propOne: 'xxx'
//   },
//   data () { // 可以覆盖原默认值
//     return {
//       text: 123
//     }
//   },
//   mounted () { // 和extend的mounted方法都会被调用
//     console.log('instance mounted')
//   }
// })

new Vue({
  // parent: parent, // new创建时可以修改parent，但不建议这么做
  name: 'Root',
  el: '#root',
  components: {
    Comp: component2
  },
  data: {
    text: 2333
  },
  // template: `<comp></comp>`,
  template: `
    <div>
      <span>{{text}}</span>
      <comp></comp>
    </div>
  `,
  mounted () {
    console.log(this.$parent.$options.name)
  }
})
