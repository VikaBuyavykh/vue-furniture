<script setup>
import { useRoute } from 'vue-router'
import features from '@/utils/features.js'

const route = useRoute()
</script>

<template>
  <section class="features" :class="{ 'features-about': route.meta.isAboutPage }">
    <div
      class="features--content"
      :class="{
        'features--content-prod': route.meta.isProductPage,
        'features--content-about': route.meta.isAboutPage
      }"
    >
      <h3 class="features--title">What makes our brand different</h3>
      <ul
        class="features--list"
        :class="{ 'features--list-prodNabout': route.meta.isProductPage || route.meta.isAboutPage }"
      >
        <li
          v-for="feature in features"
          :key="feature.title"
          class="features--item"
          :class="{
            'features--item-tranparentBg': route.meta.isProductPage || route.meta.isAboutPage
          }"
        >
          <img class="features--item-icon" :src="feature.img" :alt="feature.alt" />
          <h4 class="features--item-title">{{ feature.title }}</h4>
          <p class="features--item-text">{{ feature.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.features {
  @include size(100%, auto);
  padding-block: 80px;

  @include media_sm {
    padding-block: 48px;
  }

  &-about {
    padding-block: 60px 75px;

    @include media_md {
      padding-block: 52px 32px;
    }
  }

  &--content {
    @extend %sizing;
    @include flex(column, start, stretch, 36px);

    &-prod {
      @include media_md {
        gap: 30px;
      }
    }

    &-about {
      gap: 44px;

      @include media_md {
        gap: 28px;
      }
    }
  }

  &--title {
    @include h3($dark-primary, center);

    @include media_sm {
      @include h4($dark-primary, left);
      width: 88%;
    }
  }

  &--list {
    @include size(100%, auto);
    list-style-type: none;
    @extend %grid;

    @include media_sm {
      grid-template: repeat(4, 1fr) / 1fr;
    }

    &-prodNabout {
      @include media_md {
        gap: 12px;
      }
    }
  }

  &--item {
    @include size(100%, auto);
    padding: 48px;
    background-color: $light-gray;
    @include flex(column, start, start, 12px);

    @include media_sm {
      padding: 40px 24px;
    }

    &-tranparentBg {
      padding: 8px;
      background-color: transparent;

      @include media_md {
        padding-inline: 0;
      }
    }

    &-icon {
      @include size(24px, 24px);
    }

    &-title {
      @include h4($dark-primary, left);
    }

    &-text {
      @include medium($dark-primary, left);
    }
  }
}
</style>
