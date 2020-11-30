import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film.vue'
import Cinema from '../views/Cinema.vue'
import Center from '../views/Center.vue'
Vue.use(VueRouter) // 注册模块

const routes = [
  {
    path: '/film',
    component: Film
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  }
]

const router = new VueRouter({
  routes
})

export default router
