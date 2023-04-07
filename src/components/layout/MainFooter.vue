<script lang="ts" setup>
import { ROUTE_NAME } from '@/router/names'
import { RouterLink } from 'vue-router'
</script>
<template>
  <!-- ====== Footer Section Start -->
  <footer
    class="relative z-10 bg-cover py-6 lg:pt-8"
    style="background-image: url('/footer-bg.jpg')"
  >
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4 lg:w-1/2 xl:w-2/3">
          <div class="mb-10 w-full">
            <RouterLink :to="{ name: ROUTE_NAME.HOME }" class="mb-6 inline-block max-w-[230px]">
              <img src="@/assets/images/univa-logo-white.png" alt="logo" class="max-w-full" />
            </RouterLink>
            <p class="mb-7 px-2 text-lg text-[#f3f4fe]">
              La plataforma ofrece una solución innovadora, fiable y accesible para el aprendizaje
              en línea, con cursos de alta calidad preparados por profesionales y una amplia
              variedad de temas para satisfacer las necesidades de cualquier usuario.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- ====== Footer Section End -->
</template>
