<template>
  <div class="calculator">
    <Joke v-bind:joke="joke"/>
    <Display v-bind:display="display" v-bind:store="store"/>
    <Keypad :addInput="addInput" :calcResult="calcResult"/>
  </div>
</template>

<script>
import Display from './Display.vue';
import Keypad from './Keypad.vue';
import Joke from './Joke.vue';
import axios from 'axios';


export default {
  name: 'calculator',
  components: {
    Display, Keypad, Joke
  }, 
  methods: {
    addInput: function(val) {
      this.joke = '...is about to tell a joke';
      if (val === "C") {
        this.display = '0';
        this.store = [];
      }
      else if (val === "DEL") this.display = this.display.slice(0, -1)
      else {
        if (this.display === '0') this.display = '';
        this.display = this.display + val;
      }
    },
    calcResult: function() {
      try {
        let currentDisplay = this.display;
        this.display = eval(this.display).toString();
        this.store.unshift(currentDisplay);
      } catch (e) {
            this.display = '0';
            this.store.unshift("ERROR");
            console.log(e.message)
      }
      this.getJoke();
    },
    getJoke: function() {
      axios
        .get('http://api.icndb.com/jokes/random')
        .then(response => (this.joke = response.data.value.joke))
        .catch(err => console.log(err))
    }
  },
  data () {
    return {
      display: '0',
      store: [],
      joke: '...is about to tell a joke'
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
    max-width: 500px;
  }

</style>
