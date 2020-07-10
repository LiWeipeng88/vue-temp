import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: 'Token',
    global_theme: '#00152a'
  },
  mutations: {
    changeGlobalTheme(state, color) {
      state.global_theme = color
    }
  },
  actions: {
  }
})
