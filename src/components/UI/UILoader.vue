<script setup></script>

<template>
  <div class="loader">
    <span class="loader--content"></span>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.loader {
  position: fixed;
  inset: 0;
  background-color: rgba($dark-primary, 0.2);
  @include flex(row, center, center, 0);

  &--content {
    @include size(56px, 56px);
    display: inline-block;
    position: relative;
    background: rgba($primary, 0.6);
    box-sizing: border-box;
    animation: flipX 1s linear infinite;

    @include media_md {
      @include size(36px, 36px);
    }
  }
}

@keyframes flipX {
  0% {
    transform: perspective(200px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(200px) rotateX(-180deg) rotateY(0deg);
  }
  100% {
    transform: perspective(200px) rotateX(-180deg) rotateY(-180deg);
  }
}
</style>
