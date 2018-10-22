import auth from '../api/auth'
// import config from '../config'
// import shop from '../api'

// initial state
const state = {
  all: [],
  menuList: [{name: '首页', web_route: '/'}, {name: '图表', web_route: '/echarts'}, {name: 'Demo', children: [{name: '表格', web_route: '/tabel'}, {name: 'demo2', web_route: '/demo2'}]}],
  token: '',
  router: [],
  current: {},
  config: {}
}

// getters
const getters = {}
// actions
const actions = {
  getInits ({ commit }, router) {
    const storage = localStorage.getItem('users')
    const getInit = () => {
      // shop.getCurrent(data => {
      //   commit('setCurrent', data)
      // })
      // shop.getConfig(data => {
      //   commit('setConfig', data)
      // })
      // shop.getMenus(data => {
      //   commit('setMenuList', data)
      // })
    }
    if (!storage) {
      const hasCode = location.href.match(/\?code=(.*)/)
      if (hasCode) {
        auth.getToken(token => {
          commit('setToken', token)
          getInit()
        })
      } else {
        router.push('/login')
      }
    } else {
      getInit()
    }
  }
}

// mutations
const mutations = {
  setToken (state, token) {
    localStorage.setItem('AuthToken', `${token.token_type} ${token.access_token}`)
    state.token = token
  },
  setCurrent (state, data) {
    if (data) {
      state.current = data
    }
  },
  setMenuList (state, menuList) {
    if (menuList) {
      const newMenulist = menuList.map(item => {
        const menus = item
        if (!item.parent) {
          const itemMenus = menuList.map(item2 => {
            if (item2.parent === item.name) {
              return item2
            } else {
              return null
            }
          }).filter(item => item != null)
          if (itemMenus.length > 0) {
            menus.children = itemMenus
          }
          return menus
        } else {
          return null
        }
      }).filter(item => item != null)
      state.menuList = newMenulist
    }
  },
  setConfig (state, data) {
    state.config = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
