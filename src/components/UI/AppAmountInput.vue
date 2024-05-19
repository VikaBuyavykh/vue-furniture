<script setup></script>

<template>
  <div class="product__input-box">
    <button type="button">-</button>
    <input type="number" name="amout" id="amount" value="1" />
    <button type="button">+</button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.product__input-box {
  @include flex(row, start, center, 25px);
  padding: 0.75rem 1rem;
  background-color: white;

  input,
  button {
    @extend %resetInputsAndBtns;
    @extend %ordinary;
  }

  input {
    @include size(22px, auto);
    color: $medium-blue;
  }

  button {
    color: $border-grey;
  }
}
</style>
