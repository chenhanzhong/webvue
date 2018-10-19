import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/Home/index'
import Collect from '@/Collect/index'
import Login from '@/pages/Login/index'
import iView from 'iview'// 导入组件库
import Layout from '@/Layout/index'
import 'iview/dist/styles/iview.css'// 导入样式

Vue.use(Router)
Vue.use(iView)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Layout,
      children: [
        {
          path: '/collect',
          name: '汇总概览',
          component: Collect
        },
        {
          path: '/report',
          name: '出勤明细',
          component: Collect
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    }
  ]
})
