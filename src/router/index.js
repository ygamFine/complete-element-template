import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Main from '@/pages/main'

// 首页
import Home from '@/pages/home/home'
// 测试页面
import TestPage from '@/pages/testPage/testPage'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
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
        { path: '/home',name: '首页',component: Home },
        { path: '/test-page',name: '测试页面',component: TestPage }
      ]
    }
  ]
});

export default router;
