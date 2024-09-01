<script setup>
import { checkInputValidity } from '@/utils/checkInputValidity.js'
import { checkFormValidity } from '@/utils/checkFormValidity.js'
import UIButton from '@/components/UI/UIButton.vue'

defineProps({
  theme: {
    type: String
  },
  formName: String
})

defineEmits(['subscribe'])

const subs = defineModel('subs')
</script>

<template>
  <form
    @input="checkFormValidity($event)"
    @submit.prevent="$emit('subscribe', $event)"
    :name="formName"
    class="email-input"
  >
    <input
      @input="checkInputValidity"
      :id="formName"
      class="email-input--input"
      :class="{ 'email-input--input-theme-contrastDark': theme === 'contrast-dark' }"
      type="email"
      name="email"
      minlength="2"
      required
      placeholder="your@email.com"
      v-model="subs"
    />
    <span :id="formName + '-error'" class="email-input--error"></span>
    <UIButton disabled type="submit" :theme="theme">Sign up</UIButton>
  </form>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.email-input {
  @include size(100%, auto);
  display: grid;
  grid-template-columns: 1fr auto;
  position: relative;

  &--input {
    @extend %resetInputsAndBtns;
    min-width: 100px;
    padding-inline: 32px;
    @include medium($dark-primary, left);
    background-color: $light-gray;

    &::placeholder {
      color: rgba($dark-primary, 0.2);
    }

    &-theme {
      &-contrastDark {
        background-color: rgba($white, 0.15);
        color: $white;

        &::placeholder {
          color: inherit;
        }
      }
    }
  }

  &--error {
    position: absolute;
    bottom: 0.5px;
    left: 16px;
    @include h6(coral, right);
  }
}
</style>
