<script setup>
import { inject, onMounted, onUnmounted, watch } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import AppCover from '@/components/AppCover.vue'
import AppFeatures from '@/components/AppFeatures.vue'
import AppProducts from '@/components/AppProducts.vue'
import AppIntro from '@/components/AppIntro.vue'
import AppInvitation from '@/components/AppInvitation.vue'

const { setIsMainPageSmallScreenSized } = inject('app')

const isSmallScreen = useMediaQuery('(max-width: 1000px)')

watch(isSmallScreen, () => {
  isSmallScreen.value ? setIsMainPageSmallScreenSized(true) : setIsMainPageSmallScreenSized(false)
})

onMounted(() => {
  isSmallScreen.value ? setIsMainPageSmallScreenSized(true) : setIsMainPageSmallScreenSized(false)
})

onUnmounted(() => {
  setIsMainPageSmallScreenSized(false)
})
</script>

<template>
  <main class="main">
    <app-cover></app-cover>
    <app-features></app-features>
    <app-products></app-products>
    <app-intro></app-intro>
    <app-invitation></app-invitation>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';
</style>
