<template>
    <section>
      <div class="wrapper">
        <character-preview :character="character" />
        <character-preview :character="enemy" />
      </div>
      <div class="combat-options">
        <button @click="fastPunch">Fast punch</button>
<!--        <button @click="">Heavy kick</button>-->
<!--        <button @click="">Flee!</button>-->
<!--        <button @click="">Block</button>-->
      </div>

      <button @click="calculateCharacterStats(enemy)">Calculate stats</button>
      <button @click="calculateCharacterState(enemy, enemy.stats)">Calculate enemy state</button>
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
    ...mapGetters(['getCharacter'])
  },
  methods: {
    fastPunch () {
      console.log(getRandomInteger.methods.getRandomInteger(0, 99))
      this.enemy.state.healthPoints -= this.character.state.basicDamage
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
