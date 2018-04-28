import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <div>{{text}}</div>
      <div v-text="text"></div> <!--数据绑定-->
      <div v-html="html"></div> <!--作为html插入-->
      <div v-show="active">{{text}}</div> <!--display:none-->
      <div v-if="active">{{text}}</div> <!--节点会被remove，会动态增删节点，推荐用v-show-->
      <div v-else-if="text === 0">v-else-if: {{text}}</div>
      <div v-else>v-else: {{text}}</div> <!--必须有v-if才可以使用-->
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}}:{{index}}</li> <!--遍历数组，加key确定唯一的值，vue会进行缓存复用优化-->
      </ul>
      <ul>
        <li v-for="(val, key, index) in obj" :key="val">{{val}}:{{key}}:{{index}}</li> <!--遍历对象-->
      </ul>
      <div v-on:click="">{{text}}</div> <!--vue会判断，如果是dom节点会使用document.addEventListener，如果是vue组件会用$on添加事件-->
      <input type="text" v-model="text"> <!--v-model用在input节点上，自定义组件也可以加v-model支持-->
      <input type="checkbox" v-model="active">
      <div>
        <input type="checkbox" :value="1" v-model="arr">
        <input type="checkbox" :value="2" v-model="arr">
        <input type="checkbox" :value="3" v-model="arr">
        <input type="checkbox" :value="4" v-model="arr">
      </div>
      <div>
        <input type="radio" value="one" v-model="picked">
        <input type="radio" value="two" v-model="picked">
      </div>
      <input type="text" v-model.number="text"> <!--增加修饰符number-->
      <input type="text" v-model.trim="text"> <!--增加修饰符trim-->
      <input type="text" v-model.lazy="text"> <!--增加修饰符lazy，相当于change事件-->
      <div v-pre>Text: {{text}}</div> <!--不解析内容-->
      <div v-cloak>Text: {{text}}</div> <!--在vue代码没有加载完成之前，给标签加display:none，加载完成后vue首先去掉这个样式-->
      <div v-once>Text: {{text}}</div> <!--数据绑定内容只执行一次，多用于静态内容-->
    </div>
  `,
  data: {
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    picked: '',
    text: 0,
    active: true,
    html: '<span>this is html</span>'
  }
})
