import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login/index'
import Home from '@/Home/index'
import Layout from '@/Layout/index'
import Tabel from '@/pages/Tabels/index'
import Form from '@/pages/Form/index'
import Echarts from '@/pages/Echart/index'
import Split from '@/pages/Split/index'
import iView from 'iview'// 导入组件库
// import Split from '@/pages/Split/index'
import VueParticles from 'vue-particles'

import 'iview/dist/styles/iview.css'// 导入样式

Vue.use(Router)
Vue.use(iView)
Vue.use(VueParticles)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'Home',
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
          name: '图表',
          component: Echarts
        },
        {
          path: '/form',
          name: '信息编辑',
          component: Form
        }
      ]
    },
    {
      path: '/split',
      name: '文档',
      component: Split
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    }
  ]
})
