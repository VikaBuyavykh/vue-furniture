<script setup>
import router from '@/router'

defineProps({
  img: String,
  alt: String,
  name: String,
  price: Number,
  horizontal: Boolean
})
</script>

<template>
  <li @click="() => router.push('/product')" class="card" :class="{ card_horizontal: horizontal }">
    <img class="card__img" :src="img" :alt="alt" />
    <h4 class="card__name">{{ name }}</h4>
    <p class="card__price">£{{ price }}</p>
  </li>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.card {
  @include size(100%, auto);
  @include flex(column, start, start, 0px);
  cursor: pointer;

  &_horizontal {
    grid-column: span 2;
  }

  &__img {
    @include size(100%, 375px);
    @extend %pic;
  }

  &__name {
    @extend %h4;
    margin-block: 1.5rem 0.5rem;
  }

  &__price {
    @extend %body-large;
    color: $medium-blue;
  }
}
</style>
