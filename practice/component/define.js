import Vue from 'vue'

// const data = {
//   text: 0
// }

const component = {
  // props: { // 用定义组件被外部使用时的行为，不建议在组件内部修改props属性的值，应使用单向数据流
  //   active: Boolean, // 小写加camelCase的形式定义，使用时用连接符形式
  //   propOne: String
  //   // onChange: Function
  // },
  // props: [
  //   'active',
  //   'propOne'
  // ],
  props: {
    active: {
      type: Boolean, // 类型
      required: true // 是否必须
      // default: true // 默认，一般和required互斥
      // default () { // 如果active是对象，设置默认值必须返回方法
      //   return {}
      // }
      // validator (value) { // 增加验证
      //   return typeof value === 'boolean'
      // }
    },
    propOne: String
  },
  template: `
    <!--<div>This is a component, {{text}}</div>-->
    <div>
      <div>{{text}}</div>
      <input type="text" v-model.number="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  // data: { // 在定义组件data时候，如果组件不是通过new Vue()来创建的而是注册的话，要使用data function的方式
  //   text: 123
  // },
  // data () {
  //   return data // 不return单独对象会导致多个组件同时使用一份数据
  // }
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {
      // this.onChange()
      this.$emit('change')
    }
  }
}

// Vue.component('CompOne', component) // 注册组件，定义组件名建议用大写和camelCase方式

new Vue({
  components: {
    CompOne: component
  },
  data: {
    prop1: 'text1'
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  mounted () {
    console.log(this.$refs.comp1)
  },
  el: '#root',
  template: `
    <div>
      <!--<comp-one :active="true" :prop-one="prop1" :on-change="handleChange"></comp-one>-->
      <comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
      <comp-one :active="false" prop-one="text2"></comp-one>
    </div>
  `
})
