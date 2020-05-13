export const calculateCharacterState = {
  methods: {
    calculateCharacterState: function (character, stats) {
      const statsObject = {}
      statsObject.healthPoints = Math.round(stats.strength * 4 + stats.intelligence / 4 + 20)
      statsObject.basicDamage = Math.round(stats.strength / 2 + stats.dexterity / 4 + stats.intelligence / 8)
      statsObject.evasionChance = Math.round(stats.dexterity * 2 + stats.intelligence / 4)
      statsObject.criticalStrikeChance = Math.round(stats.dexterity / 2 + stats.intelligence * 2)
      character.state = statsObject
    }
  }
}
