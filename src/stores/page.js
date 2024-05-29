import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useMediaQuery } from '@vueuse/core'

const isSmallScreen = useMediaQuery('(max-width: 1000px)')

export const usePageStore = defineStore('page', () => {
  const isMainPage = ref(false)
  const isMainPageSmallScreenSized = computed(() => isMainPage.value && isSmallScreen.value)

  const isListingPage = ref(false)

  const isAboutPage = ref(false)
  const isAboutPageSmallScreenSized = computed(() => isAboutPage.value && isSmallScreen.value)

  const isBasketPage = ref(false)
  const isBasketPageSmallScreenSized = computed(() => isBasketPage.value && isSmallScreen.value)

  const isCollectionPage = ref(false)
  const isCollectionPageSmallScreenSized = computed(
    () => isCollectionPage.value && isSmallScreen.value
  )

  return {
    isMainPage,
    isMainPageSmallScreenSized,
    isListingPage,
    isAboutPage,
    isAboutPageSmallScreenSized,
    isBasketPage,
    isBasketPageSmallScreenSized,
    isCollectionPage,
    isCollectionPageSmallScreenSized
  }
})
