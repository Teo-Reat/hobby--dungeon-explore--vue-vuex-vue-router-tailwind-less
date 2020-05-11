const state = {
  genders: [
    {
      id: 0,
      gender: 'Male',
      stats: {
        strength: 6,
        dexterity: 4,
        intelligence: 4
      }
    },
    {
      id: 1,
      gender: 'Female',
      stats: {
        strength: 4,
        dexterity: 6,
        intelligence: 4
      }
    },
    {
      id: 2,
      gender: 'Reptilian',
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
