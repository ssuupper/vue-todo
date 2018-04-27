import Vue from 'vue'

new Vue({
  el: '#root',
  // template: `
  //   <!--<div v-bind:id="aaa" v-on:click="handleClick">-->
  //   <div :id="aaa" @click="handleClick">
  //     <!--{{isActive ? 'active' : 'not active'}}-->
  //     <!--{{arr.join(' ')}}-->
  //     <!--{{html}}-->
  //     <p v-html="html"></p>
  //   </div>
  // `,
  template: `
    <!--<div :class="{active:!isActive}">-->
      <!--<p v-html="html"></p>-->
    <!--</div>-->
    <!--<div :class="[isActive ? 'active' : '']">-->
      <!--<p v-html="html"></p>-->
    <!--</div>-->
    <div 
      :class="[{active:!isActive}]"
      :style="[styles, styles2]"
     >
      <p>{{getJoinedArr(arr)}}</p> <!--推荐用computed来做-->
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>',
    aaa: 'main',
    styles: {
      color: 'red',
      appearance: 'none' // vue会自动加上浏览器私有化前缀
    },
    styles2: {
      color: 'black'
    }
  },
  methods: {
    handleClick () {
      console.log('clicked')
    },
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }
})
