import Vue from 'vue'
import Router from 'vue-router'

//登录页
import Login from '@/components/pages/Login'

import Demo from '@/components/Demo'




Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      //路由重定向,防止输入任意的路由,会显示一片空白
      path:'*',
      redirect:'/demo'
    },
    {
      path: '/',
      redirect:'/demo'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
    },
    
  ]
})
