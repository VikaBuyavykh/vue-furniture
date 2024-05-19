<script setup>
import AppCard from '@/components/UI/AppCard.vue'
import collection from '@/utils/collection'
import AppButton from '@/components/UI/AppButton.vue'
</script>

<template>
  <main class="collection">
    <section class="collection__cover">
      <h2 class="collection__cover-title">All products</h2>
    </section>
    <section class="collection__content">
      <div class="collection__filters">Filters</div>
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
        <app-button>Load more</app-button>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

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
    }
  }
}
</style>
