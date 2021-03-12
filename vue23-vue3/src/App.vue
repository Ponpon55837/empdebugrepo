<template>
  <div>
    <h1>VUE 3 Project</h1>
    <test-in-vue3 />
    <v3b-button />
    <!-- 为了保持加载顺序需要挂载一个空的 dom ，将 id 传给 emp-vuett-->
    <App3Layout />
  </div>
</template>

<script>
import { defineAsyncComponent, render } from "vue";
import App3Layout from '@vApp3/Layout'

export default {
  components: {
    App3Layout,
  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
 
  },
  setup() {},
  mounted() {},
  name: "App",
};
</script>
