import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Main from '@/pages/main'

// 首页
import Home from '@/pages/home/home'
// 富文本编辑器
import RichText from '@/pages/richText/richText'
// 测试页面
import TestPage from '@/pages/testPage/testPage'
// 测试页面详情
import TestDetails from '@/pages/testPage/testDetails'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'login',
      ishide: true
    },
    {
      path: '/login',
      name: '登录',
      component: Login,
      ishide: true
    },
    {
      path: '/main',
      name: '首页',
      component: Main,
      icon:'el-icon-lx-home',
      leaf: true,
      children: [
        {
          path: '/home',
          name: '首页',
          component: Home,
          meta: [
            {'path': '/home','name': '首页'}
          ]
        },
        {
          path: '/test-details',
          name: '测试详情',
          component: TestDetails,
          meta: [
            {'path':'/home','name':'首页'},
            {'path': '/test-details','name': '测试详情'}
          ],
          ishide: true
        }
      ]
    },{
      path: '/main',
      name: '外部工具',
      component: Main,
      icon: 'el-icon-lx-goods',
      children: [
        {
          path: '/rich-text',
          name: '富文本编辑器',
          meta: [
            {'path': '/rich-text','name': '富文本编辑器'}
          ],
          component: RichText
        }
      ]
    },{
      path: '/main',
      name: '导航二',
      component: Main,
      icon: 'el-icon-lx-settings',
      children: [
        {
          path: '/test-page',
          name: '测试页面',
          meta: [
            {'path': '/test-page',
            'name': '测试页面'}
          ],
          component: TestPage
        }
      ]
    }
  ]
});


// 路由控制
router.beforeEach((toRoute, fromRoute, next) => {

  // console.log(fromRoute);
  // 登录控制逻辑，根据项目不同做修改
  // if (toRoute.name !== "login" && !localStorage.Token) {
  //   next({path: "/login"})
  // } else {
  //   next()
  // }
  next()
})

export default router;
