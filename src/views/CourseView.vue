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
        class="relative top-20 mx-auto max-w-md rounded-md border bg-white p-4 shadow-lg lg:max-w-lg"
      >
        <div class="w-full px-4">
          <div class="rounded-lg bg-white sm:py-3 sm:px-3">
            <h3 class="mb-8 text-2xl font-semibold md:text-[26px]">Añadir Contenido</h3>
            <form>
              <div class="mb-6">
                <input
                  v-model="form.title"
                  type="text"
                  placeholder="Título"
                  class="w-full rounded-md border border-[#E9EDF4] bg-[#FCFDFE] py-3 px-4 placeholder-[#ACB6BE] outline-none focus:border-neutral-400 focus-visible:shadow-none"
                />
              </div>
              <div class="mb-6">
                <textarea
                  v-model="form.description"
                  rows="3"
                  placeholder="Descripción"
                  class="text-body-color w-full rounded-md border border-[#E9EDF4] bg-[#FCFDFE] py-3 px-4 placeholder-[#ACB6BE] outline-none focus:border-neutral-400 focus-visible:shadow-none"
                />
              </div>
              <div class="mb-6">
                <input
                  v-model="form.author"
                  type="text"
                  placeholder="Autor"
                  class="w-full rounded-md border border-[#E9EDF4] bg-[#FCFDFE] py-3 px-4 placeholder-[#ACB6BE] outline-none focus:border-neutral-400 focus-visible:shadow-none"
                />
              </div>

              <div class="mb-6">
                <div class="mb-3 text-lg font-medium">Video del curso</div>
                <div class="flex items-center space-x-5">
                  <div class="shrink-0">
                    <FolderIcon class="w-6 text-lg text-primary" />
                  </div>
                  <label class="block">
                    <span class="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      class="block text-sm text-dark-500 file:mr-4 file:rounded-full file:border-0 file:py-2 file:px-4 file:text-sm file:font-semibold hover:file:bg-violet-100"
                    />
                  </label>
                </div>
              </div>

              <div class="mb-6">
                <div class="mb-3 text-lg font-medium">Foto de portada</div>
                <div class="flex items-center space-x-5">
                  <div class="shrink-0">
                    <FolderIcon class="w-6 text-lg text-primary" />
                  </div>
                  <label class="block">
                    <span class="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      class="block text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:py-2 file:px-4 file:text-sm file:font-semibold hover:file:bg-violet-100"
                    />
                  </label>
                </div>
              </div>

              <div
                class="mx-auto w-fit cursor-pointer rounded-lg bg-primary py-3 px-6 font-medium text-white transition-colors hover:bg-primary-500 hover:shadow-lg"
                @click="addNewCourseVideo"
              >
                Aceptar
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
              <h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Nuestros Cursos
              </h2>

              <div
                class="mx-auto w-fit rounded-lg bg-primary py-3 px-6 font-medium text-white transition-colors hover:bg-primary-500 hover:shadow-lg"
                @click="toggleModal"
              >
                Añadir Contenido
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
                    class="mb-4 inline-block text-xl font-semibold text-dark hover:text-neutral-800 sm:text-2xl lg:text-xl xl:text-2xl"
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
