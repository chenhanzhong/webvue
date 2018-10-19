import collect from '../api/collect'

// initial state
const state = {
  list: [],
  loading: true
}

// getters
const getters = {}
// actions
const actions = {
  getList ({ commit }) {
    commit('setInit')
    collect.getList(data => {
      commit('setList', data)
    })
  }
}

// mutations
const mutations = {
  setList (state, data) {
    state.list = data
    state.loading = false
  },
  setInit (state) {
    state.loading = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
