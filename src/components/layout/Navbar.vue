<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import type { TLinkBase } from '@/types'

interface INavLink {
  to: TLinkBase
  text: string
}

const LINKS: INavLink[] = [
  { to: '/#start', text: 'Inicio' },
  { to: '/#features', text: 'Servicios' },
  { to: '/#courses', text: 'Cursos' },
  { to: '/#about-us', text: 'Sobre Nosotros' }
]

const navStatus = ref(false)
const navbar = ref<HTMLElement>(null)
const navClass = computed(() => (navStatus.value ? '' : 'hidden'))
const btnToggleClass = computed(() => (navStatus.value ? 'navbarTogglerActive' : ''))

const toggleNav = () => {
  navStatus.value = !navStatus.value
}

const toggleNavbarFixedStatus = () => {
  if (window.pageYOffset > navbar.value.offsetHeight) {
    navbar.value?.classList.add('shadow-lg')
  } else {
    navbar.value?.classList.remove('shadow-lg')
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
  <!-- ====== Navbar Section Start -->
  <div ref="navbar" class="sticky top-0 left-0 z-40 flex w-full items-center bg-white">
    <div class="container mx-auto">
      <div class="relative flex items-center justify-between">
        <div class="w-60 max-w-full px-5">
          <RouterLink :to="{ name: 'home' }" class="block w-40 py-3 lg:w-48">
            <img src="@/assets/images/univa-logo.png" alt="logo" class="w-full"
          /></RouterLink>
        </div>
        <div class="flex w-full items-center justify-between px-4">
          <div>
            <button
              class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-slate-700 focus:ring-2 lg:hidden"
              @click="toggleNav"
              :class="btnToggleClass"
            >
              <span
                v-for="index of 3"
                :key="`toggle-btn-line-${index}`"
                class="relative my-[6px] block h-[2px] w-[30px] bg-slate-800"
              ></span>
            </button>
            <nav
              class="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
              :class="navClass"
            >
              <ul class="block lg:flex">
                <li
                  v-for="(link, index) in LINKS"
                  :key="`navbar-link-${index}`"
                  class="group relative"
                >
                  <RouterLink
                    :to="link.to"
                    class="mx-10 flex py-2 group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-slate-800 lg:group-hover:text-slate-700 lg:group-hover:opacity-80"
                  >
                    {{ link.text }}
                  </RouterLink>
                </li>
              </ul>
            </nav>
          </div>
          <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
            <RouterLink to="/login" class="py-3 px-7 font-medium text-slate-800 hover:opacity-80">
              Entrar
            </RouterLink>
            <RouterLink
              :to="{ name: 'home' }"
              class="duration-400 rounded-lg bg-primary py-3 px-6 text-base font-medium text-white transition-colors hover:bg-primary-500"
            >
              Registrar
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ====== Navbar Section End -->
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
