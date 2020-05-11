const state = {
  classes: [
    {
      id: 0,
      class: 'Fighter',
      stats: {
        strength: 6,
        dexterity: 4,
        intelligence: 2
      }
    },
    {
      id: 1,
      class: 'Thief',
      stats: {
        strength: 4,
        dexterity: 6,
        intelligence: 2
      }
    },
    {
      id: 2,
      class: 'Sage',
      stats: {
        strength: 4,
        dexterity: 2,
        intelligence: 6
      }
    }
  ]
}
const getters = {
  getClass (state) {
    return state.classes
  }
}

export default {
  state,
  getters
}
