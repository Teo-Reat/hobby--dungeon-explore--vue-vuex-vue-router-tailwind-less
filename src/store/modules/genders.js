const state = {
  genders: [
    {
      id: 0,
      gender: 'Male',
      description: 'Protons are the planets of the calm friendship.',
      stats: {
        strength: 6,
        dexterity: 4,
        intelligence: 4
      }
    },
    {
      id: 1,
      gender: 'Female',
      description: 'Ship-wide loves lead to the friendship.',
      stats: {
        strength: 4,
        dexterity: 6,
        intelligence: 4
      }
    },
    {
      id: 2,
      gender: 'Reptilian',
      description: 'Dozens of tragedies will be lost in starlight travels like nuclear fluxs in flights',
      stats: {
        strength: 2,
        dexterity: 4,
        intelligence: 8
      }
    }
  ]
}
const getters = {
  getGender (state) {
    return state.genders
  }
}

export default {
  state,
  getters
}
