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
      <ul class="features__list" :class="{ features__list_about: page === 'about' }">
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
  padding-block: 5rem;

  @include media_md {
    padding-block: 0.25rem;
  }

  &_about {
    padding-block: 3.75rem 4.25rem;

    @include media_md {
      padding-bottom: 2.75rem;
    }
  }

  &__container {
    @extend %sizing;
    @include flex(column, start, center, 2.25rem);

    @include media_sm {
      gap: 2.25rem;
    }

    .features__title {
      @extend %h3;
      margin-right: 1rem;

      @include media_md {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }

      @include media_sm {
        align-self: start;
        width: 79.8%;
      }
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
        gap: 1.875rem;
      }

      &_about {
        @include media_md {
          gap: 2.25rem;
        }
      }

      &-item {
        background-color: $light-grey;
        padding: 3rem;
        @include flex(column, start, start, 0.75rem);

        @include media_sm {
          padding: 2.25rem 1.5rem;
        }

        &_about {
          background-color: transparent;
          padding: 1rem 0.5rem;

          @include media_md {
            padding: 0;
            gap: 0.875rem;
          }

          .features__list-item-title {
            font-size: 1rem;
            line-height: 1.4rem;
          }

          .features__list-item-desc {
            font-size: 0.875rem;
            line-height: 1.3125rem;
          }
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
