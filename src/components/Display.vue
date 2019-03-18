<template>
  <div id="display">
    <div>
     <h1><span> {{ display }} </span></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {
    display: String
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
    height: 100px;
    width: 400px;
    padding-right: 20px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    font-size: 2rem;
  }
</style>
