<template>
  <div>
    <router-link to="/">Home</router-link>
    <fight-scene />
  </div>
</template>

<script>
import FightScene from '../components/FightScene'

export default {
  components: {
    FightScene
  }
}
</script>
