<script setup>
import introBigImg from '@/images/background/introBig.jpg'
import introImg from '@/images/background/intro.jpg'
import UIContainer from '@/components/UI/UIContainer.vue'
</script>

<template>
  <section class="intro">
    <div class="intro--content">
      <UIContainer
        title="It started with a small idea"
        text="A global brand with local beginnings, our story begain in a small studio in South London in early 2014"
        button-text="View collection"
        theme="dark"
      ></UIContainer>
      <picture class="intro--image">
        <source :srcset="introImg" media="(max-width: 1000px)" />
        <img :src="introBigImg" alt="Interior" />
      </picture>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.intro {
  @include size(100%, auto);
  padding-block: 60px;

  @include media_sm {
    padding-block: 24px 34px;
  }

  &--content {
    @extend %sizing;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    @include media_md {
      grid-template: repeat(2, auto) / 1fr;
      gap: 24px;
    }
  }

  &--image {
    @include size(100%, 475px);

    @include media_md {
      height: 264px;
    }

    img {
      @include size(100%, 100%);
      @extend %pic;
    }
  }
}
</style>
