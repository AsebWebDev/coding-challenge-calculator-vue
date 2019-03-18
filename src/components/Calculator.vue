<template>
  <div class="calculator">
    <Display v-bind:display="display" v-bind:store="store"/>
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
      else if (val === "DEL") this.display = this.display.slice(0, -1)
      else {
        if (this.display === '0') this.display = '';
        this.display = this.display + val;
      }
    },
    calcResult: function() {
      this.store.unshift(this.display);
      this.display = eval(this.display).toString();
    }
  },
  data () {
    return {
      display: '0',
      store: []
    }
  }
}
</script>

<style scoped>

  *{
    background-color: #2f2f31;
    padding: 20px;
  }

  .calculator {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
