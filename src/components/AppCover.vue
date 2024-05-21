<script setup>
import AppButton from '@/components/UI/AppButton.vue'
import router from '@/router'
</script>

<template>
  <section class="cover">
    <div class="cover__img"></div>
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
  padding-block: 80px;
  position: relative;

  @include media_md {
    @include flex(column, start, stretch, 0);
    padding: 0;
  }

  &__img {
    position: absolute;
    inset: 0;
    background-image: url('@/images/cover.jpg');
    @extend %bgi;
    z-index: 1;

    @include media_md {
      position: unset;
      @include size(100%, 304px);
      order: 2;
    }
  }

  &__container {
    @extend %sizing;
    position: relative;
    z-index: 2;

    .cover__content {
      margin-left: auto;
      background-color: #fff;
      @include size(50%, 444px);
      @include flex(column, start, start, 20px);
      padding: 47px 60px;

      @include media_lg {
        height: fit-content;
      }

      @include media_md {
        width: 100%;
        padding: 47px 0px 32px;
      }

      .cover__title {
        @extend %h2;
      }

      .cover__decs {
        @extend %body-large;
      }

      .cover__btn {
        margin-top: auto;
        transition: all 0.2s ease;

        @include media_xs {
          width: 100%;
        }

        &:hover {
          background-color: rgba($violet, 0.2);
        }
      }
    }
  }
}
</style>
