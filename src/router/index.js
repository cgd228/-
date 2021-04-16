import Vue from 'vue'
import VueRouter from 'vue-router'
// import Layout from '@/layouts/standardLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      path: '/introduce/main'
    }
  },
  {
    path: '/introduce',
    name: 'Introduce',
    component: () => import(/* webpackChunkName: "home" */ '../layouts/standardLayout'),
    meta: {
      title: '首页',
      needLogin: true
    },
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import(/* webpackChunkName: "home" */ '../views/home')
      },
      {
        path: 'daily',
        name: 'daily',
        component: () => import(/* webpackChunkName: "daily" */ '../views/daily')
      },
      {
        path: 'picture',
        name: 'picture',
        component: () => import(/* webpackChunkName: "picture" */ '../views/picture')
      },
      {
        path: 'person',
        name: 'person',
        component: () => import(/* webpackChunkName: "person" */ '../views/person')
      },
      {
        path: 'share',
        name: 'share',
        component: () => import(/* webpackChunkName: "share" */ '../views/share')
      }
    ]
  }
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import(/* webpackChunkName: "Login" */ '../views/login'),
  //   meta: {
  //     title: '登录',
  //     needLogin: false
  //   }
  // }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
