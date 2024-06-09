<script setup>
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/products'
import filters from '@/utils/filters'

defineProps({
  main: Boolean
})

const product = useProductStore()
const { priceFilterValue, designerFilterValue, typeFilterValue } = storeToRefs(product)

function resetPrice(e) {
  if (e.currentTarget.value === priceFilterValue.value) {
    priceFilterValue.value = ''
  }
}
</script>

<template>
  <form class="filters" :class="{ filters_popup: !main }">
    <fieldset class="filters__item">
      <h5 @click="() => console.log(main)" class="filters__item-title">{{ filters[0].title }}</h5>
      <div class="filters__item-box">
        <label v-for="item in filters[0].values" :key="item" class="filters__label">
          <input
            class="visually-hidden"
            :type="filters[0].type"
            :name="filters[0].name"
            :value="item"
            v-model="typeFilterValue"
          />
          <span></span>
          {{ item }}
        </label>
      </div>
    </fieldset>
    <fieldset class="filters__item">
      <h5 class="filters__item-title">{{ filters[1].title }}</h5>
      <div class="filters__item-box">
        <label v-for="item in filters[1].values" :key="item" class="filters__label">
          <input
            @click="resetPrice"
            class="visually-hidden"
            :type="filters[1].type"
            :name="filters[1].name"
            :value="item"
            v-model="priceFilterValue"
          />
          <span></span>
          {{ item }}
        </label>
      </div>
    </fieldset>
    <fieldset class="filters__item">
      <h5 class="filters__item-title">{{ filters[2].title }}</h5>
      <div class="filters__item-box">
        <label v-for="item in filters[2].values" :key="item" class="filters__label">
          <input
            class="visually-hidden"
            :type="filters[2].type"
            :name="filters[2].name"
            :value="item"
            v-model="designerFilterValue"
          />
          <span></span>
          {{ item }}
        </label>
      </div>
    </fieldset>
  </form>
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

.filters {
  @include size(100%, auto);
  margin-top: 0.75rem;
  @include flex(column, start, start, 3rem);

  @include media_md {
    display: none;
  }

  &_popup {
    display: none;

    @include media_md {
      display: flex;
    }
  }

  &__item {
    @include size(100%, auto);
    @include flex(column, start, start, 1.25rem);
    @extend %resetInputsAndBtns;

    &-title {
      @extend %h5;
    }

    &-box {
      @include size(100%, auto);
      @include flex(column, start, start, 0.75rem);

      .filters__label {
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
</style>
