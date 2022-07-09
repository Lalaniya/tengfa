import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/Search')
  },
  {
    path: '/detail',
    name:'detail',
    component: () => import('@/views/Detail')
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
