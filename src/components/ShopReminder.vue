<script setup>
import { ref } from 'vue'
import deliveryImage from '@/images/icons/delivery-white.svg'

const isReminderOpened = ref(true)
function closeReminder() {
  isReminderOpened.value = false
}
</script>

<template>
  <Transition name="fade">
    <section v-if="isReminderOpened" class="reminder">
      <img class="reminder--image" :src="deliveryImage" alt="Icon of delivery" />
      <p class="reminder--text">Free delivery on all orders over £50 with code easter checkout</p>
      <svg
        @click="closeReminder"
        class="reminder--close"
        alt="Icon of close button"
        viewBox="0 0 32 32"
        fill="none"
      >
        <use href="/src/images/icons/close.svg#svg" />
      </svg>
    </section>
  </Transition>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.reminder {
  @include size(100%, 100%);
  background-color: $dark-primary;
  padding-block: 11px;
  @include flex(row, center, center, 8px);
  position: relative;

  @include media_md {
    justify-content: start;
    padding-inline-start: 10px;
    padding-block: 7px;
  }

  &--image {
    @include size(16px, 16px);
  }

  &--text {
    @include small($white, left);
    max-width: 70%;
  }

  &--close {
    color: white !important;
    @include size(16px, 16px);
    position: absolute;
    right: 10px;
    cursor: pointer;
    @extend %hoverOpacity;
  }
}
</style>
