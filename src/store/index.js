import Vue from 'vue'
import Vuex from 'vuex'
import rooms from './modules/rooms'
import character from './modules/character'
import genders from './modules/genders'
import classes from './modules/classes'
import backgrounds from './modules/backgrounds'

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
    character,
    genders,
    classes,
    backgrounds
  }
})
