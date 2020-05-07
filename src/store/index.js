import Vue from 'vue'
import Vuex from 'vuex'
import rooms from './modules/rooms'
import character from './modules/character'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    rooms,
    character
  }
})
