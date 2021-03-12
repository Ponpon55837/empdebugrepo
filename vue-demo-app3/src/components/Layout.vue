<template>
  <div class="layout-app">
    <img src="../logo.png" width="30" />
    <h1>Demo3</h1>
    <p class="msg">{{ msg }}</p>
    {{ msg }}

    <p>{{ show }}</p>
    <button @click="setShow">Click</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  components: { 
  },
  setup() {
    const msg = ref('say my name')

    const show = ref('show message')
    const setShow = () => {
      console.log('1')
      show.value = 'it can not change'
      console.log('2')
    }
  
    return { msg, show, setShow }
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
