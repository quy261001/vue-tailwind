<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class="mt-[20px]"> day la h1</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import '../assets/tailwind.css'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
