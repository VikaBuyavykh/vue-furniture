<script setup>
import { onUnmounted } from 'vue'
import ShopInfo from '@/components/ShopInfo.vue'
import ShopFeatures from '@/components/ShopFeatures.vue'
import ShopBenefits from '@/components/ShopBenefits.vue'

const emit = defineEmits(['resetInputs', 'subscribe'])

const subs = defineModel('subs')

onUnmounted(() => emit('resetInputs'))
</script>

<template>
  <main class="main">
    <ShopInfo />
    <ShopFeatures transparent-bg />
    <ShopBenefits @subscribe="$emit('subscribe', $event)" v-model:subs="subs" />
  </main>
</template>

<style lang="scss" scoped></style>
