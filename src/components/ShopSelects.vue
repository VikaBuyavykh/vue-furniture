<script setup>
import { computed, toRefs } from 'vue'
import { useFiltersStore } from '@/stores/filters.js'
import ShopFilters from '@/components/ShopFilters.vue'

defineProps({
  isSelectsPopupOpen: Boolean
})

defineEmits(['toggleSelectsPopup', 'closeSelectsPopup'])

const { sortingValue } = toRefs(useFiltersStore())

const closeIcon = computed(() => {
  return new URL(`/src/images/icons/close.svg#svg`, import.meta.url).href
})
</script>

<template>
  <form class="selects">
    <div class="selects--item-wrapper">
      <button @click.stop="$emit('toggleSelectsPopup')" class="selects--item" type="button">
        Filters &#9207;
      </button>
      <Transition name="fade">
        <div @click.stop v-if="isSelectsPopupOpen" class="selects--popup">
          <ShopFilters />
          <svg
            @click="$emit('closeSelectsPopup')"
            class="selects--close"
            alt="Icon of close button"
            viewBox="0 0 32 32"
            fill="none"
          >
            <use :href="closeIcon" />
          </svg>
        </div>
      </Transition>
    </div>
    <div class="selects--item-wrapper">
      <select class="selects--item selects--item-normal" v-model="sortingValue">
        <option value="initial">Sorting &#9207;</option>
        <option value="higher">To hign price</option>
        <option value="lower">To low price</option>
      </select>
    </div>
  </form>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.selects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  &--item-wrapper {
    @include size(100%, auto);
    position: relative;
    @include flex(row, center, center, 0);
    background-color: $light-gray;
    padding-block: 16px;
  }

  &--item {
    cursor: pointer;
    @extend %resetInputsAndBtns;
    @include medium($dark-primary, center);

    &-normal {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      option {
        text-align: center;
      }
    }
  }

  &--popup {
    position: absolute;
    bottom: 0;
    top: calc(100% + 16px);
    @include size(100%, max-content);
    max-height: 50vh;
    padding: 24px 16px 32px;
    background-color: $light-gray;
    overflow-y: scroll;
  }

  &--close {
    position: absolute;
    top: 16px;
    right: 16px;
    @include size(16px, 16px);
    cursor: pointer;
    @extend %hoverOpacity;
  }
}
</style>
