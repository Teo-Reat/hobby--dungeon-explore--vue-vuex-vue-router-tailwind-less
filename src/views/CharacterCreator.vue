<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
      <hr>
    </div>
    <section class="wrapper bg-red-200">
      <div class="character-preview w-1/5 text-right px-4 py-2 bg-red-100">
        <strong>Name: {{ character.name }}</strong>
        <p>Gender: {{ character.gender }}</p>
        <p>Background: {{ character.background }}</p>
        <p>Class: {{ character.class }}</p>
        <ul>
          <li v-for="(value, stat, index) in character.stats" :key="index">{{ stat }}: {{ value }}</li>
        </ul>
      </div>
      <hr>
      <div class="character-create w-3/5 text-left px-4 py-2 text-center bg-blue-100 mb-2">
        <div class="bg-green-100">
          <label class="mb-2 block">
            <input v-model="character.name"
                   type="text"
                   placeholder="Enter your name here"
                   class="py-1 px-4 block w-2/3 mx-auto">
          </label>
        </div>
        <section class="stats flex justify-between">
          <div class="bg-green-100 mb-2 w-1/3">
            <label v-for="type in getGender"
                   :key="type.id"
                   :class="{ active: character.gender === type.gender }"
                   class="py-2 px-4 block"> {{ type.gender }}
              <input type="radio"
                     :value="type.gender"
                     v-model="character.gender"
                     @change="setStats(type, type.stats)">
            </label>
          </div>
          <div class="bg-green-100 mb-2 w-1/3">
            <label v-for="type in getBackground"
                   :key="type.id"
                   :class="{ active: character.background === type.background }"
                   class="py-2 px-4 block"> {{ type.background }}
              <input type="radio"
                     :value="type.background"
                     v-model="character.background"
                     @change="setStats(type, type.stats)">
            </label>
          </div>
          <div class="bg-green-100 mb-2 w-1/3">
            <label v-for="type in getClass"
                   :key="type.id"
                   :class="{ active: character.class === type.class }"
                   class="py-2 px-4 block"> {{ type.class }}
              <input type="radio"
                     :value="type.class"
                     v-model="character.class"
                     @change="setStats(type, type.stats)">
            </label>
          </div>
        </section>
      </div>
      <div class="temporary-condition w-1/5">
        <div>{{ characterState.setGender }}</div>
        <div>{{ characterState.setBackground }}</div>
        <div>{{ characterState.setClass }}</div>
        <div><button @click="setStats">Set</button></div>
      </div>
    </section>
    <router-link to="/game">Start game</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      characterState: {
        setGender: {
          strength: 0,
          dexterity: 0,
          intelligence: 0
        },
        setBackground: {
          strength: 0,
          dexterity: 0,
          intelligence: 0
        },
        setClass: {
          strength: 0,
          dexterity: 0,
          intelligence: 0
        }
      },
      character: {
        name: 'John Wick',
        gender: '',
        background: '',
        class: '',
        stats: {
          strength: 0,
          dexterity: 0,
          intelligence: 0
        }
      }
    }
  },
  mounted () {
    this.character = this.getCharacter
  },
  computed: {
    setName: {
      get () {
        return this.getCharacter.name
      },
      set (value) {
        this.$store.commit('updateName', value)
      }
    },
    ...mapGetters(['getCharacter', 'getGender', 'getClass', 'getBackground'])
  },
  methods: {
    setStats (obj, stat) {
      if (Object.prototype.hasOwnProperty.call(obj, 'gender')) {
        this.characterState.setGender = stat
      } else if (Object.prototype.hasOwnProperty.call(obj, 'background')) {
        this.characterState.setBackground = stat
      } else if (Object.prototype.hasOwnProperty.call(obj, 'class')) {
        this.characterState.setClass = stat
      } else {
        console.log('Oh my fucking god! Something went wrong!')
      }
      this.character.stats.strength = this.characterState.setGender.strength + this.characterState.setBackground.strength + this.characterState.setClass.strength
      this.character.stats.dexterity = this.characterState.setGender.dexterity + this.characterState.setBackground.dexterity + this.characterState.setClass.dexterity
      this.character.stats.intelligence = this.characterState.setGender.intelligence + this.characterState.setBackground.intelligence + this.characterState.setClass.intelligence
    }
  }
}
</script>

<style>
  input { display:none; }
  .character-preview {}
  .character-create {}
  .active {
    background: lightcoral;
  }
</style>
