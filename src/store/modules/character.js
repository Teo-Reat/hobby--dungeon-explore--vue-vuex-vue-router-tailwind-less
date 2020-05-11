const state = {
  character: {
    name: '',
    gender: '',
    background: '',
    class: '',
    stats: {
      strength: 0,
      dexterity: 0,
      intelligence: 0
    }
  }
}
const getters = {
  getCharacter (state) {
    return state.character
  }
}
const mutations = {
  updateName (state, value) {
    state.character.name = value
  },
  updateGender (state, value) {
    state.character.gender = value
  }
}
const actions = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
