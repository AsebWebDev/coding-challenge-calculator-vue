<template>
  <div class="joke">
    <div>
      <img src="http://www.sclance.com/pngs/chuck-norris-png/chuck_norris_png_272129.png">  
    </div>
    <div>
      <h1>{{joke}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'joke',
  props: {
    joke: String
  }
}
</script>

<style scoped>
* {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.2rem;
  color: grey;
  height: 100px;
}

img {
  width: 70px;
  height: 70px;
  margin-right: 10px;
}

h1 {
  padding: 0;
}

.joke {
  width: 430px;
  padding: 0;
}

</style>
