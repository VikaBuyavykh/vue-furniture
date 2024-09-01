<script setup>
import ShopSectionTitle from '@/components/ShopSectionTitle.vue'
import ShopCollection from '@/components/ShopCollection.vue'

defineProps({
  filteredCollection: Array,
  cardsAmount: Number,
  isMoreDisabled: Boolean,
  isSelectsPopupOpen: Boolean
})

defineEmits(['toggleSelectsPopup', 'closeSelectsPopup', 'more'])
</script>

<template>
  <main class="main">
    <ShopSectionTitle />
    <ShopCollection
      :filtered-collection="filteredCollection"
      :cards-amount="cardsAmount"
      :is-more-disabled="isMoreDisabled"
      :is-selects-popup-open="isSelectsPopupOpen"
      @toggle-selects-popup="$emit('toggleSelectsPopup')"
      @close-selects-popup="$emit('closeSelectsPopup')"
      @more="$emit('more')"
    />
  </main>
</template>

<style lang="scss" scoped></style>
