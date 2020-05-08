export default {
  state: {
    backgrounds: {
      noble: {
        strength: 0,
        dexterity: 1,
        intelligence: 1
      },
      farmer: {
        strength: 2,
        dexterity: 0,
        intelligence: 0
      },
      poacher: {
        strength: 0,
        dexterity: 2,
        intelligence: 0
      },
      trader: {
        strength: 0,
        dexterity: 0,
        intelligence: 2
      }
    }
  },
  getters: {
    getBackground (state) {
      return state.backgrounds
    }
  }
}
