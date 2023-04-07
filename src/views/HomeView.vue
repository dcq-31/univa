<script lang="ts" setup>
import { RouterLink } from 'vue-router'
// Heroicons
import { UserGroupIcon } from '@heroicons/vue/24/outline'
import { Squares2X2Icon } from '@heroicons/vue/24/outline'
import { DocumentTextIcon } from '@heroicons/vue/24/outline'
import { RocketLaunchIcon } from '@heroicons/vue/24/outline'
import { useCoursesStore } from '@/stores/courses'
import FeatureWidget from '@/components/widget/FeatureWidget.vue'
import { ROUTE_NAME } from '@/router/names'

const { coursesVideo } = useCoursesStore()
</script>

<template>
  <main id="home-view">
    <!-- ====== Hero Section Start -->
    <div id="hero" class="relative overflow-hidden bg-white pt-[40px] md:pt-[50px] lg:pt-[60px]">
      <div class="container mx-auto">
        <div class="mx-2">
          <div class="w-full px-4">
            <div class="mx-auto max-w-5xl space-x-5 text-center lg:flex">
              <div class="lg:order-last">
                <img
                  src="/hero.png"
                  alt="Hero Image"
                  class="mx-auto mb-5 w-60 md:mb-0 md:w-full md:max-w-sm lg:max-w-3xl"
                />
              </div>
              <div class="lg:order-first">
                <h1
                  class="mb-8 text-3xl font-bold leading-snug text-neutral-800 sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug"
                >
                  Una nueva forma de aprender!
                </h1>
                <p
                  class="mx-auto mb-10 max-w-[600px] text-neutral-800 sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed"
                >
                  Accede a cursos en línea , aprende nuevas habilidades a tu propio ritmo desde
                  cualquier lugar. ¡Empieza hoy mismo!
                </p>
                <ul class="mb-10 md:flex md:flex-wrap md:items-center md:justify-center">
                  <li></li>
                  <li>
                    <RouterLink
                      :to="{ name: ROUTE_NAME.COURSES }"
                      class="rounded-lg bg-secondary-600 py-4 px-6 font-medium text-white transition-colors hover:shadow-xl sm:px-10"
                    >
                      Explorar Cursos
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ====== Hero Section End -->

    <!-- ====== Features Section Start -->
    <section id="features" class="pt-20 pb-4 lg:pt-[120px] lg:pb-[70px]">
      <div class="container mx-auto px-4">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="mb-12 max-w-[750px] text-neutral-800 lg:mb-20">
              <h2 class="mb-4 text-3xl font-bold sm:text-4xl sm:leading-normal md:text-[42px]">
                Funcionalidades de Univa
              </h2>
              <p class="text-lg leading-relaxed sm:text-xl sm:leading-relaxed">
                Descubre las características clave que hacen a nuestra plataforma efectiva y
                flexible para el aprendizaje en línea.
              </p>
            </div>
          </div>
          <FeatureWidget
            title="Accesibilidad"
            description="Fácil acceso a los cursos desde cualquier lugar y en cualquier momento"
          >
            <UserGroupIcon class="w-12 text-lg text-white" />
          </FeatureWidget>
          <FeatureWidget
            title="Variedad de Cursos"
            description="Aprende habilidades en diferentes materias y técnicas para resolver problemas."
          >
            <Squares2X2Icon class="w-12 text-lg text-white" />
          </FeatureWidget>
          <FeatureWidget
            title="Certificados"
            description="Validar los conocimientos y cursos completados de los usuarios ante posibles empleos."
          >
            <DocumentTextIcon class="w-12 text-lg text-white" />
          </FeatureWidget>
          <FeatureWidget
            title="Expertos"
            description="Instructores disponibles para responder preguntas y brindar apoyo a todos los usuarios."
          >
            <RocketLaunchIcon class="w-12 text-lg text-white" />
          </FeatureWidget>
        </div>
        <div class="-mx-4 flex flex-wrap"></div>
      </div>
    </section>
    <!-- ====== Features Section End -->

    <!-- ====== Courses Video Section Start -->
    <section id="courses" class="pt-20 pb-4 lg:pt-[60px] lg:pb-[20px]">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
              <h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Nuestros Cursos
              </h2>
              <p class="text-body-color text-lg leading-relaxed sm:text-xl sm:leading-relaxed">
                Explora la amplia variedad de cursos que te ofrecemos y descubre cómo puedes
                expandir tus conocimientos.
              </p>
            </div>
          </div>
        </div>
        <div class="space-x-2 md:-mx-4 md:flex md:flex-wrap md:space-x-0">
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
                    :to="`/courses/${courseVideo.id.toString()}`"
                    class="mb-4 inline-block text-xl font-semibold text-dark hover:text-neutral-800 sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    {{ courseVideo.title }}
                  </RouterLink>
                </h3>
                <p class="text-body-color">
                  {{ courseVideo.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Courses Video Section End -->

    <!-- ====== About Section Start -->
    <section id="about-us" class="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
      <div class="container mx-auto">
        <div class="bg-white">
          <div class="-mx-4 flex flex-wrap">
            <div class="w-full">
              <div class="items-center justify-between overflow-hidden border lg:flex">
                <div
                  class="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]"
                >
                  <h2
                    class="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]"
                  >
                    ¿Quiénes están detrás?
                  </h2>
                  <p class="mb-9 text-lg leading-relaxed">
                    Somos un grupo de estudiantes universitarios con la misión de brindar una
                    experiencia educativa en línea de alta calidad a cualquier persona. Estamos
                    comprometidos a proporcionar una educación de calidad y accesible para todos,
                    sobre todo para aquellos que viven en zonas rurales o en comunidades de bajos
                    ingresos en Cuba.
                  </p>
                </div>
                <div class="text-center">
                  <div class="relative z-10 inline-block max-w-2xl">
                    <img src="about.jpg" class="mx-auto lg:ml-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== About Section End -->
  </main>
</template>
