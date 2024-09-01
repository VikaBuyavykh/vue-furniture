<script setup>
import { useRoute, useRouter } from 'vue-router'
import { limit } from '@/utils/limit.js'
import { LISTING_MAX } from '@/utils/constants.js'
import UICard from '@/components/UI/UICard.vue'
import UIButton from '@/components/UI/UIButton.vue'

defineProps({
  collection: Array
})

const route = useRoute()
const router = useRouter()
</script>

<template>
  <section v-if="collection" class="listing" :class="{ 'listing-prod': route.meta.isProductPage }">
    <div class="listing--content" :class="{ 'listing--content-prod': route.meta.isProductPage }">
      <h2 v-if="route.meta.isProductPage" class="listing--title">You might also like</h2>
      <ul class="listing--list">
        <UICard
          v-for="item in limit(collection, LISTING_MAX)"
          :key="item.id"
          :id="item.id"
          :img="item.img"
          :big-img="item.bigImg"
          :alt="item.alt"
          :title="item.title"
          :price="item.price"
        ></UICard>
      </ul>
      <UIButton @click="router.push({ name: 'collection' })" class="listing--button"
        >View collection</UIButton
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.listing {
  @include size(100%, auto);
  padding-block: 28px 40px;

  &-prod {
    @include media_md {
      padding-block: 18px 40px;
    }
  }

  &--content {
    @extend %sizing;
    @include flex(column, start, center, 48px);

    @include media_xl {
      gap: 35px;
    }

    &-prod {
      gap: 32px;

      @include media_md {
        gap: 20px;
      }
    }
  }

  &--title {
    width: 100%;
    @include h2($dark-primary, left);

    @include media_md {
      @include h4($dark-primary, left);
    }
  }

  &--list {
    @include size(100%, auto);
    list-style-type: none;
    @extend %grid;
  }

  .card {
    @include size(100%, auto);
    @include flex(column, start, stretch, 8px);

    &--image {
      @include size(100%, 375px);
      @extend %pic;
      margin-bottom: 16px;
    }

    &--title {
      @include h4($dark-primary, left);
    }

    &--price {
      @include large($dark-primary, left);
    }
  }

  &--button {
    @include media_sm {
      width: 100%;
    }
  }
}
</style>
