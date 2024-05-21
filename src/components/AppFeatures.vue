<script setup>
import features from '@/utils/features'

defineProps({
  page: String
})
</script>

<template>
  <section class="features" :class="{ features_about: page === 'about' }">
    <div class="features__container">
      <h3 class="features__title">What makes our brand different</h3>
      <ul class="features__list">
        <li
          v-for="item in features"
          :key="item.name"
          class="features__list-item"
          :class="{ 'features__list-item_about': page === 'about' }"
        >
          <img class="features__list-item-img" :src="item.img" :alt="item.alt" />
          <h4 class="features__list-item-title">{{ item.name }}</h4>
          <p class="features__list-item-desc">{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.features {
  @include size(100%, auto);
  padding-block: 80px;

  @include media_md {
    padding-block: 48px;
  }

  &_about {
    padding-block: 60px 86px;
  }

  &__container {
    @extend %sizing;
    @include flex(column, start, center, 36px);

    .features__title {
      @extend %h3;
    }

    .features__list {
      @include size(100%, auto);
      @extend %grid;

      @include media_lg {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
      }

      @include media_sm {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 1fr);
      }

      &-item {
        background-color: $light-grey;
        padding: 48px;
        @include flex(column, start, start, 12px);

        &_about {
          background-color: transparent;
        }

        &-img {
          @include size(1.5rem, 1.5rem);
        }

        &-title {
          @extend %h4;
        }

        &-desc {
          @extend %body-medium;
        }
      }
    }
  }
}
</style>
