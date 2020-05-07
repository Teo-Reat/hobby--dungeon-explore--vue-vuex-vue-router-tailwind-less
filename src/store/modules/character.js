export default {
  state: {
    character: {
      name: '',
      gender: '',
      background: '',
      class: '',
      stats: {
        Strength: 0,
        Dexterity: 0,
        Intelligence: 0
      }
    }
  },
  getters: {
    getCharacterStats (state) {
      return state.character
    }
  },
  mutations: {
    updateName (state, value) {
      console.log(value)
      state.character.name = value
    }
  },
  actions: {
  }
}
