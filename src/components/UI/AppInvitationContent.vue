<script setup>
import { useFormStore } from '@/stores/form'
import AppEmailInput from '@/components/UI/AppEmailInput.vue'
import { storeToRefs } from 'pinia'

defineProps({
  listing: Boolean
})

const form = useFormStore()
const { errorText } = storeToRefs(form)
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
    <app-email-input :class="{ 'invitation-content__input': listing }" invitation></app-email-input>
    <span class="invitation-content__error">{{ errorText }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.invitation-content {
  @include size(88%, auto);
  max-width: 494px;
  margin-inline: auto;
  @include flex(column, start, center, 0px);

  @include media_md {
    align-items: start;
  }

  &_listing {
    align-items: start;
    gap: 1.5rem;
    @include size(100%, 100%);
    max-width: unset;

    @include media_md {
      width: 80%;
      margin-inline: auto;
    }

    @include media_sm {
      width: 100%;
      gap: 1rem;
    }
  }

  .invitation-content__title {
    @extend %h2;
    color: white;
    text-align: center;
    margin-bottom: 0.75rem;

    @include media_md {
      text-align: start;
      font-size: 1.5rem;
      line-height: 2.1rem;
    }

    &_listing {
      @extend %intro-head;
      text-align: start;
      color: $medium-blue;
      margin-bottom: 0;

      @include media_md {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    }
  }

  .invitation-content__desc {
    @include size(95%, auto);
    @extend %body-large;
    color: white;
    text-align: center;

    @include media_xl {
      width: 100%;
    }

    @include media_md {
      text-align: start;
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }

    &_listing {
      @extend %body-medium;
      color: $medium-blue;
      text-align: left;
      width: 80%;

      @include media_md {
        width: 100%;
      }
    }
  }

  .invitation-content__input {
    margin-top: auto;
    width: 82%;

    @include media_xl {
      width: 100%;
    }
  }

  .invitation-content__error {
    @extend %body-small;
    text-align: left;
    color: red;
    margin-top: 0.25rem;
    height: 1.25rem;
  }
}
</style>
