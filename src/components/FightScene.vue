<template>
    <section>
      <div class="wrapper">
        <character-preview :character="character" />
        <div class="overflow-y-scroll w-6/12 h-64" >
          <ul v-if="combat.startBattle">
            <li v-for="(log, index) in combat.logs" :key="index" class="mb-4">{{ log }}</li>
          </ul>
          <button @click="calculateCharacterState(enemy, enemy.stats), combat.startBattle = true" v-else>Fight!</button>
        </div>
        <character-preview :character="enemy" :background="combat.backgroundClass" />
      </div>
      <div class="combat-options" v-show="combat.startBattle">
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
      combat: {
        logs: [],
        round: 1,
        backgroundClass: 'bg-red-200',
        startBattle: false
      }
    }
  },
  mixins: [calculateCharacterStats, calculateCharacterState, getRandomInteger],
  async mounted () {
    this.character = { ...this.getCharacter }
    this.enemy = { ...this.persons[0] }
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
      const evasion = this.enemy.state.evasion
      const critical = this.character.state.critical
      const damage = this.character.state.damage
      const eRandom = getRandomInteger.methods.getRandomInteger(0, 99)
      const cRandom = getRandomInteger.methods.getRandomInteger(0, 99)
      if (evasion < eRandom) {
        if (critical > cRandom) {
          this.enemy.state.HP -= damage * 2
          this.combat.logs.unshift(`Critical hit! You hit target on ${damage * 2}.`)
        } else {
          this.enemy.state.HP -= damage
          this.combat.logs.unshift(`You hit the target on ${damage}.`)
        }
      } else {
        this.combat.logs.unshift('Target evade from your attack.')
      }
      this.fastPunchAI()
      if (this.character.state.HP <= 0 && this.enemy.state.HP <= 0) {
        this.combat.logs.unshift('Two cold corpses...')
      } else if (this.character.state.HP < 0) {
        this.combat.logs.unshift('You dead...')
      } else if (this.enemy.state.HP < 0) {
        this.combat.logs.unshift('You win this battle, congratulations!')
      }
    },
    fastPunchAI () {
      const characterHP = this.character.state.HP
      if (this.character.state.evasion < getRandomInteger.methods.getRandomInteger(0, 99)) {
        if (this.enemy.state.critical > getRandomInteger.methods.getRandomInteger(0, 99)) {
          this.character.state.HP -= this.enemy.state.damage * 2
          this.combat.logs.unshift('Critical hit! Enemy hit you ' + (characterHP - this.character.state.HP) + ' damage.')
        } else {
          this.character.state.HP -= this.enemy.state.damage
          this.combat.logs.unshift('Enemy hit you ' + (characterHP - this.character.state.HP) + ' damage.')
        }
      } else {
        this.combat.logs.unshift('You evade from enemy\'s attack')
      }
      this.combat.logs.unshift({ round: 'Round ' + this.combat.round++ })
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
          this.combat.logs.unshift(`Critical hit! You hit target on ${damage * 4}.`)
        } else {
          this.enemy.state.HP -= damage * 2
          this.combat.logs.unshift(`You hit the target on ${damage * 2}.`)
        }
      } else {
        this.combat.logs.unshift('Target evade from your attack.')
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
