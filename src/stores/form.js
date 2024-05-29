import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormStore = defineStore('form', () => {
  const searchQuery = ref('')

  return { searchQuery }
})
