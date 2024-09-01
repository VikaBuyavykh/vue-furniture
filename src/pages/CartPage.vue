<script setup>
import ShopCart from '@/components/ShopCart.vue'

defineProps({
  cart: Array,
  cartTotal: Number,
  isAuth: Boolean
})

defineEmits(['makeOrder'])
</script>

<template>
  <main class="main">
    <ShopCart
      :is-auth="isAuth"
      :cart="cart"
      :cart-total="cartTotal"
      @make-order="$emit('makeOrder')"
    />
  </main>
</template>

<style lang="scss" scoped></style>
