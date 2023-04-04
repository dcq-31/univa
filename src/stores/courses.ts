import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ICourseVideo } from '@/types'

export const useCoursesStore = defineStore('courses', () => {
  const courses = ref<ICourseVideo[]>([
    {
      id: 1,
      author: 'Jhon Wakerly',
      date: ' Dec 22, 2023',
      title: 'Meet AutoManage, the best AI management tools',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 2,
      author: 'Sam Smith',
      date: ' Feb 8, 2023',
      title: 'Competitive Programming - Binary Search',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 3,
      author: 'Sam Smith',
      date: ' Feb 8, 2023',
      title: 'Competitive Programming - Binary Search',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 4,
      author: 'Helen Key',
      date: ' Dec 22, 2023',
      title: 'Meet AutoManage, the best AI management tools',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ])
  const newCourses = ref<ICourseVideo[]>([
    {
      id: 5,
      author: 'Jhon Wakerly',
      date: ' Dec 22, 2023',
      title: 'Meet AutoManage, the best AI management tools',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 6,
      author: 'Sam Smith',
      date: ' Feb 8, 2023',
      title: 'Competitive Programming - Binary Search',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ])
  return { courses, newCourses }
})
