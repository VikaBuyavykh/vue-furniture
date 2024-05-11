<script setup>
import AppEmailInput from '@/components/UI/AppEmailInput.vue'
import benefits from '@/utils/benefits'
</script>

<template>
  <section class="invitation">
    <div class="invitation__content">
      <h2 class="invitation__title">Join the club and get the benefits</h2>
      <p class="invitation__desc">
        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores
        and more
      </p>
      <ul class="invitation__benefits">
        <li v-for="item in benefits" :key="item" class="invitation__benefit">
          <img class="invitation__benefit-icon" src="/checkmark-filled.svg" alt="Checkmark icon" />
          {{ item }}
        </li>
      </ul>
      <app-email-input></app-email-input>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.invitation {
  @include size(100%, auto);
  padding-block: 97px 86px;
  background-image: url('@/images/invitation.jpg');
  @extend %bgi;

  &__content {
    @extend %sizing;
    max-width: 494px;
    @include flex(column, start, center, 0px);

    .invitation__title {
      @extend %h2;
      color: white;
      text-align: center;
      margin-bottom: 12px;
    }

    .invitation__desc {
      @include size(95%, auto);
      @extend %body-large;
      color: white;
      text-align: center;
    }

    .invitation__benefits {
      margin-block: 30px 40px;
      list-style-type: none;
      @include flex(row, center, center, 36px);

      .invitation__benefit {
        @include flex(row, start, center, 4px);
        @extend %body-medium;
        color: white;

        &-icon {
          @include size(16px, 16px);
        }
      }
    }
  }
}
</style>
