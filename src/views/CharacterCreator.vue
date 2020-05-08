<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
      <hr>
    </div>
    <section class="wrapper">
      <div class="character-preview w-1/3 text-right px-4 py-2">
        <strong>Name: {{ character.name }}</strong>
        <p>Gender: {{ character.gender }}</p>
        <p>Background: {{ character.background }}</p>
        <p>Class: {{ character.class }}</p>
        <ul>
          <li v-for="(value, stat, index) in character.stats" :key="index">{{ stat }}: {{ value }}</li>
        </ul>
      </div>
      <hr>
      <div class="character-create w-2/3 text-left px-4 py-2">
        <div>
          <label class="mb-2 block">
            <input v-model="character.name" type="text" placeholder="Enter your name here" class="py-1 px-4 block">
          </label>
        </div>
        <div>
          <label v-for="stat in getGender"
                 :key="stat.id" class="py-2 px-4 block"> {{ stat.gender }}
            <input type="radio" :value="stat.gender" v-model="character.gender" @change="character.stats = stat.stats">
          </label>
        </div>
        <div>
          <label v-for="stat in getClass"
                 :key="stat.id" class="py-2 px-4 block"> {{ stat.name }}
            <input type="radio" :value="stat.name" v-model="character.class" @change="character.stats = stat.stats">
          </label>
        </div>
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
    // this.character.stats = this.getGender.id
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
    setGender: {
      get () {
        return this.getCharacter.gender
      },
      set (value) {
        this.$store.commit('updateGender', value)
      }
    },
    ...mapGetters(['getCharacter', 'getGender', 'getClass'])
  },
  methods: {
  }
}
</script>

<style>
  .character-preview {}
  .character-create {}
</style>
