import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
  /* render:function(callback){
    return callback(App)
  } */
}).$mount('#app')
// new Vue({el:"#box"})