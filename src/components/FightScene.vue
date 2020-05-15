<template>
    <section>
      <div class="wrapper">
        <character-preview :character="character" />
        <div class="overflow-y-scroll w-6/12 h-64">
          <ul>
            <li v-for="(log, index) in logs" :key="index" class="mb-4">{{ log }}</li>
          </ul>
        </div>
        <character-preview :character="enemy" />
      </div>
      <button @click="calculateCharacterState(enemy, enemy.stats)" v-if="!enemy.state.HP">Fight!</button>
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
  props: {
    persons: {
      type: Array,
      required: false
    }
  },
  components: {
    CharacterPreview
  },
  data () {
    return {
      character: {},
      enemy: {},
      logs: []
    }
  },
  mixins: [calculateCharacterStats, calculateCharacterState, getRandomInteger],
  async mounted () {
    this.character = this.getCharacter
    this.enemy = this.persons[0]
  },
  computed: {
    setHealth: {
      get () {
        return this.character.state.HP
      },
      set (value) {
        this.$store.commit('updateHealth', value)
      }
    },
    ...mapGetters(['getCharacter'])
  },
  methods: {
    fastPunch () {
      if (this.enemy.state.evasion < getRandomInteger.methods.getRandomInteger(0, 99)) {
        if (this.character.state.critical > getRandomInteger.methods.getRandomInteger(0, 99)) {
          this.enemy.state.HP -= this.character.state.damage * 2
          this.log.unshift('')
          console.log('Critical hit!!!')
        } else {
          this.enemy.state.HP -= this.character.state.damage
          console.log('Hit')
        }
      } else {
        console.log('You miss!')
      }
    },
    fastPunchAI () {
      if (this.character.state.evasion < getRandomInteger.methods.getRandomInteger(0, 99)) {
        if (this.enemy.state.critical > getRandomInteger.methods.getRandomInteger(0, 99)) {
          this.character.state.HP -= this.enemy.state.damage * 2
        } else {
          this.character.state.HP -= this.enemy.state.damage
        }
      }
    },
    heavyKick () {
      const evasion = this.enemy.state.evasion * 2
      const critical = this.character.state.critical
      const damage = this.character.state.damage
      const eRandom = getRandomInteger.methods.getRandomInteger(0, 99)
      const cRandom = getRandomInteger.methods.getRandomInteger(0, 99)
      if (evasion < eRandom) {
        if (critical > cRandom) {
          this.enemy.state.HP -= damage * 4
          this.logs.unshift(`Critical hit! Chance 0 - ${critical}, you throw ${cRandom} and you hit target on ${damage * 4}. `)
        } else {
          this.enemy.state.HP -= damage * 2
          this.logs.unshift(`You hit the target on ${damage * 2}.`)
        }
      } else {
        this.logs.unshift('Target evade from your attack.')
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
  color: white;
  border-radius: 5px;
}
</style>
