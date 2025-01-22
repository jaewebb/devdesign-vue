<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'

import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const loaded = ref(false)

onMounted(() => {
  loaded.value = true
})
</script>

<template>
  <div class="flex flex-col md:p-8 p-4 min-h-screen w-full justify-between">
    <Transition name="slide" appear>
      <AppHeader />
    </Transition>
    <main>
      <RouterView v-if="loaded" />
    </main>
    <Transition name="slide" appear>
      <AppFooter />
    </Transition>
  </div>
</template>

<style>
.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in .5s ease-in forwards;
  transition: opacity 3s;
}

.slide-leave-active {
  animation: slide-out .5s ease-out forwards;
  opacity: 0;
  transition: opacity 3s;
}

@keyframes slide-in {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
}

body {
  font-family: 'Open Sans', sans-serif;
}

h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
  font-family: 'Oxanium', sans-serif;
}

</style>
