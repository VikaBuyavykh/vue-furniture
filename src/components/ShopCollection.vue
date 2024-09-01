<script setup>
import { limit } from '@/utils/limit.js'
import ShopFilters from '@/components/ShopFilters.vue'
import ShopSelects from '@/components/ShopSelects.vue'
import UICard from '@/components/UI/UICard.vue'
import UIButton from '@/components/UI/UIButton.vue'
import UINotFoundBox from '@/components/UI/UINotFoundBox.vue'

defineProps({
  filteredCollection: Array,
  cardsAmount: Number,
  isMoreDisabled: Boolean,
  isSelectsPopupOpen: Boolean
})

defineEmits(['toggleSelectsPopup', 'closeSelectsPopup', 'more'])
</script>

<template>
  <section v-if="filteredCollection" class="collection" @click="$emit('closeSelectsPopup')">
    <div class="collection--content">
      <ShopFilters class="collection--filters" />
      <div class="collection--list-box">
        <ShopSelects
          class="collection--selects"
          :is-selects-popup-open="isSelectsPopupOpen"
          @toggle-selects-popup="$emit('toggleSelectsPopup')"
          @close-selects-popup="$emit('closeSelectsPopup')"
        />
        <template v-if="filteredCollection.length > 0">
          <ul class="collection--list">
            <UICard
              v-for="item in limit(filteredCollection, cardsAmount)"
              :key="item.id"
              :id="item.id"
              :img="item.img"
              :big-img="item.bigImg"
              :alt="item.alt"
              :title="item.title"
              :price="item.price"
            />
          </ul>
          <UIButton v-if="!isMoreDisabled" @click="$emit('more')" class="collection--button"
            >Load more</UIButton
          >
        </template>
        <UINotFoundBox v-else
          >Nothing found for your query. You can try to change parameters</UINotFoundBox
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.collection {
  @include size(100%, auto);
  @include flex(column, start, stretch, 0px);

  &--content {
    @extend %sizing;
    padding-block: 36px;
    display: grid;
    grid-template-columns: 1fr 3fr;

    @include media_md {
      grid-template-columns: 1fr;
      padding-block: 20px 24px;
    }
  }

  &--filters {
    @include media_md {
      display: none;
    }
  }

  &--list-box {
    @include size(100%, auto);
    @include flex(column, start, center, 32px);
  }

  &--selects {
    @include size(100%, auto);
    display: none;

    @include media_md {
      display: grid;
      margin-block-end: 20px;
    }
  }

  &--list {
    @include size(100%, auto);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 36px 20px;
    list-style-type: none;

    @include media_lg {
      grid-template-columns: repeat(2, 1fr);
    }

    @include media_md {
      gap: 20px;
    }
  }

  &--button {
    @include media_md {
      margin-block-start: 20px;
      width: 100%;
    }
  }
}
</style>
