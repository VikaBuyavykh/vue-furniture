<script setup>
import { onUnmounted } from 'vue'
import ShopProduct from '@/components/ShopProduct.vue'
import ShopListing from '@/components/ShopListing.vue'
import ShopFeatures from '@/components/ShopFeatures.vue'
import ShopBenefits from '@/components/ShopBenefits.vue'

defineProps({
  isAdded: Boolean,
  collection: Array
})

const emit = defineEmits(['add', 'resetInputs', 'subscribe'])

const subs = defineModel('subs')

onUnmounted(() => emit('resetInputs'))
</script>

<template>
  <main class="main">
    <ShopProduct @add="$emit('add', $event)" :is-added="isAdded" />
    <ShopListing :collection="collection" />
    <ShopFeatures />
    <ShopBenefits @subscribe="$emit('subscribe', $event)" v-model:subs="subs" is-simple />
  </main>
</template>

<style lang="scss" scoped></style>
