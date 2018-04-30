<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <!--<todo></todo>-->
    <!--<p>{{count}}</p>-->
    <p>{{fullName}} {{count}}</p>
    <!--<p>{{textA}} {{textPlus}}</p>-->
    <router-link to="/app">app</router-link>
    <!--<router-link :to="{name: 'app'}">app</router-link>-->
    <router-link to="/login">login</router-link>
    <!--<router-link to="/login/exact">login exact</router-link>-->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
    <!--<router-view name="a"></router-view>-->
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

// console.log(Header.__docs) // 打印自定义loader内容

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    // console.log(this.$route)
    console.log(this.$store)
    // let i = 1
    // setInterval(() => {
    //   this.$store.commit('updateCount', i++)
    // }, 1000)
    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 2000
    // })
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    // this['a/updateText'](123) // 分模块命名空间调用
    // this['a/add']()
  },
  methods: {
    // ...mapActions(['updateCountAsync', 'a/add']),
    ...mapActions(['updateCountAsync']),
    // ...mapMutations(['updateCount', 'a/updateText'])
    ...mapMutations(['updateCount'])
  },
  computed: {
    // textA () {
    //   return this.$store.state.a.text
    // },
    // ...mapState(['count']),
    // ...mapState({
    //   count: 'count'
    // }),
    ...mapState({
      count: (state) => state.count
      // textA: state => state.a.text
    }),
    // count () {
    //   return this.$store.state.count
    // },
    // ...mapGetters(['fullName', 'a/textPlus'])
    ...mapGetters({
      'fullName': 'fullName'
      // 'textPlus': 'a/textPlus'
    })
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


