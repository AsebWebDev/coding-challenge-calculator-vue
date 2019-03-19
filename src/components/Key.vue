<template>
  <div class="key">
    <span>{{keyValue}}</span>
  </div>
</template>

<script>
export default {
  name: "key",
  components: {},
  props: {
    keyValue: String
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
  span {
    font-size: 2rem;
    font-family: 'Josefin Sans', sans-serif;
  }

  .key {
    background-color: #424345;
    color: white;
    width: 70px;
    height: 70px;
    margin: 4px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .key:hover {
    background-color: yellow;
    color: black;
  }
</style>
