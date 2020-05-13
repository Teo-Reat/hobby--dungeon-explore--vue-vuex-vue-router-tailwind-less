export default {
  state: {
    backgrounds: [
      {
        id: 0,
        background: 'Noble',
        description: 'Chicken platter has to have a hardened, roasted chickpeas component.',
        stats: {
          strength: 0,
          dexterity: 1,
          intelligence: 3
        }
      },
      {
        id: 1,
        background: 'Farmer',
        description: 'White bread combines greatly with packaged cauliflower.',
        stats: {
          strength: 3,
          dexterity: 1,
          intelligence: 0
        }
      },
      {
        id: 2,
        background: 'Poacher',
        description: 'When fluffing bitter turkey, be sure they are room temperature.',
        stats: {
          strength: 0,
          dexterity: 3,
          intelligence: 1
        }
      },
      {
        id: 3,
        background: 'Mystic',
        description: 'For a niffy minced paste, add some white wine and cayenne pepper.',
        stats: {
          strength: 1,
          dexterity: 0,
          intelligence: 3
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
