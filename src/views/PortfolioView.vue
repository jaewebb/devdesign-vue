<template>
  <Transition name="slide" appear>
    <div class="3k:w-1/2 xl:w-2/3 w-full mx-auto">
      <h1 class="text-lime-500">Portfolio</h1>
      <p>Most of what I've worked on has been used internally or is client-only, so I started a portfolio page with proof of concepts!</p>
      <ul>
        <li v-for="(item) in portfolioItems" :key="`porfolioItem-${item.id}`">
          <a :href="item.link" target="_blank">
            {{ item.name }}
          </a>
          {{ item.description }}
        </li>
      </ul>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'

export interface PortfolioItem {
  id: number;
  description: string;
  link: string;
  name: string;
}

const isLoading: Ref<boolean> = ref(false)
const portfolioItems: Ref<PortfolioItem[]> = ref([])

onMounted(async () => {
  isLoading.value = true
  const portfolioItemData = await fetch(`${import.meta.env.VITE_API_BASE_URL}/portfolioItems/portfolioItem`)
  portfolioItems.value = await portfolioItemData.json()
  isLoading.value = false
})
</script>

<style>
</style>
