import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home/index'
import Tabel from '@/pages/Tabels/index'
import Login from '@/pages/Login/index'
import iView from 'iview'// 导入组件库
import Layout from '@/Layout/index'
import Echarts from '@/pages/Echart/index'

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
          path: '/',
          // name: 'Home',
          component: Home
        },
        {
          path: '/tabel',
          name: '表格',
          component: Tabel
        },
        {
          path: '/echarts',
          name: '出勤明细',
          component: Echarts
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
