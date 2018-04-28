import Vue from 'vue'

// vue组件的高级属性

const ChildComponent = {
  // template: `<div>child component: {{value}}</div>`,
  // inject: ['grandfather', 'value'],
  template: `<div>child component: {{data.value}}</div>`,
  inject: ['grandfather', 'data'],
  mounted () {
    console.log(this.$parent.$options.name) // $parent只能找到组件的上一级，可以用provide和inject实现
    // console.log(this.grandfather, this.value)
  }
}

const component = {
  name: 'comp',
  components: {
    ChildComponent
  },
  // template: `
  //   <div :style="style">
  //     <!--vue的内置组件，实现组件内的结构继承关系-->
  //     <slot></slot>
  //     <div class="header">
  //       <!--vue的具名插槽，通过设置name属性-->
  //       <slot name="header"></slot>
  //     </div>
  //     <div class="body">
  //       <slot name="body"></slot>
  //     </div>
  //   </div>
  // `,
  template: `
    <div :style="style">
      <!--作用域插槽是有自己的作用域的-->
      <slot :value="value" aaa="111"></slot>
      <child-component></child-component>
    </div>
  `,
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
  // provide: { // 在provide初始化的时候vue还没有初始化成功，如果要进行跟provide对象上挂钩的值进行操作时要变成function
  //   grandfather: this,
  //   value: this.value
  // },
  provide () { // 默认不提供vue的reactive的特性
    const data = {} // hack的方法，不推荐

    Object.defineProperty(data, 'value', { // 实现在子组件调用value时实际调用的时get方法，每次会获取到最新this.value
      get: () => this.value, // 提供get方法
      enumerable: true // 可以被读取
    })

    return {
      grandfather: this,
      // value: this.value
      data
    }
  },
  el: '#root',
  data: {
    value: '123'
  },
  mounted () {
    console.log(this.$refs.comp) // ref用在组件上得到component对象
    console.log(this.$refs.span) // ref用在html原生标签上得到html的节点
  },
  // template: `
  //   <div>
  //     <comp-one>
  //       <span>this is content</span>
  //       <span slot="header">this is header</span>
  //       <span slot="body">this is body</span>
  //     </comp-one>
  //   </div>
  // `
  template: `
    <div>
      <comp-one ref="comp">
        <!--作用域插槽，得到组件内的属性-->
        <span slot-scope="props" ref="span">{{value}} {{props.value}} {{props.aaa}}</span>
      </comp-one>
      <input type="text" v-model="value">
    </div>
  `
})
