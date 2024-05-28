<script setup>
import features from '@/utils/features'

defineProps({
  page: String
})
</script>

<template>
  <section
    class="features"
    :class="{ features_about: page === 'about', features_listing: page === 'listing' }"
  >
    <div class="features__container">
      <h3 class="features__title">What makes our brand different</h3>
      <ul
        class="features__list"
        :class="{
          features__list_about: page === 'about',
          features__list_listing: page === 'listing'
        }"
      >
        <li
          v-for="item in features"
          :key="item.name"
          class="features__list-item"
          :class="{
            'features__list-item_about': page === 'about',
            'features__list-item_listing': page === 'listing'
          }"
        >
          <img class="features__list-item-img" :src="item.img" :alt="item.alt" />
          <h4
            class="features__list-item-title"
            :class="{ 'features__list-item-title_about': page === 'about' }"
          >
            {{ item.name }}
          </h4>
          <p
            class="features__list-item-desc"
            :class="{ 'features__list-item-desc_about': page === 'about' }"
          >
            {{ item.text }}
          </p>
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
  padding-block: 2.5rem 5rem;

  @include media_md {
    padding-block: 0.25rem;
  }

  &_about {
    padding-block: 1rem 4.5rem;

    @include media_md {
      padding-block: 1.125rem 2.875rem;
    }
  }

  &_listing {
    padding-block: 2.25rem 5rem;

    @include media_md {
      padding-block: 0.25rem 3.25rem;
    }
  }

  &__container {
    @extend %sizing;
    @include flex(column, start, center, 2.25rem);
    padding-top: 2.75rem;

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
        gap: 1.5rem;
      }

      &_about {
        @include media_md {
          gap: 2.25rem;
        }
      }

      &_listing {
        @include media_md {
          gap: 1.5rem;
        }
      }

      &-item {
        background-color: $light-grey;
        padding: 2.75rem 3rem 3rem;
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
        }

        &_listing {
          gap: 1rem;

          @include media_md {
            gap: 0.875rem;
          }
        }

        &-img {
          @include size(1.5rem, 1.5rem);
        }

        &-title {
          @extend %h4;

          &_about {
            @include media_md {
              font-size: 1rem;
              line-height: 1.4rem;
            }
          }
        }

        &-desc {
          @extend %body-medium;

          &_about {
            @include media_md {
              font-size: 0.875rem;
              line-height: 1.3125rem;
            }
          }
        }
      }
    }
  }
}
</style>
