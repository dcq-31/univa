import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ICourseVideo } from '@/types'

export const useCoursesStore = defineStore('courses', () => {
  /**
   * State
   */
  const coursesVideo = ref<ICourseVideo[]>([
    {
      id: 1,
      author: 'Claudia Rivero',
      date: ' Enero 12, 2023',
      title: 'Francés para principiantes',
      description:
        'Curso de francés que brinda a los estudiantes las habilidades para comprender, hablar, leer y escribir en francés.'
    },
    {
      id: 2,
      author: 'Joy Oliver',
      date: ' Febrero 8, 2023',
      title: 'Redes Informáticas',
      description:
        'Se prentende enseñar como fue desarrollada la internet y las diferentes capas que existen para el intercambio de datos.'
    },
    {
      id: 3,
      author: 'Laura Guerra',
      date: ' Agosto 8, 2023',
      title: 'El comportamiento humano',
      description:
        'Aprenderás a aplicar teorías y métodos de la psicología para comprender el comportamiento de las personas.'
    },
    {
      id: 4,
      author: 'Helen Ortega',
      date: ' Noviembre 30, 2022',
      title: '¿Qué es Python?',
      description:
        'Python es un lenguaje de programación con el que se crean aplicaciones y software de  alta calidad.'
    },
    {
      id: 5,
      author: 'Reina Díaz',
      date: ' Abril 6, 2023',
      title: 'Marketing Digital',
      description:
        'Conoce las características del marketing digital incluyendo investigación de mercado, segmentación de mercado, etc.'
    }
  ])
  const newCoursesVideo = ref<ICourseVideo[]>([
    {
      id: 6,
      author: 'Ariel',
      date: ' Abril 6, 2023',
      title: 'Emprendimiento',
      description: 'Motivación personal'
    }
  ])

  /**
   * Methods
   */
  const addCourseVideo = () => {
    coursesVideo.value.unshift(newCoursesVideo.value[0])
    newCoursesVideo.value.shift()
  }
  return { coursesVideo, newCoursesVideo, addCourseVideo }
})
