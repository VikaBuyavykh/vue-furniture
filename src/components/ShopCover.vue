<script setup>
import UIContainer from '@/components/UI/UIContainer.vue'
</script>

<template>
  <section class="cover">
    <UIContainer
      class="cover--content"
      title="Luxury homeware for people who love timeless design quality"
      text="Shop the new Spring 2022 collection today"
      button-text="View collection"
    />
    <div class="cover--background"></div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.cover {
  @include size(100%, auto);
  padding: 130px 5%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @include media_sm {
    max-width: inherit;
    padding: 0;
    grid-template: repeat(2, minmax(304px, max-content)) / 1fr;
  }

  &--background {
    position: absolute;
    inset: 0;
    background-image: url('@/images/background/cover.jpg');
    @extend %bgi;

    @include media_sm {
      position: inherit;
    }
  }

  &--content {
    max-width: 630px;
    grid-column-start: 2;
    z-index: 1;

    @include media_lg {
      max-width: inherit;
      grid-column: 1 / span 2;
    }

    @include media_sm {
      grid-column: unset;
    }
  }
}
</style>
