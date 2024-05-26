<script setup></script>

<template>
  <section class="tagline">
    <h2 class="tagline__title">
      A brand built on the love of craftmanship, quality and outstanding customer service
    </h2>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.tagline {
  @include size(100%, auto);
  padding-block: 4.25rem 5rem;

  @include media_lg {
    padding-block: 2rem;
  }

  &__title {
    margin: 0 auto;
    @extend %tagline;
    @include size(50%, auto);

    @include media_lg {
      width: 88%;
      font-size: 2rem;
      line-height: 2.8rem;
    }

    @include media_md {
      text-align: left;
    }
  }
}
</style>
