import { ref } from 'vue'

const isSelectsPopupOpen = ref(false)

function toggleSelectsPopup() {
  isSelectsPopupOpen.value = !isSelectsPopupOpen.value
}

function closeSelectsPopup() {
  isSelectsPopupOpen.value = false
}

export function useSelectsPopup() {
  return {
    isSelectsPopupOpen,
    toggleSelectsPopup,
    closeSelectsPopup
  }
}
