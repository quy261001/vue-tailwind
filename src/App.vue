<template>
  <component :is ="layout">
    <router-view />
  </component>
</template>

<script>
import {computed} from 'vue'
import {useRoute} from "vue-router"
import {publicLayout} from './constants/index.js'
export default {
  setup() {
    const router = useRoute();
    return {
      layout: computed(() => (router.meta.layout || publicLayout) + "-layout")
    }
  }, 
}
</script>