<script lang="ts" setup>
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
            <RouterLink to="/#hero" class="mb-6 inline-block max-w-[230px]">
              <img src="@/assets/images/univa-logo-white.png" alt="logo" class="max-w-full" />
            </RouterLink>
            <p class="mb-7 text-lg text-[#f3f4fe]">
              We create digital experiences for brands and companies by using technology. <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius neque eum autem dolorum
              quidem architecto nesciunt?
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- ====== Footer Section End -->
</template>
