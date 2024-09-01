import { onMounted, onUnmounted, ref } from 'vue'
import { trottle } from '@/utils/trottle.js'

export function useWindowSize() {
  const width = ref(window.innerWidth)

  function resize() {
    width.value = window.innerWidth
  }

  onMounted(() => window.addEventListener('resize', trottle(resize)))

  onUnmounted(() => window.removeEventListener('resize', trottle(resize)))

  return {
    width
  }
}
