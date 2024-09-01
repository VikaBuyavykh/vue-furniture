<script setup>
import ShopCartItem from '@/components/ShopCartItem.vue'
import UINotFoundBox from '@/components/UI/UINotFoundBox.vue'
import UIButton from '@/components/UI/UIButton.vue'

defineProps({
  cart: Array,
  cartTotal: Number,
  isAuth: Boolean
})

defineEmits(['makeOrder'])
</script>

<template>
  <section class="cart">
    <div class="cart--content">
      <h2 class="cart--title">Your shopping cart</h2>
      <template v-if="cart.length > 0">
        <div class="cart--header">
          <p
            v-for="(item, index) in ['Product', 'Quantity', 'Total']"
            :key="index"
            class="cart--header-item"
          >
            {{ item }}
          </p>
        </div>
        <ul class="cart--list">
          <ShopCartItem
            v-for="item in cart"
            :key="item.id"
            :img="item.img"
            :bigImg="item.bigImg"
            :alt="item.alt"
            :title="item.title"
            :desc="item.desc"
            :price="item.price"
            v-model:amount="item.amount"
          />
        </ul>
        <div class="cart--footer">
          <p class="cart--sum">
            Subtotal<span>£{{ cartTotal }}</span>
          </p>
          <p class="cart--clarification">Taxes and shipping are calculated at checkout</p>
          <UIButton
            :disabled="!isAuth"
            @click="$emit('makeOrder')"
            class="cart--button"
            theme="contrast"
            >Go to checkout</UIButton
          >
          <span v-if="!isAuth" class="cart--alert"
            >To place an order you need to
            <RouterLink :to="{ name: 'login' }">log in</RouterLink></span
          >
        </div>
      </template>
      <UINotFoundBox v-else isDark>The cart is empty</UINotFoundBox>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.cart {
  @include size(100%, auto);
  flex-grow: 1;
  background-color: $light-gray;

  &--content {
    padding-block: 64px 48px;
    @include size(74%, auto);
    max-width: 1280px;
    margin: 0 auto;
    @include flex(column, start, center, 0);

    @include media_md {
      width: 88%;
      padding-block: 38px 58px;
    }
  }

  &--title {
    @include size(100%, auto);
    margin-block-end: 48px;
    @include h1($dark-primary, left);

    @include media_md {
      @include h3($dark-primary, left);
      margin-block-end: 18px;
    }
  }

  &--header {
    @include size(100%, auto);
    padding-block-end: 12px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @include media_md {
      display: none;
    }

    &-item {
      @include h6($dark-primary, right);

      &:first-of-type {
        text-align: left;
      }
    }
  }

  &--list {
    @include size(100%, auto);
    border-block: 1px solid $border-gray;
    padding-block: 20px 32px;
    @include flex(column, start, stretch, 20px);

    @include media_md {
      border-block-start: none;
      gap: 28px;
      padding-bottom: 20px;
    }
  }

  &--footer {
    @include size(100%, auto);
    padding-block-start: 28px;
    @include flex(column, start, end, 14px);

    @include media_md {
      gap: 10px;
    }
  }

  &--sum {
    @include h4($primary, left);

    span {
      margin-inline-start: 10px;
      @include h3($dark-primary, left);
    }
  }

  &--clarification {
    @include small($primary, left);
  }

  &--button {
    @include media_xs {
      width: 100%;
      margin-top: 24px;
    }
  }

  &--alert {
    width: 100%;
    @include small(coral, right);

    @include media_xs {
      text-align: center;
    }

    a {
      color: coral;
      @extend %hoverOpacity;
    }
  }
}
</style>
