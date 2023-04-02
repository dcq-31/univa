<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="bg-neutral-100 py-4 px-8">
    <!-- ====== Forms Section Start -->
    <section class="bg-[#F4F7FF] py-14 lg:py-20">
      <div class="container">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div
              class="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-14 px-8 text-center sm:px-12 md:px-[60px]"
            >
              <div class="mb-10 text-center">
                <RouterLink to="/#hero" class="mx-auto inline-block max-w-[230px]">
                  <img src="@/assets/images/univa-logo.png" alt="logo" />
                </RouterLink>
              </div>

              <form>
                <div class="mb-6">
                  <input
                    type="email"
                    placeholder="Email"
                    class="bordder-[#E9EDF4] text-body-color w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                <div class="mb-6">
                  <input
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

              <RouterLink
                to="/"
                class="mb-2 inline-block text-base text-[#adadad] hover:text-primary"
              >
                Forget Password?
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Forms Section End -->
  </div>
</template>
