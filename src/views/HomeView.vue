<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import type { IIcon, ICourseVideo } from '@/types'

interface IService {
  title: string
  description: string
  icon: IIcon
}

const SERVICES: IService[] = [
  {
    title: 'Free and Open-Source',
    description: ' Lorem Ipsum is simply dummy text of the printing and industry.',
    icon: {
      name: 'gift',
      svg: 'M44.9313 11.7H38.9188C40.5438 10.9687 41.7626 9.99374 42.2501 8.69374C42.9001 6.98749 42.2501 5.19999 40.3001 3.33124C38.1876 1.29999 35.9938 0.568738 33.8001 1.13749C29.9813 2.11249 27.4626 7.06874 26.2438 9.99374C25.1063 7.06874 22.5876 2.11249 18.6876 1.13749C16.4938 0.568738 14.3001 1.29999 12.1876 3.33124C10.2376 5.19999 9.5876 6.98749 10.2376 8.69374C10.7251 9.99374 12.0251 10.9687 13.5688 11.7H7.06885C5.0376 11.7 3.4126 13.325 3.4126 15.3562V21.5312C3.4126 23.5625 5.0376 25.1875 7.06885 25.1875H7.71885V46.2312C7.71885 48.8312 9.83135 51.025 12.5126 51.025H40.1376C42.7376 51.025 44.9313 48.9125 44.9313 46.2312V25.1875C46.9626 25.1875 48.5876 23.5625 48.5876 21.5312V15.3562C48.5063 13.325 46.8813 11.7 44.9313 11.7ZM34.5313 3.98124C34.7751 3.89999 35.0188 3.89999 35.1813 3.89999C36.1563 3.89999 37.2126 4.38749 38.2688 5.52499C38.7563 6.01249 39.8126 7.06874 39.5688 7.79999C39.0001 9.34374 33.9626 10.6437 28.9251 11.05C30.0626 8.36874 32.1751 4.54999 34.5313 3.98124ZM13.0001 7.71874C12.7563 6.98749 13.8126 5.93124 14.3001 5.44374C15.4376 4.38749 16.4126 3.81874 17.3876 3.81874C17.6313 3.81874 17.8751 3.81874 18.0376 3.89999C20.4751 4.54999 22.5063 8.28749 23.6438 10.9687C18.6063 10.5625 13.5688 9.26249 13.0001 7.71874ZM42.0063 46.2312C42.0063 47.2875 41.1126 48.1812 40.0563 48.1812H12.4313C11.3751 48.1812 10.4813 47.2875 10.4813 46.2312V25.1875H41.9251V46.2312H42.0063ZM45.6626 21.5312C45.6626 22.0187 45.3376 22.3437 44.8501 22.3437H7.06885C6.6626 22.3437 6.25635 22.0187 6.25635 21.5312V15.3562C6.25635 14.95 6.6626 14.5437 7.06885 14.5437H44.8501C45.2563 14.5437 45.6626 14.8687 45.6626 15.3562V21.5312Z'
    }
  },
  {
    title: 'Multipurpose Template',
    description: ' Lorem Ipsum is simply dummy text of the printing and industry.',
    icon: {
      name: 'move-indicator',
      svg: 'M49.8062 23.3187L43.875 17.3875C43.3063 16.8187 42.4125 16.8187 41.8438 17.3875C41.275 17.9562 41.275 18.85 41.8438 19.4187L46.9625 24.6187H27.4625V4.87498L32.5812 10.075C33.15 10.6437 34.0437 10.6437 34.6125 10.075C35.1812 9.50623 35.1812 8.61248 34.6125 8.04373L28.6812 2.11248C27.95 1.38123 26.975 0.974976 26 0.974976C24.9438 0.974976 24.05 1.38123 23.3188 2.11248L17.3875 8.04373C16.8187 8.61248 16.8187 9.50623 17.3875 10.075C17.6312 10.3187 18.0375 10.4812 18.3625 10.4812C18.6875 10.4812 19.0937 10.3187 19.3375 10.075L24.6187 4.87498V24.5375H4.95625L10.075 19.3375C10.6437 18.7687 10.6437 17.875 10.075 17.3062C9.50625 16.7375 8.6125 16.7375 8.04375 17.3062L2.1125 23.2375C0.65 24.7 0.65 27.1375 2.1125 28.6L8.04375 34.5312C8.2875 34.775 8.69375 34.9375 9.01875 34.9375C9.34375 34.9375 9.75 34.775 9.99375 34.5312C10.5625 33.9625 10.5625 33.0687 9.99375 32.5L4.79375 27.3H24.4563V47.125L19.2563 41.925C18.6875 41.3562 17.7938 41.3562 17.225 41.925C16.6563 42.4937 16.6563 43.3875 17.225 43.9562L23.1562 49.8875C23.8875 50.6187 24.8625 51.025 25.8375 51.025C26.8937 51.025 27.7875 50.6187 28.5187 49.8875L34.45 43.9562C35.0188 43.3875 35.0188 42.4937 34.45 41.925C33.8813 41.3562 32.9875 41.3562 32.4188 41.925L27.4625 47.125V27.3812H47.0438L41.8438 32.5812C41.275 33.15 41.275 34.0437 41.8438 34.6125C42.0875 34.8562 42.4938 35.0187 42.8188 35.0187C43.1438 35.0187 43.55 34.8562 43.7938 34.6125L49.725 28.6812C51.2688 27.2187 51.2687 24.7812 49.8062 23.3187Z'
    }
  },
  {
    title: 'High-quality Design',
    description: ' Lorem Ipsum is simply dummy text of the printing and industry.',
    icon: {
      name: 'stack',
      svg: 'M29.5312 21.6562L28.6563 21.1641L29.6953 20.5625C30.7344 19.9062 31.3359 18.8125 31.2812 17.6094C31.2266 16.4063 30.625 15.3125 29.5312 14.7109L27.8906 13.7813L29.6406 12.6875C30.6797 12.0313 31.2812 10.9375 31.2266 9.73438C31.1719 8.53125 30.5703 7.4375 29.4766 6.83594L19.25 1.09375C18.2109 0.492187 16.9531 0.546875 15.9141 1.09375L5.41406 7.21875C4.375 7.82031 3.71875 8.91406 3.71875 10.1172C3.71875 11.3203 4.375 12.4141 5.41406 13.0156L7.10938 14L5.41406 14.9844C4.375 15.5859 3.71875 16.6797 3.71875 17.8828C3.71875 19.0859 4.32031 20.1797 5.41406 20.7812L6.39844 21.3281L5.46875 21.875C4.42969 22.4766 3.77344 23.5703 3.77344 24.7734C3.77344 25.9766 4.375 27.0703 5.46875 27.6719L15.9141 33.6875C16.4609 34.0156 17.0078 34.125 17.6094 34.125C18.2109 34.125 18.8125 33.9609 19.3594 33.6328L29.6953 27.2891C30.7344 26.6328 31.3359 25.5391 31.2812 24.3359C31.2266 23.2969 30.625 22.2031 29.5312 21.6562ZM5.63281 10.1172C5.63281 9.57031 5.90625 9.13281 6.34375 8.85938L16.8438 2.78906C17.0625 2.67969 17.3359 2.57031 17.5547 2.57031C17.7734 2.57031 18.0469 2.625 18.2656 2.73437L28.5469 8.47656C28.9844 8.75 29.2578 9.1875 29.3125 9.73438C29.3125 10.2812 29.0391 10.7188 28.6016 10.9922L18.3203 17.3906C17.8828 17.6641 17.2812 17.6641 16.8438 17.3906L6.39844 11.375C5.90625 11.1562 5.63281 10.6641 5.63281 10.1172ZM5.63281 17.9375C5.63281 17.3906 5.90625 16.9531 6.34375 16.6797L9.02344 15.1484L15.8594 19.0859C16.4062 19.4141 16.9531 19.5234 17.5547 19.5234C18.1562 19.5234 18.7578 19.3594 19.3047 19.0312L26.0312 14.875L28.6016 16.2969C29.0391 16.5703 29.3125 17.0078 29.3672 17.5547C29.3672 18.1016 29.0938 18.5391 28.6563 18.8125L18.3203 25.2656C17.8828 25.5391 17.2812 25.5391 16.8438 25.2656L6.39844 19.25C5.90625 18.9766 5.63281 18.4844 5.63281 17.9375ZM28.6563 25.8125L18.3203 32.2109C17.8828 32.4844 17.2812 32.4844 16.8438 32.2109L6.39844 26.1953C5.96094 25.9219 5.6875 25.4844 5.6875 24.9375C5.6875 24.3906 5.96094 23.9531 6.39844 23.6797L8.3125 22.5859L15.8594 26.9609C16.4062 27.2891 16.9531 27.3984 17.5547 27.3984C18.1562 27.3984 18.7578 27.2344 19.3047 26.9062L26.7969 22.2578L28.6563 23.2969C29.0938 23.5703 29.3672 24.0078 29.4219 24.5547C29.3672 25.0469 29.0938 25.5391 28.6563 25.8125Z'
    }
  },
  {
    title: 'All Essential Elements',
    description: ' Lorem Ipsum is simply dummy text of the printing and industry.',
    icon: {
      name: 'dashboard',
      svg: 'M10.7734 14.3281H3.82813C2.07813 14.3281 0.65625 12.9062 0.65625 11.1562V4.21094C0.65625 2.46094 2.07813 1.03906 3.82813 1.03906H10.7734C12.5234 1.03906 13.9453 2.46094 13.9453 4.21094V11.1562C13.9453 12.9062 12.5234 14.3281 10.7734 14.3281ZM3.82813 2.95312C3.17188 2.95312 2.57031 3.5 2.57031 4.21094V11.1562C2.57031 11.8125 3.11719 12.4141 3.82813 12.4141H10.7734C11.4297 12.4141 12.0313 11.8672 12.0313 11.1562V4.21094C12.0313 3.55469 11.4844 2.95312 10.7734 2.95312H3.82813Z'
    }
  }
]

