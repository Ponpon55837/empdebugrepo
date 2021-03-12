<template>
  <div class="layout-app">
    <img src="../logo.png" width="30" />
    <h1>Demo3</h1>
    <p class="msg">{{ msg }}</p>
    <Home />
  </div>
</template>

<script>
import { ref } from "vue";
import Home from './Home'

export default {
  components: { 
    Home
  },
  setup() {
    const msg = ref('say my name')
  
    return { msg }
  },
};
</script>

<style scoped>
img {
  width: 200px;
}

.layout-app {
  text-align: center;
  padding: 10px;
}

.msg {
  color: blue;
}
</style>
