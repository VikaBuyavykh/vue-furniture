import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHoverStore = defineStore('hover', () => {
  const isCartHovered = ref(false)
  const isProfileHovered = ref(false)
  const isLoupeHovered = ref(false)
  const isMenuHovered = ref(false)
  const isCloseHovered = ref(false)

  return { isCartHovered, isProfileHovered, isLoupeHovered, isMenuHovered, isCloseHovered }
})
