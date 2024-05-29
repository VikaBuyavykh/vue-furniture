<script setup>
import { onMounted, onUnmounted } from 'vue'
import { usePageStore } from '@/stores/page'
import AppFeatures from '@/components/AppFeatures.vue'
import AppHistory from '@/components/AppHistory.vue'
import AppInvitation from '@/components/AppInvitation.vue'
import AppTagline from '@/components/AppTagline.vue'

const page = usePageStore()

onMounted(() => {
  page.isAboutPage = true
})

onUnmounted(() => {
  page.isAboutPage = false
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
