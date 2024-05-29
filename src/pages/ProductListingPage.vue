<script setup>
import { onMounted, onUnmounted } from 'vue'
import { usePageStore } from '@/stores/page'
import AppProduct from '@/components/AppProduct.vue'
import AppRecommendation from '@/components/AppRecommendation.vue'
import AppFeatures from '@/components/AppFeatures.vue'
import AppListingInvitation from '@/components/AppListingInvitation.vue'

const page = usePageStore()

onMounted(() => {
  page.isListingPage = true
})

onUnmounted(() => {
  page.isListingPage = false
})
</script>

<template>
  <main class="main">
    <app-product></app-product>
    <app-recommendation></app-recommendation>
    <app-features page="listing"></app-features>
    <app-listing-invitation></app-listing-invitation>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';
</style>
