<template>
  <div id="app">
    <div class="header">
      <h1>CHUCKULATOR</h1>
    </div>
    <Calculator msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
  name: 'app',
  components: {
    Calculator
  }
}
</script>

<style>

  h1 {
    font-family: 'Josefin Sans', sans-serif;
  }

  img {
    width: 150px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

</style>
