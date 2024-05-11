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
}
</style>
