import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/search',
    name: 'search',
    meta:{
      title:'搜索'
    },
    component: () => import('@/views/Search')
  },
  {
    path: '/detail',
    name:'detail',
    meta:{
      title:'详情'
    },
    component: () => import('@/views/Detail')
  },
  {
    path: '/newcar',
    name: 'newcar',
    meta:{
      title:'新车'
    },
    component: () => import('@/views/NewCar')
  },
  {
    path: '/sellcar',
    meta: {
      title:'卖车'
    },
    component: () => import('@/views/SellCar')
  },
  {
    path:'/appnew/:id',
    name: 'appnew',
    component: () => import('@/views/APPNew')
  },
  {
    path: '/fuwu',
    component: () => import('@/views/FuWu'),
    meta:{
      title:'腾发服务'
    },
    children:[
      {
        path:'/fuwu/showone',
        component: () => import('@/views/FuWu/ShowOne'),
      },
      {
        path:'/fuwu/showtwo',
        component: () => import('@/views/FuWu/ShowTwo')
      },{
        path:'/fuwu',
        redirect: '/fuwu/showone'
      }
    ]
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
router.beforeResolve((to,from) =>{
  document.title=to.meta.title
})
export default router
