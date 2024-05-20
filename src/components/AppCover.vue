<script setup>
import AppButton from '@/components/UI/AppButton.vue'
import router from '@/router'
</script>

<template>
  <section class="cover">
    <div class="cover__container">
      <div class="cover__content">
        <h2 class="cover__title">Luxury homeware for people who love timeless design quality</h2>
        <p class="cover__decs">Shop the new Spring 2022 collection today</p>
        <app-button @click="() => router.push('/collection')" class="cover__btn"
          >View collection</app-button
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.cover {
  @include size(100%, auto);
  background-image: url('@/images/cover.jpg');
  @extend %bgi;
  padding-block: 80px;

  &__container {
    @extend %sizing;

    .cover__content {
      margin-left: auto;
      background-color: #fff;
      @include size(50%, 444px);
      @include flex(column, start, start, 20px);
      padding: 47px 60px;

      .cover__title {
        @extend %h2;
      }

      .cover__decs {
        @extend %body-large;
      }

      .cover__btn {
        margin-top: auto;
      }
    }
  }
}
</style>
