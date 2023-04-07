import { createRouter, createWebHistory } from 'vue-router'
// Layouts
import MainLayout from '@/layouts/MainLayout.vue'
// Views
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import CourseView from '@/views/CourseView.vue'
import CourseDetailsView from '@/views/CourseDetailsView.vue'
import { ROUTE_NAME } from './names'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Main Layout
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '', name: ROUTE_NAME.HOME, component: HomeView },
        {
          path: '/courses',
          name: ROUTE_NAME.COURSES,
          component: CourseView
        },
        { path: '/courses/:id', component: CourseDetailsView }
      ]
    },

    // Authentication Layout
    {
      path: '/login',
      name: ROUTE_NAME.LOGIN,
      component: LoginView
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 0
      }
    }
  }
})
router.afterEach((to, from) => {
  console.log('Route Change')
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
})
export default router
