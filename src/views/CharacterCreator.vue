<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
      <hr>
    </div>
    <section class="wrapper">

<!--      character: preview-->
      <character-preview :character="character" />

<!--      character: create your starting personage-->
      <div class="character-create w-6/12 text-left px-4 py-2 text-center mb-2">
        <div>
          <label class="mb-4 block">
            <input v-model="character.name"
                   type="text"
                   placeholder="Enter your name here"
                   class="py-1 px-4 block w-2/3 mx-auto text-center bg-blue-600 text-white">
          </label>
        </div>
        <section class="stats flex justify-between">
          <div class="mb-2 mx-1 w-1/3 shadow rounded">
            <h2 class="font-black mb-4 mt-2">Gender</h2>
            <label v-for="type in getGender"
                   :key="type.id"
                   :class="{ 'shadow': character.gender === type.gender }"
                   class="py-2 px-4 block mx-2 mb-2"> {{ type.gender }}
              <input type="radio"
                     :value="type.gender"
                     v-model="character.gender"
                     @change="setStats(type, type.stats)">
            </label>
          </div>
          <div class="mb-2 mx-1 w-1/3 shadow rounded">
            <h2 class="font-black mb-4 mt-2">Background</h2>
            <label v-for="type in getBackground"
                   :key="type.id"
                   :class="{ shadow: character.background === type.background }"
                   class="py-2 px-4 block mx-2 mb-2"> {{ type.background }}
              <input type="radio"
                     :value="type.background"
                     v-model="character.background"
                     @change="setStats(type, type.stats)">
            </label>
          </div>
          <div class="mb-2 mx-1 w-1/3 shadow rounded bg">
            <h2 class="font-black mb-4 mt-2">Class</h2>
            <label v-for="type in getClass"
                   :key="type.id"
                   :class="{ 'shadow': character.class === type.class }"
                   class="py-2 px-4 block mx-2 mb-2"> {{ type.class }}
              <input type="radio"
                     :value="type.class"
                     v-model="character.class"
                     @change="setStats(type, type.stats)">
            </label>
          </div>
        </section>
      </div>

<!--      character: dynamic information-->
      <div class="temporary-condition w-3/12 px-4 py-2">
        <div v-show="character.gender" class="mb-2">
          <strong>{{ character.gender }}</strong>
          <p v-for="type in getGender"
             v-show="type.gender === character.gender"
             :key="type.id">{{ type.description }}</p>
          <p>
            Str: {{ intermediateStats.setGender.strength }} /
            Dex: {{ intermediateStats.setGender.dexterity }} /
            Int: {{ intermediateStats.setGender.intelligence }}
          </p>
        </div>
        <div v-show="character.background" class="mb-2">
          <strong>{{ character.background }}</strong>
          <p v-for="type in getBackground" v-show="type.background === character.background" :key="type.id">{{ type.description }}</p>
          <p>
            Str: {{ intermediateStats.setBackground.strength }} /
            Dex: {{ intermediateStats.setBackground.dexterity }} /
            Int: {{ intermediateStats.setBackground.intelligence }}
          </p>
        </div>
        <div v-show="character.class" class="mb-2">
          <strong>{{ character.class }}</strong>
          <p v-for="type in getClass" v-show="type.class === character.class" :key="type.id">{{ type.description }}</p>
          <p>
            Str: {{ intermediateStats.setClass.strength }} /
            Dex: {{ intermediateStats.setClass.dexterity }} /
            Int: {{ intermediateStats.setClass.intelligence }}
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
import { calculateCharacterState } from '../components/mixins/calculateCharacterState'
import CharacterPreview from '../components/interfaces/CharacterPreview'

export default {
  components: {
    CharacterPreview
  },
  data () {
    return {
      intermediateStats: {
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
  mixins: [calculateCharacterState],
  mounted () {
    this.character = this.getCharacter
  },
  computed: {
    ...mapGetters(['getCharacter', 'getGender', 'getClass', 'getBackground'])
  },
  methods: {
    setStats (obj, stat) {
      if (Object.prototype.hasOwnProperty.call(obj, 'gender')) {
        this.intermediateStats.setGender = stat
      } else if (Object.prototype.hasOwnProperty.call(obj, 'background')) {
        this.intermediateStats.setBackground = stat
      } else if (Object.prototype.hasOwnProperty.call(obj, 'class')) {
        this.intermediateStats.setClass = stat
      } else {
        console.log('Oh my fucking god! Something went wrong!')
      }
      this.character.stats.strength = this.intermediateStats.setGender.strength + this.intermediateStats.setBackground.strength + this.intermediateStats.setClass.strength
      this.character.stats.dexterity = this.intermediateStats.setGender.dexterity + this.intermediateStats.setBackground.dexterity + this.intermediateStats.setClass.dexterity
      this.character.stats.intelligence = this.intermediateStats.setGender.intelligence + this.intermediateStats.setBackground.intelligence + this.intermediateStats.setClass.intelligence
      this.calculateCharacterState(this.character, this.character.stats)
    },
    ...mapMutations(['copyCharacterToStore'])
  }
}
</script>

<style>
  input { display:none; }
</style>
