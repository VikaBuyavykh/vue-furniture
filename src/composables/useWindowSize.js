import { onMounted, onUnmounted, ref } from 'vue'
import { trottle } from '@/utils/trottle.js'

export function useWindowSize() {
  const width = ref(window.innerWidth)

  function resize() {
    width.value = window.innerWidth
  }

  const trottledResize = trottle(resize)

  onMounted(() => window.addEventListener('resize', trottledResize))

  onUnmounted(() => window.removeEventListener('resize', trottledResize))

  return {
    width
  }
}
