export default {
  state: {
    backgrounds: [
      {
        id: 0,
        background: 'Noble',
        stats: {
          strength: 0,
          dexterity: 1,
          intelligence: 3
        }
      },
      {
        id: 1,
        background: 'Farmer',
        stats: {
          strength: 3,
          dexterity: 1,
          intelligence: 0
        }
      },
      {
        id: 2,
        background: 'Poacher',
        stats: {
          strength: 0,
          dexterity: 3,
          intelligence: 1
        }
      },
      {
        id: 3,
        background: 'Trader',
        stats: {
          strength: 0,
          dexterity: 0,
          intelligence: 4
        }
      }
    ]
  },
  getters: {
    getBackground (state) {
      return state.backgrounds
    }
  }
}
