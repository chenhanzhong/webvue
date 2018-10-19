// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
// router.beforeEach((to, from, next) => {
//   const data = localStorage.getItem('user')
//   console.log(!data, to.path, 888)
//   if (!data && to.path !== '/login') {
//     next({path: '/login'})
//   }
// })

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
