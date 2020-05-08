export default {
  state: {
    classes: [
      {
        id: 0,
        name: 'Rhino',
        stats: {
          strength: 6,
          dexterity: 4,
          intelligence: 2
        }
      },
      {
        id: 1,
        name: 'Cat',
        stats: {
          strength: 4,
          dexterity: 6,
          intelligence: 2
        }
      },
      {
        id: 2,
        name: 'Owl',
        stats: {
          strength: 4,
          dexterity: 2,
          intelligence: 6
        }
      }
    ]
  },
  getters: {
    getClass (state) {
      return state.classes
    }
  }
}
