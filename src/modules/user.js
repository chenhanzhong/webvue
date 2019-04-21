// import auth from '../../api/auth'
// import config from '../../config'
import user from '../api/user'

// initial state
const state = {
  // users: []
  token: '',
  data: {}
}

// getters
const getters = {}
// actions
const actions = {
  getUser ({commit}, options) {
    const {url, data} = options
    user.postUser((token) => {
      commit('setUser', token)
      console.log(111122)
      user.getAuth((res) => {
        commit('setAuth', {res, options})
      }, token)
    }, {url, data})
  }
}

// mutations
const mutations = {
  setUser (state, token) {
    localStorage.setItem('token', JSON.stringify(token))
    state.token = token
  },
  setAuth (state, {res, options}) {
    // console.log(token, state, 80, options, 77777)
    const { router, message } = options
    message.success('登录成功')
    state.data = res
    router.push('/')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
