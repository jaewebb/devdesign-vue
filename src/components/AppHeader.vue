<template>
  <div>
    <header
      class="
        flex
        justify-between
        mb-5
        3k:w-1/3 w-full
        mx-auto"
    >
      <a href="/">
        <AppImage
          :src="logo"
          style="height: 60px; width: 60px;"
          alt="site logo"
        />
      </a>
      <nav class="flex items-center sm:gap-10 gap-5">
        <RouterLink
          to="/"
          class="hover:underline hover:text-lime-500"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/skills"
          class="hover:underline hover:text-lime-500"
        >
          Skills
        </RouterLink>
        <RouterLink
          to="/portfolio"
          class="hover:underline hover:text-lime-500"
        >
          Portfolio
        </RouterLink>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppImage from '@/components/AppImage.vue'

import logo from '@/assets/logo.png'
</script>

<style scoped>

</style>
