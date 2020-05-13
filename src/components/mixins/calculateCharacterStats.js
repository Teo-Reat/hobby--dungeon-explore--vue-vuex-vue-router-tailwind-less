// need optimization
export const calculateCharacterStats = {
  methods: {
    calculateCharacterStats: function (character) {
      switch (character.gender) {
        case 'Male': character.stats.strength += 6; character.stats.dexterity += 4; character.stats.intelligence += 4; break
        case 'Female': character.stats.strength += 4; character.stats.dexterity += 6; character.stats.intelligence += 4; break
        case 'Reptilian': character.stats.strength += 2; character.stats.dexterity += 4; character.stats.intelligence += 8; break
        default: console.log('Oh my fucking god! Something went wrong!')
      }
      switch (character.background) {
        case 'Noble': character.stats.strength += 0; character.stats.dexterity += 3; character.stats.intelligence += 1; break
        case 'Farmer': character.stats.strength += 3; character.stats.dexterity += 1; character.stats.intelligence += 0; break
        case 'Poacher': character.stats.strength += 0; character.stats.dexterity += 3; character.stats.intelligence += 1; break
        case 'Trader': character.stats.strength += 1; character.stats.dexterity += 0; character.stats.intelligence += 3; break
        default: console.log('Oh my fucking god! Something went wrong!')
      }
      switch (character.class) {
        case 'Fighter': character.stats.strength += 6; character.stats.dexterity += 4; character.stats.intelligence += 2; break
        case 'Thief': character.stats.strength += 4; character.stats.dexterity += 6; character.stats.intelligence += 2; break
        case 'Sage': character.stats.strength += 4; character.stats.dexterity += 2; character.stats.intelligence += 6; break
        default: console.log('Oh my fucking god! Something went wrong!')
      }
    }
  }
}
