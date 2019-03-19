<template>
  <div id="app">
    <div class="header">
      <h1 class="animated bounce">CHUCKULATOR</h1>
    </div>
    <Calculator/>
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

  html {
    margin: 0;
    padding: 0;
    background-image: url(../public/bgpic3.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment:fixed;
  }

  h1 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 3rem;
  }

  img {
    width: 150px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header {
    height: 100px;
  }

</style>
