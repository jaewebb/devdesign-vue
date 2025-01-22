<template>
  <div>
    <header
      class="
        flex md:flex-row flex-col
        justify-between
        md:mb-5
        2xl:w-2/3 w-full
        2xl:mx-auto"
      >
      <div class="flex justify-between">
        <a href="/">
          <AppImage
            :src="logo"
            style="height: 60px; width: 60px;"
            alt="site logo"
          />
        </a>
        <div class="md:hidden block grow text-right">
          <h2 class="text-lime-500">Jae Webb</h2>
          <h3 class="text-sky-500">Senior Web Application Developer</h3>
        </div>
      </div>
      <nav class="flex justify-between md:my-0 my-10">
        <RouterLink
          to="/"
          class="md:pr-10 hover:underline hover:text-lime-500"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="md:pr-10 hover:underline hover:text-lime-500"
        >
          About
        </RouterLink>
        <RouterLink
          to="/skills"
          class="md:pr-10 hover:underline hover:text-lime-500"
        >
          Skills
        </RouterLink>
        <RouterLink
          to="/portfolio"
          class="md:pr-10 hover:underline hover:text-lime-500"
        >
          Portfolio
        </RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
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
