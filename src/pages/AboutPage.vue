<script setup>
import { inject, onMounted, onUnmounted } from 'vue'
import AppFeatures from '@/components/AppFeatures.vue'
import AppHistory from '@/components/AppHistory.vue'
import AppInvitation from '@/components/AppInvitation.vue'
import AppTagline from '@/components/AppTagline.vue'

const { setIsAboutPage } = inject('app')

onMounted(() => {
  setIsAboutPage(true)
})

onUnmounted(() => {
  setIsAboutPage(false)
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
