<template>
  <div class="calculator">
    <Display v-bind:display="display"/>
    <input type="text" v-model="display">
    <Keypad :addInput="addInput" :calcResult="calcResult"/>
  </div>
</template>

<script>
import Display from './Display.vue'
import Keypad from './Keypad.vue'

export default {
  name: 'calculator',
  components: {
    Display, Keypad
  }, 
  methods: {
    addInput: function(val) {
      if (val === "C") this.display = '0'
      else {
        if (this.display === '0') this.display = '';
        this.display = this.display + val;
      }
    },
    calcResult: function() {
      this.display = eval(this.display).toString();
    }
  },
  data () {
    return {
      display: '0'
    }
  }
}
</script>

<style scoped>

  .calculator {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
  }

</style>
