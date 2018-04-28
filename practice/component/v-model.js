import Vue from 'vue'

// 组件内部实现v-model双向绑定使用场景，组件内部要修改一些变量，类似于form表单里面值会频繁修改变量

const component = {
  model: {
    prop: 'value1', // 实现自定义v-model时指定变量的名称
    event: 'change' // 指定监听的事件
  },
  props: ['value', 'value1'],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="value1">
    </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data: {
    value: '123'
  },
  template: `
    <div>
      <div>{{value}}</div>
      <!--<comp-one :value="value" @input="value = arguments[0]"></comp-one>-->
      <comp-one v-model="value"></comp-one> <!--v-model实现了上面的功能，相当入增加了value属性以及@input事件监听-->
    </div>
  `
})
