<script setup>
import AppCard from '@/components/UI/AppCard.vue'
import collection from '@/utils/collection'
import AppButton from '@/components/UI/AppButton.vue'
import filters from '@/utils/filters'
</script>

<template>
  <main class="collection">
    <section class="collection__cover">
      <h2 class="collection__cover-title">All products</h2>
    </section>
    <section class="collection__content">
      <form class="collection__filters">
        <fieldset v-for="filter in filters" :key="filter.filter" class="collection__filter">
          <h5 class="collection__filter-title">{{ filter.filter }}</h5>
          <div class="collection__filter-box">
            <label v-for="value in filter.values" :key="value" class="collection__label">
              <input
                class="visually-hidden"
                :type="filter.type"
                :name="filter.name"
                :value="value"
              />
              <span></span>
              {{ value }}
            </label>
          </div>
        </fieldset>
      </form>
      <div class="collection__list-box">
        <ul class="collection__list">
          <app-card
            v-for="item in collection"
            :key="item.img"
            :img="item.img"
            :alt="item.alt"
            :name="item.name"
            :price="item.price"
            :horizontal="item.horizontal"
          ></app-card>
        </ul>
        <app-button class="collection__btn">Load more</app-button>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
}

.collection {
  @include size(100%, auto);
  @include flex(column, start, stretch, 0px);

  &__cover {
    @include size(100%, 209px);
    background-image: url('@/images/products.jpg');
    @extend %bgi;
    padding-block: 2.25rem;
    @include flex(row, start, end, 0px);

    &-title {
      @extend %sizing;
      @extend %h1;
    }
  }

  &__content {
    @extend %sizing;
    padding-block: 2.25rem;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1.25rem;

    .collection__filters {
      @include size(100%, auto);
      margin-top: 0.75rem;
      @include flex(column, start, start, 3rem);

      .collection__filter {
        @include size(100%, auto);
        @include flex(column, start, start, 1.25rem);
        @extend %resetInputsAndBtns;

        &-title {
          @extend %h5;
        }

        &-box {
          @include size(100%, auto);
          @include flex(column, start, start, 0.75rem);

          .collection__label {
            @extend %body-medium;
            @include flex(row, start, center, 0.75rem);
            cursor: pointer;
            transition: all 0.2s ease;

            &:hover {
              opacity: 0.6;
              text-decoration: underline;
            }

            span {
              @include size(1rem, 1rem);
              border: 1px solid #dcdcdc;
              border-radius: 2px;
              transition: all 0.2s ease;
            }

            input[type='checkbox']:checked + span,
            input[type='radio']:checked + span {
              background-image: url('/stick.svg');
              @extend %bgi;
              border: none;
            }

            input[type='checkbox']:hover + span,
            input[type='radio']:hover + span {
              border-color: rgba($violet, 0.8);
            }
          }
        }
      }
    }

    .collection__list-box {
      @include size(100%, auto);
      @include flex(column, start, center, 2rem);

      .collection__list {
        @include size(100%, auto);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(auto-fit, 1fr);
        gap: 2.25rem 1.25rem;
      }

      .collection__btn {
        transition: all 0.2s ease;

        &:hover {
          background-color: rgba($violet, 0.2);
        }
      }
    }
  }
}
</style>
