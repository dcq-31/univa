<script lang="ts" setup>
import { useCoursesStore } from '@/stores/courses'
const { courses } = useCoursesStore()
</script>
<template>
  <main id="course-view">
    <!-- ====== Pricing Section Start -->
    <section
      id="pricing"
      class="relative z-20 overflow-hidden bg-white pt-20 pb-4 lg:pt-[70px] lg:pb-[50px]"
    >
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
              <h2 class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                Our Courses
              </h2>
              <p class="text-body-color mb-5 text-lg leading-relaxed sm:text-xl sm:leading-relaxed">
                There are many variations of passages of Lorem Ipsum available but the majority have
                suffered alteration in some form.
              </p>
              <div
                :to="{ name: 'home' }"
                class="mx-auto w-fit cursor-pointer rounded-lg bg-primary py-4 px-6 font-medium text-white hover:shadow-xl sm:px-10"
              >
                Add Course
              </div>
            </div>
          </div>
        </div>

        <div class="-mx-4 flex flex-wrap">
          <div
            v-for="(course, index) in courses"
            :key="`home-courses-video-${index}`"
            class="w-full px-4 md:w-1/2 lg:w-1/3"
          >
            <div class="group mb-10">
              <div class="mb-8 overflow-hidden rounded">
                <RouterLink :to="`/courses-video-details/${course.id.toString()}`" class="block">
                  <img
                    :src="`/courses/front-${course.id}.jpg`"
                    class="w-full transition group-hover:scale-125"
                  />
                </RouterLink>
              </div>
              <div>
                <div class="mb-3 flex items-center justify-between">
                  <span
                    class="inline-block rounded bg-secondary py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                  >
                    {{ course.date }}
                  </span>
                  <div class="font-semibold">
                    {{ course.author }}
                  </div>
                </div>
                <h3>
                  <RouterLink
                    :to="`/courses-video-details/${index}`"
                    class="text-dark mb-4 inline-block text-xl font-semibold hover:text-neutral-800 sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    {{ course.title }}
                  </RouterLink>
                </h3>
                <p class="text-body-color text-base">
                  {{ course.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Pricing Section End -->
  </main>
</template>
