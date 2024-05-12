<script setup>
import { inject, onMounted, onUnmounted } from 'vue'

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
    <h2>Product Listing Page</h2>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';
</style>
