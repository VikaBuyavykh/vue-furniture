<script setup></script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.btn {
  @extend %resetInputsAndBtns;
  background-color: $light-grey;
  padding: 16px 32px;
  @extend %body-medium;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 2px 2px 10px rgba(grey, 0.2);
  }
}
</style>
