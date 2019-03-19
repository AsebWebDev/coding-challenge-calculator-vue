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

    handleKeypress: function(e) {
      if (Number(e.key) >= 0 && Number(e.key) <= 9) this.addInput(e.key);
      if (e.key === "," || e.key === ".") this.addInput('.');
      if (e.key === "Backspace") this.addInput('DEL');
      if (e.key === "Delete") this.addInput('C');
      if (e.key === "Enter") this.calcResult();
    },

    addInput: function(val) {
      this.joke = '...is about to tell a joke';
      if (val === "C") {
        this.display = '0';
        this.store = [];
      } else if (val === "DEL") {
        this.display = this.display.slice(0, -1);
        if (this.display === '') this.display = "0";
      } else {
        if (this.display === '0') this.display = '';
        this.display = this.display + val;
      }
    },

    calcResult: function() {
      try {
        //check if last stored calculation is the same as current
        //if so, do not store again
        if (this.store[0] !== this.display) this.store.unshift(this.display);
        //evaluate result and show it
        this.display = eval(this.display).toString();
      } catch (e) {
            this.display = '0';
            this.store.unshift("ERROR");
      }
      this.getJoke();
    },

    getJoke: function() {
      axios
        .get('https://api.icndb.com/jokes/random')
        .then(response => (this.joke = response.data.value.joke))
    }
  },
  mounted(){
    document.addEventListener("keydown", this.handleKeypress)
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
    padding: 15px;
  }

  .calculator {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    border-radius: 15px;
  }

</style>
