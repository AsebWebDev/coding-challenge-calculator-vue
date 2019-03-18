<template>
  <div id="display">
    <span>{{store[1]}}</span>
    <span>{{store[0]}}</span>
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
    store: [String]
  }
}
</script>

<style scoped>
  span {
    font-family: 'VT323', monospace;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  
  .main {
    margin-top: 15px;
    font-size: 3rem;
  }

  #display {
    background-color: #D4D4D2;
    height: 100px;
    width: 400px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    text-align: right;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: 1.5rem;
  }
</style>
