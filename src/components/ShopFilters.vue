<script setup>
import { toRefs } from 'vue'
import { useFiltersStore } from '@/stores/filters.js'

const { filters } = toRefs(useFiltersStore())
const { resetPriceFilter } = useFiltersStore()
</script>

<template>
  <form class="filters">
    <fieldset v-for="filter in filters" :key="filter.name" class="filters--item">
      <h5 class="filters--item-title">{{ filter.title }}</h5>
      <div class="filters--item-box">
        <label v-for="item in filter.values" :key="item" class="filters--label">
          <input
            @click="resetPriceFilter(item)"
            class="visually-hidden"
            :type="filter.type"
            :name="filter.name"
            :value="item"
            v-model="filter.value"
          />
          <span></span>
          {{ item }}
        </label>
      </div>
    </fieldset>
  </form>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.filters {
  @include size(100%, auto);
  margin-top: 12px;
  @include flex(column, start, start, 48px);

  &--item {
    @include size(100%, auto);
    @include flex(column, start, start, 20px);
    @extend %resetInputsAndBtns;

    &-title {
      @include h5($dark-primary, left);
    }

    &-box {
      @include size(100%, auto);
      @include flex(column, start, start, 12px);
    }
  }

  &--label {
    @include medium($dark-primary, left);
    @include flex(row, start, center, 12px);
    cursor: pointer;
    @extend %hoverOpacity;

    span {
      @include size(16px, 16px);
      border: 1px solid #dcdcdc;
      border-radius: 2px;
      transition: all 0.2s ease;
    }

    input[type='checkbox']:checked + span,
    input[type='radio']:checked + span {
      background-image: url('@/images/icons/stick.svg');
      @extend %bgi;
      border: none;
    }

    input[type='checkbox']:hover + span,
    input[type='radio']:hover + span {
      border-color: rgba($violet, 0.8);
    }
  }
}
</style>
