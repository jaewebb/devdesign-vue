<template>
  <img
    :alt="alt"
    :class="loaded ? 'show' : ''"
    :src="src"
    class="lime-border"
    @load="onLoad"
  >
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  alt: String,
  src: String,
})

const loaded = ref(false)
function onLoad() {
  loaded.value = true
}
</script>

<style scoped>
img {
  opacity: 0;
  transition: 1s;
}

img.show {
  opacity: 1;
}
</style>
