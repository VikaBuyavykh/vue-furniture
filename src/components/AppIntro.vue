<script setup>
import AppButton from '@/components/UI/AppButton.vue'
import router from '@/router'
</script>

<template>
  <section class="intro">
    <div class="intro__container">
      <div class="intro__card">
        <h3 class="intro__title">It started with a small idea</h3>
        <p class="intro__text">
          A global brand with local beginnings, our story begain in a small studio in South London
          in early 2014
        </p>
        <app-button @click="() => router.push('collection')" class="intro__btn"
          >View collection</app-button
        >
      </div>
      <img class="intro__img" src="@/images/intro.jpg" alt="Decorated room's picture" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.intro {
  @include size(100%, auto);
  padding-block: 3.75rem;

  @include media_md {
    padding-block: 2rem;
  }

  &__container {
    @extend %sizing;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 478px;
    gap: 1rem;

    @include media_md {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, minmax(min-content, max-content));
      gap: 1.5rem;
    }

    .intro__card {
      background-color: $medium-blue;
      @include size(100%, auto);
      padding: 64px 75px 54px 64px;
      @include flex(column, start, start, 0.75rem);

      @include media_md {
        padding: 2.25rem 2rem 1.875rem;
      }

      .intro__title {
        @extend %intro-head;

        @include media_md {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
      }

      .intro__text {
        @extend %intro-text;

        @include media_md {
          font-size: 0.875rem;
          line-height: 1.3125rem;
        }
      }

      .intro__btn {
        margin-top: auto;
        background-color: rgba($light-grey, 0.15);
        color: white;
        transition: all 0.2s ease;

        @include media_md {
          margin-top: 2.75rem;
        }

        @include media_xs {
          width: 100%;
        }

        &:hover {
          background-color: rgba($light-grey, 0.35);
        }
      }
    }

    .intro__img {
      @include size(100%, 100%);
      @extend %pic;

      @include media_md {
        height: 259px;
      }
    }
  }
}
</style>
