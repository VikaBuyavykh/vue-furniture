<script setup>
defineProps({
  theme: {
    type: String
  }
})
</script>

<template>
  <button
    class="button"
    :class="{
      'button-theme-dark': theme === 'dark',
      'button-theme-contrast': theme === 'contrast',
      'button-theme-contrastDark': theme === 'contrast-dark'
    }"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.button {
  margin-top: auto;
  padding: 16px 32px;
  @extend %resetInputsAndBtns;
  background-color: $light-gray;
  @include medium($dark-primary, center);
  text-wrap: nowrap;
  cursor: pointer;
  @include hoverDarken($light-gray, 15%);

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &-theme {
    &-dark {
      background-color: rgba(#f9f9f9, 0.15);
      color: $white;
      @include hoverDarken($light-gray, 50%);
    }

    &-contrast {
      background-color: $dark-primary;
      color: $white;
      @include hoverDarken($light-gray, 50%);
    }

    &-contrastDark {
      background-color: $white;
      color: $dark-primary;
      @include hoverDarken($light-gray, 50%);
    }
  }
}
</style>
