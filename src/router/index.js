import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Main from '@/pages/main'

// 首页
import Home from '@/pages/home/home'
// 测试页面
import TestPage from '@/pages/testPage/testPage'
import TestDetails from '@/pages/testPage/testDetails'

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
        {
          path: '/home',
          name: '首页',
          component: Home
        },
        {
          path: '/test-page',
          name: '测试页面',
          component: TestPage
        },
        {
          path: '/test-details',
          name: '测试详情',
          component: TestDetails
        }
      ]
    }
  ]
});


let routeList = [];
// 路由控制
router.beforeEach((toRoute, fromRoute, next) => {
  let index = -1;
  for(let i = 0; i < routeList.length; i++) {
    if(routeList[i].name == toRoute.name) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
  // 如果存在路由列表，则把之后的路由都删掉
    routeList.splice(index + 1, routeList.length - index - 1);
  } else if(toRoute.name != '登录'){
    routeList.push({"name":toRoute.name,"path":toRoute.fullPath});
  }
  toRoute.meta.routeList = routeList;



  // 登录控制逻辑，根据项目不同做修改
  // if (toRoute.name !== "login" && !localStorage.Token) {
  //   next({path: "/login"})
  // } else {
  //   next()
  // }
  next()
})

export default router;
