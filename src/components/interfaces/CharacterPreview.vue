<template>
  <div :class="background" class="character-preview w-3/12 text-left px-4 py-2 mx-3 rounded character-preview">
    <strong>Name: {{ character.name }}</strong>
    <p>Gender: {{ character.gender }}</p>
    <p>Background: {{ character.background }}</p>
    <p>Class: {{ character.class }}</p>
    <ul class="pl-2 mt-8">
      <li v-for="(value, stat, index) in character.stats" :key="index" v-show="value">{{ stat }}: {{ value }}</li>
    </ul>
    <ul class="pl-2 mt-4" v-show="character.hasOwnProperty('state')">
      <li v-for="(value, stat, index) in character.state" :key="index" v-show="value">{{ stat }}: {{ value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    },
    background: {
      type: String,
      required: false,
      default: 'bg-green-200'
    }
  }
}
</script>

<style scoped>
  .character-preview {
    height: 340px;
  }
</style>
