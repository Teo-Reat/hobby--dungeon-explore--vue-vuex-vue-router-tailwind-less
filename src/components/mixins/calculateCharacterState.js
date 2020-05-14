export const calculateCharacterState = {
  methods: {
    calculateCharacterState: function (character, stats) {
      const statsObject = {}
      statsObject.HP = Math.round(stats.strength * 4 + stats.intelligence / 4 + 20)
      statsObject.damage = Math.round(stats.strength / 2 + stats.dexterity / 4 + stats.intelligence / 8)
      statsObject.evasion = Math.round(stats.dexterity * 2 + stats.intelligence / 4)
      statsObject.critical = Math.round(stats.dexterity / 2 + stats.intelligence * 2)
      character.state = statsObject
    }
  }
}
