<script setup></script>

<template>
  <section class="section-title">
    <h2 class="section-title--headline">All products</h2>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.section-title {
  @include size(100%, auto);
  padding-block: 123px 36px;
  background-image: url('@/images/background/title.jpg');
  @extend %bgi;

  @include media_md {
    padding-top: 63px;
  }

  &--headline {
    @extend %sizing;
    @include h1($white, left);

    @include media_md {
      text-align: center;
    }
  }
}
</style>
