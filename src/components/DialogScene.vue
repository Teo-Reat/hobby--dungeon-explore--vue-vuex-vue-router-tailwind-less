<template>
    <section>
        <div class="w-5/12 ml-auto py-2 px-4 rounded mb-4 bg-yellow-200">
          <strong class="font-black text-3xl">{{ situation.location }}</strong>
          <p class="text-xs">{{ situation.description }}</p>
        </div>
      <div class="wrapper">
        <character-preview :character="character" />
        <div class="w-1/2">
          <h3 class="text-xl ml-auto font-bold w-2/3 text-left px-4 py-2 my-4 bg-red-200 block rounded">
            {{ situation.dialogs[counter].description }}
          </h3>
          <ul class="text-left bg-blue-200 w-2/3 px-4 py-2 rounded mr-auto">
            <li v-for="option in situation.dialogs[counter].options.common"
                @click="setDialog(option.goTo)"
                :key="option.option">
              {{ option.option }}
            </li>
            <li v-for="option in situation.dialogs[counter].options.noble"
                :key="option.option"
                v-show="character.background === 'Noble'">
              {{ option.option }} {{ [character.background] }}
            </li>
            <li v-for="option in situation.dialogs[counter].options.sage"
                :key="option.option"
                v-show="character.class === 'Sage'">
              {{ option.option }} {{ [character.class] }}
            </li>
          </ul>
        </div>
        <character-preview :character="persons[0]" />
      </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import CharacterPreview from './interfaces/CharacterPreview'
import { calculateCharacterStats } from './mixins/calculateCharacterStats'
// import { calculateCharacterState } from './mixins/calculateCharacterState'

export default {
  props: {
    situation: {
      type: Object,
      required: true
    },
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
      counter: 0,
      character: {}
    }
  },
  async mounted () {
    this.character = this.getCharacter
    this.calculateCharacterStats(this.persons[0])
  },
  mixins: [calculateCharacterStats],
  computed: {
    ...mapGetters(['getCharacter'])
  },
  methods: {
    setDialog (number) {
      this.counter = number
    }
  }
}
</script>

<style scoped>
  li {
    cursor: pointer;
    margin-bottom: 10px;
  }
</style>
