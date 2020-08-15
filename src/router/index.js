import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts')
  },
  {
    path: '/prices',
    name: 'Prices',
    component: () => import('../views/Prices')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
