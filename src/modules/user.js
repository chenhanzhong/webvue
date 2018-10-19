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
    user.postUser((data) => commit('setUser', data), options)
  }
}

// mutations
const mutations = {
  setCurrent (state, data) {
    state.user = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
