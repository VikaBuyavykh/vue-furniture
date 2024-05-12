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
  padding: 67px 79px;

  &__title {
    margin: 0 auto;
    @extend %tagline;
    @include size(60%, auto);
  }
}
</style>
