import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/', // 嵌套路由里默认路由
        redirect: '/page1'
      },
      {
        path: '/page1',
        name: 'Page1',
        component: () => import('../components/Page1')
      },
      {
        path: '/page2',
        name: 'Page2',
        component: () => import('../components/Page2')
      }
    ]
  },
  {
    path: '/*', // 注意，这里不是嵌套路由了，这是为了设置404页面，一定要放在最后面，这样当服务器找不到页面的时候就会全部跳转到404
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
