<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCoursesStore } from '@/stores/courses'
import type { ICourseVideo } from '@/types'
import { ROUTE_NAME } from '@/router/names'
const { params } = useRoute()
const { coursesVideo } = useCoursesStore()

const course = computed<ICourseVideo>(() => {
  let idx = 0
  coursesVideo.forEach((item, index) => {
    if (item.id.toString() == params.id) {
      idx = index
    }
  })
  return coursesVideo[idx]
})
</script>
<template>
  <main id="course-details-view">
    <section class="pt-20 pb-10 lg:pt-[60px] lg:pb-20">
      <div class="container mx-auto">
        <div class="md: -mx-4 mb-10 flex flex-wrap justify-center">
          <div class="w-full px-4 md:space-x-3 lg:flex lg:items-center">
            <div class="mb-5 md:mb-0 md:max-w-lg lg:max-w-3xl">
              <video autoplay controls>
                <source :src="`/public/courses/videos/${params.id}.mp4`" type="video/mp4" />
              </video>
            </div>
            <div class="mx-auto max-w-md px-2 md:mx-0 lg:w-4/12 lg:max-w-none">
              <div>
                <div
                  class="relative mb-12 overflow-hidden rounded bg-primary py-[60px] px-11 text-center lg:px-8"
                >
                  <h3 class="mb-2 text-2xl font-semibold text-white">Explorar otros cursos</h3>
                  <p class="mb-8 text-base text-white">
                    Tenemos otros cursos de diferentes temas que te pueden interesar.
                  </p>
                  <RouterLink
                    :to="{ name: ROUTE_NAME.HOME }"
                    class="rounded-lg bg-white py-3 px-6 font-medium text-dark transition-colors hover:shadow-lg"
                  >
                    Ver Cursos
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full px-4 lg:w-8/12">
          <div class="mb-5 flex items-center justify-between">
            <span
              class="inline-block rounded bg-secondary py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
            >
              {{ course.date }}
            </span>
            <div class="font-semibold">
              {{ course.author }}
            </div>
          </div>
          <div>
            <h2
              class="mb-6 text-[26px] font-bold leading-snug text-dark sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug"
            >
              {{ course.title }}
            </h2>
            <p class="text-body-color mb-8 text-base leading-relaxed">
              {{ course.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
