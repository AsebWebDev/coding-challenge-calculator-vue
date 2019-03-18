<template>
<div class="keypad">
  <div class="keypad-keys">
    <div class="keypad-left">
        <Key v-on:click.native="$parent.addInput('7')" keyValue="7" />
        <Key v-on:click.native="$parent.addInput('8')" keyValue="8" />
        <Key v-on:click.native="$parent.addInput('9')" keyValue="9" />
        <Key v-on:click.native="$parent.addInput('4')" keyValue="4" />
        <Key v-on:click.native="$parent.addInput('5')" keyValue="5" />
        <Key v-on:click.native="$parent.addInput('6')" keyValue="6" />
        <Key v-on:click.native="$parent.addInput('1')" keyValue="1" />
        <Key v-on:click.native="$parent.addInput('2')" keyValue="2" />
        <Key v-on:click.native="$parent.addInput('3')" keyValue="3" />
        <Key v-on:click.native="$parent.addInput('0')" keyValue="0" />
        <Key v-on:click.native="$parent.addInput('DEL')" keyValue="DEL" />
        <Key v-on:click.native="$parent.addInput('C')" keyValue="C" />
        <Key v-on:click.native="$parent.addInput('.')" keyValue="." />
        <Key v-on:click.native="$parent.calcResult()" keyValue="Calc" />
    </div>
    <div class="keypad-right">
      <Key v-on:click.native="$parent.addInput('+')" keyValue="+" />
      <Key v-on:click.native="$parent.addInput('-')" keyValue="-" />
      <Key v-on:click.native="$parent.addInput('/')" keyValue="/" />
      <Key v-on:click.native="$parent.addInput(':')" keyValue=":" />
    </div>
  </div>
</div>
</template>

<script>
import Key from './Key.vue'

export default {
  name: 'keypad',
  components: {
    Key
  }, 
  props: ['addInput'],
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
  * {
    display: flex;
  }

  button {
    height: 50px;
    max-width: 60px;
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
    flex-wrap: wrap;
  }
  .keypad-right {
    width: 100px;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: start;
  }

</style>
