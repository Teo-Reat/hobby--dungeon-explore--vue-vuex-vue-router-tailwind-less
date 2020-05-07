export default {
  state: {
    gender: {
      male: {
        strength: 6,
        dexterity: 4,
        intelligence: 4
      },
      female: {
        strength: 4,
        dexterity: 6,
        intelligence: 4
      }
    }
  },
  getters: {
    getGender (state) {
      return state.gender
    }
  }
}
