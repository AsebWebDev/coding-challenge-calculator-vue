<template>
  <div id="display">
    <div class="display-left">
      <span class="small">{{store[2]}}</span>
      <span class="small">{{store[1]}}</span>
      <span>{{store[0]}}</span>
    </div>

    <div class="main">
      <span> {{ display }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {
    display: String,
    store: Array
  }
}
</script>

<style scoped>
  span {
    font-family: 'VT323', monospace;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  
  #display {
    background-color: #D4D4D2;
    height: 100px;
    width: 400px;
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    text-align: right;
    align-items: flex-end;
    justify-content: space-between;
    font-size: 1.5rem;
  }

  .display-left {
    display: flex;
    flex-direction: column;
    max-width: 20%;
  }

  .small {
    font-size: 1rem;
  }

  .main {
    margin-top: 15px;
    font-size: 3rem;
  }
</style>
