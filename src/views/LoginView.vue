<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const user = ref('')
const password = ref('')
</script>
<template>
  <div class="bg-neutral-100 py-2 px-5">
    <!-- ====== Forms Section Start -->
    <section class="bg-[#F4F7FF] py-8 lg:py-10">
      <div class="container">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div
              class="relative mx-auto max-w-[500px] overflow-hidden rounded-lg bg-white py-10 px-5 text-center sm:px-9 md:px-[40px]"
            >
              <div class="mb-6 text-center">
                <RouterLink to="/" class="mx-auto inline-block max-w-[240px]">
                  <img src="@/assets/images/univa-logo.png" alt="logo" />
                </RouterLink>
              </div>
              <div class="mb-5 text-left text-3xl font-semibold text-neutral-700">Login</div>
              <form>
                <div class="mb-6">
                  <input
                    v-model="user"
                    type="text"
                    placeholder="User"
                    class="bordder-[#E9EDF4] text-body-color w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                <div class="mb-6">
                  <input
                    v-model="password"
                    type="password"
                    placeholder="Password"
                    class="bordder-[#E9EDF4] text-body-color w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                <div class="mb-10">
                  <input
                    type="submit"
                    value="Sign In"
                    class="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition duration-300 ease-in-out hover:shadow-md"
                  />
                </div>
              </form>
              <div class="text-[#adadad]">
                If you don't have any account,
                <RouterLink
                  to="/"
                  class="mb-2 inline-block text-base text-primary-300 hover:text-primary"
                >
                  please register here.
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Forms Section End -->
  </div>
</template>
