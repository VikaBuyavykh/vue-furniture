import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: '',
    email: '',
    id: null
  })

  function setUserValues(values) {
    Object.entries(values).forEach(([key, value]) => {
      user.value = { ...user.value, [key]: value }
    })
  }

  return {
    user,
    setUserValues
  }
})
