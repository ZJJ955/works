import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('@/page/home')
const sign = () => import('@/page/sign')
const register = () => import('@/page/register')
const login = () => import('@/page/login')
const candy = () => import('@/page/candy')
const tabBar = () => import('@/components/tabBar')
const my = () => import('@/page/my')
const car = () => import('@/page/car')
const forget = () => import('@/page/forget')
const setting = () => import('@/page/setting')
const details = () => import('@/page/details')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/sign',
      name: 'sign',
      component: sign
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/candy',
      name: 'candy',
      component: candy
    },
    {
      path: '/tabBar',
      name: 'tabBar',
      component: tabBar
    },
    {
      path: '/car',
      name: 'car',
      component: car
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
  ]
})
