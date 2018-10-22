// import auth from '../../api/auth'
// import config from '../../config'
import user from '../api/user'

// initial state
const state = {
  users: []
}

// getters
const getters = {}
// actions
const actions = {
  getAuth ({commit}, options) {
    user.postUser((data) => commit('setUser', {data, router: options.router}), {...options.data})
  }
}

// mutations
const mutations = {
  setUser (state, options) {
    // console.log(router, 77777)
    const { router, data } = options
    localStorage.setItem('users', data)
    state.user = data
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
