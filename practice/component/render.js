import Vue from 'vue'

// 关于createElement是vue虚拟dom的概念，它创建出来的不是真正的html节点，而是v-node的类存储在内存中，会跟真正的dom进行对比
// 如果发现需要更新，才会把v-node转换填充到真正的dom里

const component = {
  props: ['props1'],
  name: 'comp',
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  render (createElement) {
    return createElement(
      'div',
      {
        style: this.style
        // on: {
        //   click: () => this.$emit('click')
        // }
      },
      [
        // this.$slots.default, // 插槽使用内建的函数，无具名的默认是default
        this.$slots.header, // 插槽使用内建的函数，无具名的默认是default
        this.props1
      ]
    )
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'component value'
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
  mounted () {
    console.log(this.$refs.comp, this.$refs.span)
  },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  },
  // template: `
  //   <comp-one ref="comp">
  //     <span ref="span">{{value}}</span>
  //   </comp-one>
  // `,
  // 使用template时，最终经过生命周期中的编译，编译成为render function
  // $createElement是vue提供的创建节点的函数，在每个vue的实例上都会有这个函数
  // render () {
  //   return this.$createElement()
  // }
  render (createElement) {
    return createElement(
      'comp-one',
      {
        ref: 'comp',
        props: {
          props1: this.value
        },
        // on: {
        //   click: this.handleClick
        // },
        nativeOn: { // 不需要组件自动发送emit，而是会自动绑定到组件的根结点上，如果是原生dom就会直接绑定到该dom上
          click: this.handleClick
        }
      },
      [
        createElement(
          'span',
          {
            ref: 'span',
            slot: 'header', // 指定内容放在组件的哪个slot name下
            // domProps: { // 给原生节点指定domProps
            //   innerHTML: '<span>456</span>'
            // }
            attrs: { // 给节点设置属性
              id: 'test-id'
            }
          }, this.value)
      ]
    )
  }
})
