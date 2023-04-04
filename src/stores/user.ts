import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref('adam')
  const password = ref('adam123')
  const isLogin = ref(false)
  const updateIsLogin = (value: boolean) => {
    isLogin.value = value
  }
  return { user, password, isLogin, updateIsLogin }
})
