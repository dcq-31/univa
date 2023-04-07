<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { ROUTE_NAME } from '@/router/names'
import { UserIcon, KeyIcon } from '@heroicons/vue/24/solid'

interface ILoginForm {
  user: string
  password: string
}
const router = useRouter()
const { user, password, updateIsLogin } = useUserStore()
const form = ref<ILoginForm>({
  user: '',
  password: ''
})

const login = () => {
  if (form.value.user == user && form.value.password == password) {
    updateIsLogin(true)
    router.push('/')
  }
}
</script>
<template>
  <main id="login-view" class="bg-neutral-100 py-2 px-5">
    <section class="bg-[#F4F7FF] py-8 lg:py-10">
      <div class="mb-6 flex text-center">
        <RouterLink :to="{ name: ROUTE_NAME.HOME }" class="mx-auto inline-block max-w-[270px]">
          <img src="@/assets/images/univa-logo.png" alt="logo" />
        </RouterLink>
      </div>
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div
              class="relative mx-auto max-w-[500px] overflow-hidden rounded-lg bg-white py-10 px-5 text-center sm:px-9 md:px-[40px]"
            >
              <div class="mb-5 text-center text-2xl font-semibold tracking-wider text-neutral-700">
                Bienvenido
              </div>
              <form>
                <div class="mb-6 flex items-center space-x-3">
                  <UserIcon class="w-6 text-lg text-neutral-700" />
                  <input
                    v-model="form.user"
                    type="text"
                    placeholder="Usuario"
                    class="text-body-color w-full rounded-md border border-[#E9EDF4] bg-[#FCFDFE] py-3 px-4 placeholder-[#ACB6BE] outline-none focus:border-neutral-400 focus-visible:shadow-none"
                  />
                </div>
                <div class="mb-6 flex items-center space-x-3">
                  <KeyIcon class="w-6 text-lg text-neutral-700" />
                  <input
                    v-model="form.password"
                    type="password"
                    placeholder="Contraseña"
                    class="text-body-color w-full rounded-md border border-[#E9EDF4] bg-[#FCFDFE] py-3 px-4 placeholder-[#ACB6BE] outline-none focus:border-neutral-400 focus-visible:shadow-none"
                  />
                </div>
                <div class="mb-8">
                  <div
                    @click="login"
                    class="duration-400 w-full cursor-pointer rounded-lg bg-primary py-3 px-6 font-medium text-white transition-colors hover:bg-primary-500 hover:shadow-lg"
                  >
                    Entrar
                  </div>
                </div>
              </form>
              <div class="text-neutral-600">
                Si no tienes cuenta
                <RouterLink
                  :to="{ name: ROUTE_NAME.HOME }"
                  class="mb-2 inline-block cursor-pointer text-base text-primary-600 hover:text-primary"
                >
                  regístrate aquí
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Forms Section End -->
  </main>
</template>
