<template>
  <footer>
    <div class="flex flex-col text-center gap-4 pt-8">
      <ul class="flex justify-center gap-4">
        <li>
          <i className="fa-regular fa-envelope"></i>{{' '}}
          <a href="mailto:jaewebbdevdesign@gmail.com">
            jaewebbdevdesign@gmail.com
          </a>
        </li>
        <li>
          <i className="fa-brands fa-linkedin"></i>{{' '}}
          <a href="https://www.linkedin.com/in/jae-webb/">
            LinkedIn
          </a>
        </li>
      </ul>
      <div>
        &copy; Jae Webb {{ year }}
      </div>
      <div>
        Click
        <a
          href="https://jaewebbdevdesignreact.vercel.app/"
          class="underline font-bold"
        >here</a>
        to see the React <i class="fa-brands fa-react"></i> version of this site
      </div>
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
