<template>
  <div>
    <h1>状态更新</h1>
    hello vue -{{ myname }}
    <button @click="handleClick">click</button>
    <h1>todo</h1>
    <input type="text" v-model="mytext" />
    <button @click="handleAdd()">add</button>
    <ul>
      <li v-for="data in datalist" :key="data">{{ data }}</li>
    </ul>

    <h1>抽屉</h1>
    <navbar @myevent="handleEvent">
      <button @click="isShow = !isShow">slot-button</button>
    </navbar>
    <sidebar v-show="isShow"></sidebar>

    <!-- <component :is="home"/>
    <home v-show="which==='home'"></home>
    <list v-show="which==='list'"></list>
    <shopcar v-show="which==='shopcar'"></shopcar> -->
  </div>
</template>

<script>
import navbar from './components/Navbar'
import sidebar from './components/Sidebar'
// 这一步只是把template的部分给导入进来了，还需要注册一下组件
import Vue from 'vue'
// 模块化的规范是在哪里用，就要在哪里引入
Vue.component('navbar', navbar) // 注册全局组件

// ES6 模块导出
export default {
  data () {
    return {
      myname: 'dwadwa',
      mytext: 'df',
      datalist: [],
      isShow: false
    }
  },
  components: {
    sidebar // 局部注册组件
  },
  methods: {
    handleClick () {
      this.myname = '我是一个点击事件'
    },
    handleAdd () {
      console.log(this.mytext)
      this.datalist.push(this.mytext)
    },
    handleEvent () {
      this.isShow = !this.isShow
    }
  }
}

</script>

<style>
  li {
    list-style: none;
  }
  /* * {
    margin: 0;
    padding: 0;
  } */

  html,
  body {
    height: 100%;
  }
</style>
