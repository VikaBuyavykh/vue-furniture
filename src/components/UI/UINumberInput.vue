<script setup>
import { NUMBER_INPUT_MIN } from '@/utils/constants.js'

const number = defineModel()
</script>

<template>
  <div class="amount">
    <button
      class="amount--button"
      @click.prevent="$emit('update:modelValue', number - 1)"
      :disabled="number === NUMBER_INPUT_MIN"
    >
      -
    </button>
    <input class="amount--input" type="number" v-model="number" />
    <button class="amount--button" @click.prevent="$emit('update:modelValue', number + 1)">
      +
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.amount {
  max-width: 122px;
  @include flex(row, start, center, 15px);
  background-color: $light-gray;
  padding: 12px;

  @include media_xl {
    max-width: none;
    width: 50%;
  }

  @include media_sm {
    width: 100%;
  }

  &--button {
    @extend %resetInputsAndBtns;
    @include medium($border-dark, left);
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: darken($border-dark, 100%);
    }

    &:disabled {
      pointer-events: none;
    }
  }

  &--input {
    @include size(100%, auto);
    @include medium($dark-primary, center);
    @extend %resetInputsAndBtns;
    @extend %deleteArrows;
  }
}
</style>
