const state = {
  character: {
    name: 'John Doe',
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
  copyCharacterToStore (state, value) {
    for (let i = 0; i < Object.values(value).length; i++) {
      if (Object.values(value)[i] === '') {
        alert('Set property')
        break
      } else {
        state.character = value
      }
    }
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
