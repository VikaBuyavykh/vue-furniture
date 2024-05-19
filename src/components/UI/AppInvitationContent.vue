<script setup>
import AppEmailInput from '@/components/UI/AppEmailInput.vue'
defineProps({
  listing: Boolean
})
</script>

<template>
  <div class="invitation-content" :class="{ 'invitation-content_listing': listing }">
    <h2 class="invitation-content__title" :class="{ 'invitation-content__title_listing': listing }">
      Join the club and get the benefits
    </h2>
    <p class="invitation-content__desc" :class="{ 'invitation-content__desc_listing': listing }">
      Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores
      and more
    </p>
    <slot></slot>
    <app-email-input :class="{ 'invitation-content__input': listing }"></app-email-input>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.invitation-content {
  @extend %sizing;
  max-width: 494px;
  @include flex(column, start, center, 0px);

  &_listing {
    align-items: start;
    gap: 21px;
    @include size(100%, 100%);
    max-width: unset;
  }

  .invitation-content__title {
    @extend %h2;
    color: white;
    text-align: center;
    margin-bottom: 12px;

    &_listing {
      color: $medium-blue;
      text-align: left;
      margin-bottom: 0;
    }
  }

  .invitation-content__desc {
    @include size(95%, auto);
    @extend %body-large;
    color: white;
    text-align: center;

    &_listing {
      color: $medium-blue;
      text-align: left;
    }
  }

  .invitation-content__input {
    margin-top: auto;
  }
}
</style>
