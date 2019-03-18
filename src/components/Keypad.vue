<template>
<div class="keypad">
  <div class="keypad-keys">
    <div class="keypad-left">
        <Key keyValue="1" />
        <Key keyValue="2" />
        <Key keyValue="3" />
        <Key keyValue="4" />
        <Key keyValue="5" />
        <Key keyValue="6" />
        <Key keyValue="7" />
        <Key keyValue="8" />
        <Key keyValue="9" />
        <Key keyValue="DEL" />
        <Key keyValue="C" />
    </div>
    <div class="keypad-right">
      <Key keyValue="+" />
      <Key keyValue="-" />
      <Key keyValue="/" />
      <Key keyValue=":" />
    </div>
  </div>
  <button>Calc</button>
</div>
</template>

<script>
import Key from './Key.vue'

export default {
  name: 'keypad',
  components: {
    Key
  }, 
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
  * {
    display: flex;
    flex-wrap: wrap;
  }

  .keypad {
    flex-direction: column;
  }

  .keypad-keys {
    flex-direction:row;
  }

  .keypad-left {
    width: 300px;
    flex-direction: row;
  }
  .keypad-right {
    width: 100px;
    flex-direction: row;
  }

</style>
