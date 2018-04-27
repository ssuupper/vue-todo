import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>Name: {{getName()}}</p>
      <p>{{number}}</p>
      <p>FullName: {{fullName}}</p>
      <p><input type="text" v-model="number"></p>
      <p>FirstName: <input type="text" v-model="firstName"></p>
      <p>LastName: <input type="text" v-model="lastName"></p>
      <p>Name: <input type="text" v-model="name"></p>
      <p>Obj.a: <input type="text" v-model="obj.a"></p>
    </div>
  `,
  data: {
    firstName: 'Steve',
    lastName: 'Wei',
    number: 0,
    fullName: '',
    obj: {
      a: 123
    }
  },
  // 用于我们拿到的数据不是想要显示的数据，需要经过计算时使用
  computed: { // 其实定义class时的get方法，可以通过变量名字去调用，其实是调用的这个方法，会有缓存
    name: { // 不建议用set方法设置值
      get () {
        console.log('name get invoked')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    },
    name2 () {
      console.log('new name')
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: { // 并不试用于显示某数据，主要用于某个数据的变化去做指定的操作
    // firstName (newName, oldName) { // 默认时不执行的，只有改变时才执行
    //   this.fullName = newName + ' ' + this.lastName
    // }
    firstName: { // 解决默认不执行
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true,
      deep: true
    },
    obj: {
      handler () {
        console.log('obj changed')
      },
      immediate: true,
      deep: true // 开启深入观察，会遍历对象的属性并观测变化，性能开销大
    },
    'obj.a': {
      handler () {
        console.log('obj.a changed')
      },
      immediate: true,
      deep: false
    }
  },
  methods: {
    getName () { // 重新渲染时会重新调用该方法
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
