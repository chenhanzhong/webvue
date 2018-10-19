import auth from '../api/auth'
import config from '../config'
import shop from '../api'

// initial state
const state = {
  all: [],
  menuList: [],
  token: '',
  router: [],
  current: {},
  config: {}
}

// getters
const getters = {}
// actions
const actions = {
  getAllProducts ({ commit }) {
    const storage = localStorage.getItem('AuthToken')
    const getInit = () => {
      shop.getCurrent(data => {
        commit('setCurrent', data)
      })
      shop.getConfig(data => {
        commit('setConfig', data)
      })
      shop.getMenus(data => {
        commit('setMenuList', data)
      })
    }
    if (!storage) {
      const hasCode = location.href.match(/\?code=(.*)/)
      if (hasCode) {
        auth.getToken(token => {
          commit('setToken', token)
          getInit()
        })
      } else {
        window.location.href = config['sso']
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
    state.current = data
  },
  setMenuList (state, menuList) {
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
  },
  setConfig (state, data) {
    state.config = data
  },
  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
