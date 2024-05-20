<script setup>
defineProps({
  theme: String
})
</script>

<template>
  <form class="email-form">
    <input
      class="email-input"
      :class="{ 'email-input_dark': theme === 'dark' }"
      type="email"
      name="email"
      id="email"
      placeholder="your@email.com"
    />
    <button class="email-btn" :class="{ 'email-btn_dark': theme === 'dark' }" type="submit">
      Sign up
    </button>
  </form>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.email-form {
  @include size(95%, auto);
  display: grid;
  grid-template-columns: auto max-content;

  .email-input {
    @extend %resetInputsAndBtns;
    background-color: #fff;
    padding: 1rem 2rem;
    @extend %body-medium;

    &::placeholder {
      color: rgba($medium-blue, 0.2);
    }

    &_dark {
      background-color: rgba(white, 0.15);
      color: white;

      &::placeholder {
        color: white;
      }
    }
  }

  .email-btn {
    @extend %resetInputsAndBtns;
    padding: 1rem 2rem;
    background-color: $medium-blue;
    @extend %body-medium;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: $violet;
    }

    &_dark {
      background-color: #fff;
      color: $medium-blue;

      &:hover {
        color: white;
      }
    }
  }
}
</style>
