<template>
    <section>
<!--      <button @click="quickPunch">Quick punch</button>-->
<!--      <button @click="strongKick">Strong kick</button>-->
<!--      <button @click="heal">Heal</button>-->
<!--      <button @click="flee">Flee!</button>-->
      <button @click="calculateCharacterStats(enemy)">Calculate stats</button>
      <button @click="calculateCharacterState(character.stats)">Calculate state</button>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      character: {},
      enemy: {
        name: 'Jane Doe',
        gender: 'Female',
        background: 'Noble',
        class: 'Fighter',
        stats: {
          strength: 0,
          dexterity: 0,
          intelligence: 0
        }
      },
      characterState: {
        // healthPoints: 0,
        // basicDamage: 0,
        // evasionChance: 0,
        // criticalStrikeChance: 0
      }
    }
  },
  mounted () {
    this.character = this.getCharacter
    // this.characterState.healthPoints = Math.round(this.getCharacter.stats.strength * 4 + this.getCharacter.stats.intelligence / 4)
    // this.characterState.basicDamage = Math.round(this.getCharacter.stats.strength / 2 + this.getCharacter.stats.dexterity / 2 + this.getCharacter.stats.intelligence / 4)
    // this.characterState.evasionChance = Math.round(this.getCharacter.stats.dexterity * 2 + this.getCharacter.stats.intelligence / 4)
    // this.characterState.criticalStrikeChance = Math.round(this.getCharacter.stats.dexterity / 2 + this.getCharacter.stats.intelligence)
  },
  computed: {
    ...mapGetters(['getCharacter']),
    clc: (stats) => {
      this.characterState.healthPoints = Math.round(this.getCharacter.stats.strength * 4 + this.getCharacter.stats.intelligence / 4)
      this.characterState.basicDamage = Math.round(this.getCharacter.stats.strength / 2 + this.getCharacter.stats.dexterity / 2 + this.getCharacter.stats.intelligence / 4)
      this.characterState.evasionChance = Math.round(this.getCharacter.stats.dexterity * 2 + this.getCharacter.stats.intelligence / 4)
      this.characterState.criticalStrikeChance = Math.round(this.getCharacter.stats.dexterity / 2 + this.getCharacter.stats.intelligence)
    }
  },
  methods: {
    calculateCharacterStats: function (character) {
      switch (character.gender) {
        case 'Male': character.stats.strength += 6; character.stats.dexterity += 4; character.stats.intelligence += 4; break
        case 'Female': character.stats.strength += 4; character.stats.dexterity += 6; character.stats.intelligence += 4; break
        case 'Reptilian': character.stats.strength += 2; character.stats.dexterity += 4; character.stats.intelligence += 8; break
        default: alert('Error')
      }
    },
    calculateCharacterState: function (stats) {
      console.log(stats)
      const statsObject = {}
      statsObject.healthPoints = Math.round(stats.strength * 4 + stats.intelligence / 4)
      statsObject.basicDamage = Math.round(stats.strength / 2 + stats.dexterity / 2 + stats.intelligence / 4)
      statsObject.evasionChance = Math.round(stats.dexterity * 2 + stats.intelligence / 4)
      statsObject.criticalStrikeChance = Math.round(stats.dexterity / 2 + stats.intelligence)
      this.characterState = statsObject
    }
  }
}
</script>

<style scoped>
button {
  display: inline-block;
  padding: 10px 20px;
  background: lightcoral;
  margin: 10px;
}
</style>
