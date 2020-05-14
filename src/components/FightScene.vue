<template>
    <section>
      <div class="wrapper">
        <character-preview :character="character" />
        <character-preview :character="enemy" />
      </div>
      <button @click="calculateCharacterState(enemy, enemy.stats)" v-if="!enemy.state.criticalStrikeChance">Fight!</button>
      <div class="combat-options" v-else>
        <button @click="fastPunch">Fast punch</button>
        <button @click="heavyKick">Heavy kick</button>
<!--        <button @click="Test</button>-->
<!--        <button @click="">Block</button>-->
      </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { calculateCharacterStats } from './mixins/calculateCharacterStats'
import { calculateCharacterState } from './mixins/calculateCharacterState'
import { getRandomInteger } from './mixins/getRandomInteger'
import CharacterPreview from './interfaces/CharacterPreview'

export default {
  components: {
    CharacterPreview
  },
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
        },
        state: {
          healthPoints: 0,
          basicDamage: 0,
          evasionChance: 0,
          criticalStrikeChance: 0
        }
      }
    }
  },
  mixins: [calculateCharacterStats, calculateCharacterState, getRandomInteger],
  async mounted () {
    this.character = this.getCharacter
    this.calculateCharacterStats(this.enemy)
  },
  computed: {
    setHealth: {
      get () {
        return this.character.state.healthPoints
      },
      set (value) {
        this.$store.commit('updateHealth', value)
      }
    },
    ...mapGetters(['getCharacter'])
  },
  methods: {
    fastPunch () {
      if (this.enemy.state.evasionChance < getRandomInteger.methods.getRandomInteger(0, 99)) {
        if (this.character.state.criticalStrikeChance > getRandomInteger.methods.getRandomInteger(0, 99)) {
          this.enemy.state.healthPoints -= this.character.state.basicDamage * 2
          console.log('Critical hit!!!')
        } else {
          this.enemy.state.healthPoints -= this.character.state.basicDamage
          console.log('Hit')
        }
      } else {
        console.log('You miss!')
      }
    },
    fastPunchAI () {
      if (this.character.state.evasionChance < getRandomInteger.methods.getRandomInteger(0, 99)) {
        if (this.enemy.state.criticalStrikeChance > getRandomInteger.methods.getRandomInteger(0, 99)) {
          this.character.state.healthPoints -= this.enemy.state.basicDamage * 2
        } else {
          this.character.state.healthPoints -= this.enemy.state.basicDamage
        }
      }
    },
    heavyKick () {
      const evasion = this.enemy.state.evasionChance * 2
      const critical = this.character.state.criticalStrikeChance
      const damage = this.character.state.basicDamage
      const eRandom = getRandomInteger.methods.getRandomInteger(0, 99)
      const cRandom = getRandomInteger.methods.getRandomInteger(0, 99)
      if (evasion < eRandom) {
        if (critical > cRandom) {
          this.enemy.state.healthPoints -= damage * 4
          console.log(`Evasion = ${evasion} / ${eRandom} and you hit target on ${damage * 4}. Critical hit = ${critical} / ${cRandom}`)
        } else {
          this.enemy.state.healthPoints -= damage * 2
          console.log(`Evasion = ${evasion} / ${eRandom} and you hit target on ${damage * 2}. Hit = ${critical} / ${cRandom}`)
        }
      } else {
        console.log(`Evasion range from 0 to ${evasion}, you throw ${eRandom} and target evade from your attack.`)
      }
      this.fastPunchAI()
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
