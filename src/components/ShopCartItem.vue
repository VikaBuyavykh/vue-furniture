<script setup>
import { computed } from 'vue'
import UINumberInput from '@/components/UI/UINumberInput.vue'

const props = defineProps({
  img: String,
  bigImg: String,
  alt: String,
  title: String,
  desc: String,
  price: Number
})

const amountValue = defineModel('amount')

const imgPath = computed(() => new URL(`/src/images/products/${props.img}`, import.meta.url).href)
const bigImgPath = computed(
  () => new URL(`/src/images/products/${props.bigImg}`, import.meta.url).href
)
</script>

<template>
  <li class="cart-item">
    <picture class="cart-item--image">
      <source :srcset="imgPath" media="(max-width: 1000px)" />
      <img :src="bigImgPath" :alt="alt" />
    </picture>
    <div class="cart-item--infobox">
      <div class="cart-item--info">
        <h3 class="cart-item--title">{{ title }}</h3>
        <p class="cart-item--desc">{{ desc }}</p>
        <p class="cart-item--price">£{{ price }}</p>
      </div>
      <UINumberInput v-model="amountValue" />
      <p class="cart-item--sum">£{{ price * amountValue }}</p>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.cart-item {
  @include size(100%, auto);
  display: grid;
  grid-template: 1fr / 109px auto;
  gap: 21px;

  @include media_md {
    grid-template-columns: 133px auto;
  }

  &--image {
    @include size(100%, -webkit-fill-available);
    position: relative;

    img {
      position: absolute;
      @include size(100%, inherit);
      @extend %pic;
    }
  }

  &--infobox {
    @include size(100%, auto);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 21px;
    align-items: center;
    justify-items: end;

    @include media_md {
      grid-template: repeat(2, min-content) / 1fr;
      gap: 16px;
      align-items: start;
      justify-items: start;
    }
  }

  &--info {
    @include size(100%, auto);
    @include flex(column, start, start, 8px);
  }

  &--title {
    @include h4($dark-primary, left);

    @include media_md {
      @include h5($dark-primary, left);
    }
  }

  &--desc {
    @include small($dark-primary, left);
  }

  &--price {
    @include medium($dark-primary, left);
  }

  &--sum {
    @include large($dark-primary, left);

    @include media_md {
      display: none;
    }
  }
}
</style>
