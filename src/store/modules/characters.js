const state = {
  characters: [
    {
      id: 0,
      name: 'Jane Doe',
      gender: 'Female',
      background: 'Noble',
      class: 'Fighter'
    }
  ]
}
const getters = {
  getCharacterById: state => id => {
    return state.characters.find(char => char.id === id)
  }
}
const mutations = {

}
const actions = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
