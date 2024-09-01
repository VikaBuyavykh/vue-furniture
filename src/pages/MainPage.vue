<script setup>
import { onUnmounted } from 'vue'
import ShopCover from '@/components/ShopCover.vue'
import ShopFeatures from '@/components/ShopFeatures.vue'
import ShopListing from '@/components/ShopListing.vue'
import ShopIntro from '@/components/ShopIntro.vue'
import ShopBenefits from '@/components/ShopBenefits.vue'

defineProps({
  collection: Array
})

const emit = defineEmits(['resetInputs', 'subscribe'])

const subs = defineModel('subs')

onUnmounted(() => emit('resetInputs'))
</script>

<template>
  <main class="main">
    <ShopCover />
    <ShopFeatures />
    <ShopListing :collection="collection" />
    <ShopIntro />
    <ShopBenefits @subscribe="$emit('subscribe', $event)" v-model:subs="subs" />
  </main>
</template>

<style lang="scss" scoped></style>
