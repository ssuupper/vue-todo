// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id',
    path: '/app',
    props: true, // path中的变量id会当作Todo组件的入参
    component: () => import('../views/todo/todo.vue'), // 异步组件加载
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    name: 'app',
    meta: { // 元信息
      title: 'this is app',
      description: 'desc'
    },
    beforeEnter (to, from, next) { // 进入路由之前被调用
      console.log('app route before enter')
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
    // components: {
    //   default: Login,
    //   a: Todo
    // }
  }
  // {
  //   path: '/login/exact',
  //   component: Login
  // }
]
