<script setup>
import { inject, onMounted, onUnmounted } from 'vue'
import AppProduct from '@/components/AppProduct.vue'
import AppRecommendation from '@/components/AppRecommendation.vue'
import AppFeatures from '@/components/AppFeatures.vue'
import AppListingInvitation from '@/components/AppListingInvitation.vue'

const { setIsListingPage } = inject('app')

onMounted(() => {
  setIsListingPage(true)
})

onUnmounted(() => {
  setIsListingPage(false)
})
</script>

<template>
  <main class="main">
    <app-product></app-product>
    <app-recommendation></app-recommendation>
    <app-features></app-features>
    <app-listing-invitation></app-listing-invitation>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';
</style>
