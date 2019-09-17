import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import sign from '@/page/sign'
import register from '@/page/register'
import login from '@/page/login'
import candy from '@/page/candy'
import tabBar from '@/components/tabBar'
import my from '@/page/my'
import car from '@/page/car'
import forget from '@/page/forget'
import setting from '@/page/setting'

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
  ]
})