const COURSES_VIDEO: ICourseVideo[] = [
  {
    author: 'Jhon Wakerly',
    date: ' Dec 22, 2023',
    title: 'Meet AutoManage, the best AI management tools',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    author: 'Sam Smith',
    date: ' Feb 8, 2023',
    title: 'Competitive Programming - Binary Search',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    author: 'Helen Key',
    date: ' Dec 22, 2023',
    title: 'Meet AutoManage, the best AI management tools',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    author: 'Charly Sears',
    date: ' May 30, 2023',
    title: 'New mathematical methods',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  }
]
</script>

<template>
  <main id="home">
    <!-- ====== Hero Section Start -->
    <div id="hero" class="relative overflow-hidden bg-white pt-[70px] md:pt-[90px] lg:pt-[110px]">
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
                  Open-Source Web Template for SaaS, Startup, Apps, and More
                </h1>
                <p
                  class="mx-auto mb-10 max-w-[600px] text-base text-neutral-800 sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed"
                >
                  Multidisciplinary Web Template Built with Your Favourite Technology - HTML
                  Bootstrap, Tailwind and React NextJS.
                </p>
                <ul
                  class="mb-10 space-y-8 md:flex md:flex-wrap md:items-center md:justify-center md:space-y-0 md:space-x-5"
                >
                  <li>
                    <RouterLink
                      :to="{ name: 'home' }"
                      class="rounded-lg bg-white py-4 px-6 text-center font-medium text-neutral-800 ring-2 ring-neutral-800 hover:shadow-xl sm:px-10"
                    >
                      Download Now
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      :to="{ name: 'home' }"
                      class="rounded-lg bg-secondary-600 py-4 px-6 font-medium text-white hover:shadow-xl sm:px-10"
                    >
                      Star on Github
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
            <div class="mb-12 max-w-[620px] text-neutral-800 lg:mb-20">
              <h2 class="mb-4 text-3xl font-bold sm:text-4xl md:text-[42px]">
                Main Features Of Play
              </h2>
              <p class="text-lg leading-relaxed sm:text-xl sm:leading-relaxed">
                There are many variations of passages of Lorem Ipsum available but the majority have
                suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div class="-mx-4 flex flex-wrap">
          <div
            v-for="(service, index) in SERVICES"
            :key="`home-service-${index}`"
            class="w-full px-4 md:w-1/2 lg:w-1/4"
          >
            <div class="group mb-12 bg-white">
              <div
                class="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
              >
                <span
                  class="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"
                ></span>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto"
                >
                  <path :d="service.icon.svg" fill="white" />
                </svg>
              </div>
              <h4 class="text-dark mb-3 text-xl font-bold">{{ service.title }}</h4>
              <p class="text-body-color mb-8 lg:mb-11">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Features Section End -->

    <!-- ====== Courses Video Section Start -->
    <section id="courses" class="pt-20 pb-4 lg:pt-[60px] lg:pb-[20px]">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
              <h2 class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                Our Courses
              </h2>
              <p class="text-body-color text-lg leading-relaxed sm:text-xl sm:leading-relaxed">
                There are many variations of passages of Lorem Ipsum available but the majority have
                suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div class="-mx-4 flex flex-wrap">
          <div
            v-for="(courseVideo, index) in COURSES_VIDEO"
            :key="`home-courses-video-${index}`"
            class="w-full px-4 md:w-1/2 lg:w-1/3"
          >
            <div class="group mb-10">
              <div class="mb-8 overflow-hidden rounded">
                <RouterLink :to="`/courses-video-details/${index}`" class="block">
                  <img
                    :src="`/courses/front-${index}.jpg`"
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
    <!-- ====== Courses Video Section End -->

    <!-- ====== About Section Start -->
    <section id="about-us" class="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
      <div class="container mx-auto">
        <div class="bg-white">
          <div class="-mx-4 flex flex-wrap">
            <div class="w-full px-4">
              <div class="items-center justify-between overflow-hidden border lg:flex">
                <div
                  class="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]"
                >
                  <h2
                    class="text-dark mb-6 text-3xl font-bold sm:text-4xl sm:leading-snug 2xl:text-[40px]"
                  >
                    Brilliant Toolkit to Build Nextgen Website Faster.
                  </h2>
                  <p class="text-body-color mb-9 text-base leading-relaxed">
                    The main ‘thrust' is to focus on educating attendees on how to best protect
                    highly vulnerable business applications with interactive panel discussions and
                    roundtables led by subject matter experts.
                  </p>
                  <p class="text-body-color mb-9 text-base leading-relaxed">
                    The main ‘thrust' is to focus on educating attendees on how to best protect
                    highly vulnerable business applications with interactive panel.
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                  >
                    Learn More
                  </a>
                </div>
                <div class="text-center">
                  <div class="relative z-10 inline-block">
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
