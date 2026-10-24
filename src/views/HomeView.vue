<template>
  <template v-if="isLoading">
    <Loading />
  </template>
  <template v-else-if="!isLoading && !bio.firstName">
    Error fetching data
  </template>
  <Transition v-else name="slide" appear>
    <div v-if="bio" class="2k:w-1/2 2xl:w-2/3 w-full mx-auto gap-4">
      <div class="flex sm:flex-row flex-col sm:items-start items-center sm:text-left text-center">
        <img v-if="avatarUrl" :src="avatarUrl" :alt="bio.avatar.alt" height="100px" width="100px" />
        <div class="flex flex-col justify-center sm:px-6 px-0 sm:pt-0 pt-4">
          <h1 class="text-lime-500 neon-green">{{ bio.firstName }} {{ bio.lastName }}</h1>
          <h2 class="text-sky-500 neon-blue">{{ bio.title }}</h2>
        </div>
      </div>
      <div v-if="bio.description" class="flex flex-col gap-4 my-4">
        <p
          v-for="(paragraph, i) in bio.description"
          :key="`paragraph-${i}`"
        >
          {{ paragraph }}
        </p>
      </div>
      <div v-if="bio.goals">
        <h6>My career goals are:</h6>
        <ul>
          <li v-for="(goal, i) in bio.goals" :key="`goal-${i}`">
            {{ goal }}
          </li>
        </ul>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'

import Loading from '@/components/AppLoading.vue'

export interface Bio {
  avatar: {
    alt: string;
    url: string;
  }
  description: string[];
  firstName: string;
  goals: string[];
  lastName: string;
  title: string;
}

const isLoading: Ref<boolean> = ref(false)
const bio: Ref<Bio> = ref({} as Bio)
const avatarUrl: Ref<string> = ref('')

onMounted(async () => {
  isLoading.value = true
  const bioData = await fetch(`${import.meta.env.VITE_API_BASE_URL}/bio/bio`)
  bio.value = await bioData.json()
  avatarUrl.value = `${import.meta.env.VITE_BLOB_STORE_URL}/${bio?.value?.avatar?.url}`
  isLoading.value = false
})
</script>

<style></style>
