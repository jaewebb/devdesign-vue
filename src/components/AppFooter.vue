<template>
  <footer>
    <div class="text-center mt-5">
      &copy; Jae Webb {{ year }}<br />
      Click
      <a
        href="https://jaewebbdevdesignreact.vercel.app/"
        class="underline font-bold"
      >here</a>
      to see the React <i class="fa-brands fa-react"></i> version of this site
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const year = computed(() => {
	const date = new Date()
	return date.getFullYear()
})
</script>

<style scoped>

</style>
