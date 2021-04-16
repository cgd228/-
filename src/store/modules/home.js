import api from '@/http'

export default {
  state: {
    homeInfo: []
  },
  mutations: {
    GET_INFO(state, info) {
      state.homeInfo = info
    }
  },
  actions: {
    getHomeInfo({ commit }) {
      return new Promise((resolve, reject) => {
        api
          .homeInfo()
          .then(res => {
            commit('GET_INFO', res.result)
            resolve
          })
          .catch(() => {
            commit('GET_INFO', [])
            reject()
          })
      })
    }
  },
  getters: {},
  namespaced: true
}
