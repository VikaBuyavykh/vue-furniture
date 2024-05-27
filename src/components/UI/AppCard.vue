<script setup>
import router from '@/router'

defineProps({
  img: String,
  alt: String,
  name: String,
  price: Number,
  horizontal: Boolean,
  place: String
})
</script>

<template>
  <li @click="() => router.push('/product')" class="card" :class="{ card_horizontal: horizontal }">
    <img
      class="card__img"
      :class="{
        card__img_place_products: place === 'products',
        card__img_place_listing: place === 'listing',
        card__img_place_collection: place === 'collection'
      }"
      :src="img"
      :alt="alt"
    />
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
  transition: all 0.15s ease;

  &:hover {
    transform: scale(1.01);
  }

  &:hover img {
    box-shadow: 2px 2px 5px rgba(grey, 0.3);
  }

  &:hover h4,
  &:hover p {
    opacity: 0.7;
  }

  &_horizontal {
    grid-column: span 2;
  }

  &__img {
    @include size(100%, 375px);
    @extend %pic;
    transition: all 0.15s ease;

    &_place_products {
      @include media_md {
        height: 300px;
      }

      @include media_sm {
        height: 250px;
      }

      @include media_xs {
        height: 201px;
      }
    }

    &_place_listing {
      @include media_xl {
        height: 251px;
        min-width: 200px;
      }
    }

    &_place_collection {
      @include media_md {
        height: 250px;
      }

      @include media_sm {
        height: 201px;
      }
    }
  }

  &__name {
    @extend %h4;
    margin-block: 1.5rem 0.5rem;
    transition: all 0.15s ease;
  }

  &__price {
    @extend %body-large;
    color: $medium-blue;
    transition: all 0.15s ease;
  }
}
</style>
