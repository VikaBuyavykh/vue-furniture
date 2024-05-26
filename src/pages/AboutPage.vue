<script setup>
import { inject, onMounted, onUnmounted, watch } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import AppFeatures from '@/components/AppFeatures.vue'
import AppHistory from '@/components/AppHistory.vue'
import AppInvitation from '@/components/AppInvitation.vue'
import AppTagline from '@/components/AppTagline.vue'

const { setIsAboutPage, setIsAboutPageSmallScreenSized } = inject('app')

const isSmallScreen = useMediaQuery('(max-width: 1000px)')

watch(isSmallScreen, () => {
  isSmallScreen.value ? setIsAboutPageSmallScreenSized(true) : setIsAboutPageSmallScreenSized(false)
})

onMounted(() => {
  isSmallScreen.value ? setIsAboutPageSmallScreenSized(true) : setIsAboutPageSmallScreenSized(false)
  setIsAboutPage(true)
})

onUnmounted(() => {
  setIsAboutPage(false)
  setIsAboutPageSmallScreenSized(false)
})
</script>

<template>
  <main class="main">
    <app-tagline></app-tagline>
    <app-history></app-history>
    <app-features page="about"></app-features>
    <app-invitation></app-invitation>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';
</style>
