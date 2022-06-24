<template>
  <div class="home">
    <h1>This is here Home</h1>
    <base-nav />
    <HomeComponents />
  </div>
</template>
<script>
import HomeComponents from '../components/HomeComponents.vue'
import BaseNav from '../components/BaseNav.vue'
import '../assets/tailwind.css'
export default {
  name: 'HomeView',
  components: {
    HomeComponents,
    BaseNav
  }
}
</script>
