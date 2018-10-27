import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Main from '@/pages/main'


import Home from '@/pages/home/home'
import TestPage from '@/pages/testPage/testPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Login'
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/main',
      name: '主页',
      component: Main,
      children: [
        {path: '/home',name: '首页',component: Home},
        {path: '/test-page',name: '测试页面',component: TestPage}
      ]
    }
  ]
})
