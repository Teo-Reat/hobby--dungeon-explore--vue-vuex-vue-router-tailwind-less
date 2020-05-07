<template>
  <div>
    <div>
      <label>
        <input v-model="characterName" type="text" placeholder="Enter your name here">
      </label>
    </div>
    <div>
      <strong>Name: {{ getCharacterStats.name }}</strong>
      <p>Gender: {{ getCharacterStats.gender }}</p>
      <p>Background: {{ getCharacterStats.background }}</p>
      <p>Class: {{ getCharacterStats.class }}</p>
      <ul>
        <li v-for="(value, stat, index) in getCharacterStats.stats" :key="index">{{ stat }}: {{ value }}</li>
      </ul>
    </div>
    <router-link to="/game">Start game</router-link>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      // name: 'John Wick'
    }
  },
  computed: {
    characterName: {
      get () {
        return this.$store.state.character.name
      },
      set (value) {
        this.$store.commit('updateName', value)
      }
    },
    ...mapGetters(['getCharacterStats']),
    ...mapMutations(['updateName'])
  }
}
</script>
