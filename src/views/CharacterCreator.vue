<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
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
    <div>
      <label >{{ name }}
        <input type="radio" :value="name" name="gender" v-model="genderStats">
      </label>
    </div>
    <router-link to="/game">Start game</router-link>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      genderStats: {}
    }
  },
  computed: {
    characterName: {
      get () {
        return this.getCharacterStats.name
      },
      set (value) {
        this.$store.commit('updateName', value)
      }
    },
    ...mapGetters(['getCharacterStats', 'getGender']),
    ...mapMutations(['updateName'])
  },
  methods: {
    // setGender () {
    //   this.genderStats =
    // }
  }
}
</script>
