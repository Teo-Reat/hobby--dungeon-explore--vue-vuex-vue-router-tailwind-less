export default {
  state: {
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
  },
  getters: {
    getCharacter (state) {
      return state.character
    }
  },
  mutations: {
    updateName (state, value) {
      state.character.name = value
    },
    updateGender (state, value) {
      state.character.gender = value
    }
  },
  actions: {
  }
}
