<template>
  <Transition name="slide" appear>
    <div class="flex flex-col 2xl:w-2/3 w-full mx-auto">
      <h1 class="text-lime-500 sr-only">Skills</h1>
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
        <div
          v-for="skillType in skillTypes"
          :key="`skill-type-${skillType.id}`"
          class="
            flex flex-col justify-between
            skill-box
            drop-shadow
            md:px-5 md:py-4 px-3 py-2"
            :class="`${skillType.id % 2 == 0 ? 'skill-box-blue text-sky-400' : 'skill-box-lime text-lime-400'}`"
          >
          <div>
            <h2 :class="`h4 ${skillType.id % 2 == 0 ? 'text-sky-400' : 'text-lime-400' }`">
              {{ skillType.title }}
            </h2>
            <ul>
              <li v-for="skill in skills.filter(skill => skill.typeId == skillType.id)" :key="`skill-${skill.id}`">
                <template v-if="skill.link">
                  <a
                    :href="skill.link"
                    class="underline font-bold"
                  >
                    {{ skill.name }}
                  </a>
                </template>
                <template v-else>
                  {{ skill.name }}
                </template>
              </li>
            </ul>
          </div>
          <h3 :class="`subtitle ${skillType.id % 2 == 0 ? 'text-sky-400' : 'text-lime-400' }`">
            {{ skillType.description }}
          </h3>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'

export interface Skill {
  id: number
  name: string
  typeId: number
  link: string
}

export interface SkillType {
  id: number
  title: string
  description: string
}

const skills: Ref<Skill[]> = ref([])
const skillTypes: Ref<SkillType[]> = ref([])

onMounted(async () => {
  const skillData = await fetch(`${import.meta.env.VITE_API_BASE_URL}/skills/skill`)
  skills.value = await skillData.json()
  const skillTypeData = await fetch(`${import.meta.env.VITE_API_BASE_URL}/skills/skilltype`)
  skillTypes.value = await skillTypeData.json()
})
</script>

<style scoped>
li {
  margin-bottom: 0.5rem;
}
</style>
