<template>
  <div class="calculator">
    <Display v-bind:display="display"/>
    <input type="text" v-model="display">
    <Keypad/>
  </div>
</template>

<script>
// import Display from './Display.vue'
// import Keypad from './Keypad.vue'

export default {
  name: 'calculator',
  components: {
    // Display, Keypad
  }, 
  data () {
    return {
      display: ''
    }
  }
}
</script>

<style scoped>

  .calculator {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
