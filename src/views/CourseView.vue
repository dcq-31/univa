<script lang="ts" setup>
import { ref, computed } from 'vue'
import { FolderIcon } from '@heroicons/vue/24/outline'
import type { ICourseVideo } from '@/types'
import { useCoursesStore } from '@/stores/courses'

const { coursesVideo, addCourseVideo } = useCoursesStore()
const showModal = ref(false)

/**
 * Video course form
 */
const form: ICourseVideo = {
  id: 0,
  title: '',
  description: '',
  author: '',
  date: ''
}

const overlayClass = computed(() => (showModal.value ? 'z-50 block' : 'hidden'))

const toggleModal = () => {
  showModal.value = !showModal.value
}

const addNewCourseVideo = () => {
  addCourseVideo()
  toggleModal()
}
</script>

<template>
  <main id="course-view">
    <!-- ====== Modal Start -->
    <div
      class="fixed inset-0 h-full w-full overflow-y-auto bg-gray-700 bg-opacity-50"
      :class="overlayClass"
    >
      <div
        class="relative top-20 mx-auto max-w-md rounded-md border bg-white p-5 shadow-lg lg:max-w-lg"
      >
        <div class="w-full px-4">
          <div class="rounded-lg bg-white py-10 px-8 sm:py-12 sm:px-10 md:p-[60px] 2xl:p-[60px]">
            <h3 class="mb-8 text-2xl font-semibold md:text-[26px]">Send us a Message</h3>
            <form>
              <div class="mb-6">
                <input
                  v-model="form.title"
                  type="text"
                  placeholder="Title"
                  class="bordder-[#E9EDF4] text-body-color w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                />
              </div>
              <div class="mb-6">
                <textarea
                  v-model="form.description"
                  rows="3"
                  placeholder="Description"
                  class="bordder-[#E9EDF4] text-body-color w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                />
              </div>
              <div class="mb-6">
                <input
                  v-model="form.author"
                  type="text"
                  placeholder="Author"
                  class="text-body-color w-full rounded-md border border-[#E9EDF4] bg-[#FCFDFE] py-3 px-5 text-base placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                />
              </div>

              <div class="mb-6">
                <div class="mb-2 text-lg font-medium">Video</div>
                <div class="flex space-x-5">
                  <div class="shrink-0">
                    <FolderIcon class="w-12 text-lg text-primary" />
                  </div>
                  <label class="block">
                    <span class="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      class="block text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-primary-700 hover:file:bg-violet-100"
                    />
                  </label>
                </div>
              </div>

              <div class="mb-6">
                <div class="mb-2 text-lg font-medium">Front Image</div>
                <div class="flex space-x-5">
                  <div class="shrink-0">
                    <FolderIcon class="w-12 text-lg text-primary" />
                  </div>
                  <label class="block">
                    <span class="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      class="block text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-primary-700 hover:file:bg-violet-100"
                    />
                  </label>
                </div>
              </div>

              <div class="mb-10">
                <div
                  class="w-full cursor-pointer rounded-md border border-primary bg-primary py-3 px-5 text-center text-base text-white transition duration-300 ease-in-out hover:shadow-md"
                  @click="addNewCourseVideo"
                >
                  Accept
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- ====== Modal End -->

    <section class="relative z-20 overflow-hidden bg-white pt-20 pb-4 lg:pt-[70px] lg:pb-[50px]">
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
                class="mx-auto w-fit cursor-pointer rounded-lg bg-primary py-4 px-6 font-medium text-white hover:shadow-xl sm:px-10"
                @click="toggleModal"
              >
                Add Course
              </div>
            </div>
          </div>
        </div>

        <div class="-mx-4 flex flex-wrap">
          <div
            v-for="(courseVideo, index) in coursesVideo"
            :key="`home-courses-video-${index}`"
            class="w-full px-4 md:w-1/2 lg:w-1/3"
          >
            <div class="group mb-10">
              <div class="mb-8 overflow-hidden rounded">
                <RouterLink :to="`/courses/${courseVideo.id.toString()}`" class="block">
                  <img
                    :src="`/courses/front-${courseVideo.id}.jpg`"
                    class="w-full transition group-hover:scale-125"
                  />
                </RouterLink>
              </div>
              <div>
                <div class="mb-3 flex items-center justify-between">
                  <span
                    class="inline-block rounded bg-secondary py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                  >
                    {{ courseVideo.date }}
                  </span>
                  <div class="font-semibold">
                    {{ courseVideo.author }}
                  </div>
                </div>
                <h3>
                  <RouterLink
                    :to="`/courses-video-details/${index}`"
                    class="text-dark mb-4 inline-block text-xl font-semibold hover:text-neutral-800 sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    {{ courseVideo.title }}
                  </RouterLink>
                </h3>
                <p class="text-body-color text-base">
                  {{ courseVideo.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
