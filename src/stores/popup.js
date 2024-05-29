import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePopupStore = defineStore('popup', () => {
  const isPopupVisible = ref(false)

  return { isPopupVisible }
})
