<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { ROUTE_NAME } from '@/router/names'
import type { TBaseLink } from '@/types'
import { useUserStore } from '@/stores/user'
import { UserCircleIcon } from '@heroicons/vue/24/outline'

interface INavLink {
  to: TBaseLink
  label: string
}

const LINKS: INavLink[] = [
  { to: '/#hero', label: 'Inicio' },
  { to: '/#features', label: 'Funcionalidades' },
  { to: '/#courses', label: 'Cursos' },
  { to: '/#about-us', label: 'Sobre Nosotros' }
]

const { isLogin } = useUserStore()

const navbarStatus = ref(false)
const navbarRef = ref<HTMLElement>(null)
const navbarClass = computed(() => (navbarStatus.value ? '' : 'hidden'))
const btnToggleClass = computed(() => (navbarStatus.value ? 'navbarTogglerActive' : ''))

const toggleNavbar = () => {
  navbarStatus.value = !navbarStatus.value
}

const toggleNavbarFixedStatus = () => {
  if (window.pageYOffset > navbarRef.value.offsetHeight) {
    navbarRef.value?.classList.add('shadow-lg')
  } else {
    navbarRef.value?.classList.remove('shadow-lg')
  }
}

onMounted(() => {
  window.addEventListener('scroll', toggleNavbarFixedStatus)
})

onUnmounted(() => {
  window.removeEventListener('scroll', toggleNavbarFixedStatus)
})
</script>
<template>
  <div ref="navbarRef" class="sticky top-0 left-0 z-40 flex w-full items-center bg-white">
    <div class="container mx-auto">
      <div class="relative flex items-center justify-between">
        <div class="w-60 max-w-full px-5">
          <RouterLink :to="{ name: ROUTE_NAME.HOME }" class="block w-40 py-2 lg:w-44">
            <img src="@/assets/images/univa-logo.png" alt="logo" class="w-full"
          /></RouterLink>
        </div>
        <div class="flex w-full items-center justify-between px-4">
          <div>
            <button
              class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-0 lg:hidden"
              @click="toggleNavbar"
              :class="btnToggleClass"
            >
              <span
                v-for="index of 3"
                :key="`toggle-btn-line-${index}`"
                class="relative my-[6px] block h-[2px] w-[30px] bg-dark"
              ></span>
            </button>
            <nav
              class="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
              :class="navbarClass"
            >
              <ul class="block lg:flex">
                <li
                  v-for="(link, index) in LINKS"
                  :key="`main-navbar-link-${index}`"
                  class="group relative"
                >
                  <RouterLink
                    :to="link.to"
                    class="mx-10 flex py-2 text-dark transition-colors group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-4 lg:px-0"
                  >
                    {{ link.label }}
                  </RouterLink>
                </li>
              </ul>
            </nav>
          </div>
          <div class="hidden justify-end space-x-4 pr-16 sm:flex lg:pr-0">
            <template v-if="!isLogin">
              <RouterLink
                :to="{ name: ROUTE_NAME.LOGIN }"
                class="py-3 px-7 font-medium text-dark transition-colors hover:text-primary"
              >
                Entrar
              </RouterLink>
              <RouterLink
                :to="{ name: ROUTE_NAME.HOME }"
                class="rounded-lg bg-primary py-3 px-6 font-medium text-white transition-colors hover:bg-primary-500 hover:shadow-lg"
              >
                Registrar
              </RouterLink>
            </template>
            <template v-else>
              <UserCircleIcon class="w-10 cursor-pointer text-neutral-800" />
              <RouterLink
                :to="{ name: ROUTE_NAME.COURSES }"
                class="rounded-lg bg-secondary py-3 px-6 font-medium text-white transition-colors hover:bg-secondary-500 hover:shadow-lg"
              >
                Mis Cursos
              </RouterLink>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.navbarTogglerActive > span:nth-child(1) {
  top: 7px;
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
    skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
    scaleY(var(--tw-scale-y));
}

.navbarTogglerActive > span:nth-child(2) {
  opacity: 0;
}

.navbarTogglerActive > span:nth-child(3) {
  top: -8px;
  --tw-rotate: 135deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
    skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
    scaleY(var(--tw-scale-y));
}
</style>
