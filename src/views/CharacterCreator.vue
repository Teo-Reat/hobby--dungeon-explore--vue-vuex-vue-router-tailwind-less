<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
      <hr>
    </div>
    <section class="wrapper">

<!--      character: preview-->
      <div class="character-preview w-3/12 text-left px-4 py-2">
        <strong>Name: {{ character.name }}</strong>
        <p>Gender: {{ character.gender }}</p>
        <p>Background: {{ character.background }}</p>
        <p>Class: {{ character.class }}</p>
        <ul class="pl-2 mt-2">
          <li v-for="(value, stat, index) in character.stats" :key="index">{{ stat }}: {{ value }}</li>
        </ul>
      </div>

<!--      character: create your starting personage-->
      <div class="character-create w-5/12 text-left px-4 py-2 text-center mb-2">
        <div>
          <label class="mb-4 block">
            <input v-model="character.name"
                   type="text"
                   placeholder="Enter your name here"
                   class="py-1 px-4 block w-2/3 mx-auto text-center bg-blue-600 text-white">
          </label>
        </div>
        <section class="stats flex justify-between">
          <div class="mb-2 w-1/3">
            <label v-for="type in getGender"
                   :key="type.id"
                   :class="{ active: character.gender === type.gender }"
                   class="py-2 px-4 block mx-2"> {{ type.gender }}
              <input type="radio"
                     :value="type.gender"
                     v-model="character.gender"
                     @change="setStats(type, type.stats)">
            </label>
          </div>
          <div class="mb-2 w-1/3">
            <label v-for="type in getBackground"
                   :key="type.id"
                   :class="{ active: character.background === type.background }"
                   class="py-2 px-4 block mx-2"> {{ type.background }}
              <input type="radio"
                     :value="type.background"
                     v-model="character.background"
                     @change="setStats(type, type.stats)">
            </label>
          </div>
          <div class="mb-2 w-1/3">
            <label v-for="type in getClass"
                   :key="type.id"
                   :class="{ active: character.class === type.class }"
                   class="py-2 px-4 block mx-2"> {{ type.class }}
              <input type="radio"
                     :value="type.class"
                     v-model="character.class"
                     @change="setStats(type, type.stats)">
            </label>
          </div>
        </section>
      </div>

<!--      character: dynamic information-->
      <div class="temporary-condition w-4/12 px-4 py-2">
        <div v-show="character.gender" class="mb-2">
          <strong>{{ character.gender }}</strong>
          <p v-for="type in getGender"
             v-show="type.gender === character.gender"
             :key="type.id">{{ type.description }}</p>
          <p>
            Str: {{ characterState.setGender.strength }} /
            Dex: {{ characterState.setGender.dexterity }} /
            Int: {{ characterState.setGender.intelligence }}
          </p>
        </div>
        <div v-show="character.background" class="mb-2">
          <strong>{{ character.background }}</strong>
          <p v-for="type in getBackground" v-show="type.background === character.background" :key="type.id">{{ type.description }}</p>
          <p>
            Str: {{ characterState.setBackground.strength }} /
            Dex: {{ characterState.setBackground.dexterity }} /
            Int: {{ characterState.setBackground.intelligence }}
          </p>
        </div>
        <div v-show="character.class" class="mb-2">
          <strong>{{ character.class }}</strong>
          <p v-for="type in getClass" v-show="type.class === character.class" :key="type.id">{{ type.description }}</p>
          <p>
            Str: {{ characterState.setClass.strength }} /
            Dex: {{ characterState.setClass.dexterity }} /
            Int: {{ characterState.setClass.intelligence }}
          </p>
        </div>
      </div>
    </section>

<!--    character: save & step-->
    <button @click="copyCharacterToStore(character)">Save</button>
    <br>
    <router-link to="/game">Start game</router-link>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

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
    },
    ...mapMutations(['copyCharacterToStore'])
  }
}
</script>

<style>
  input { display:none; }
  .active {
    box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, .2);
  }
</style>
