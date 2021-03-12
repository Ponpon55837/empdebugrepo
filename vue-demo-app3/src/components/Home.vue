<template>
    <p v-if="home">Here is Home</p>
    <button @click="sethome">Click</button>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Home',
    setup() {
        const home = ref(true)
        const sethome = () => home.value = !home.value
        return { home, sethome }
    },
}
</script>