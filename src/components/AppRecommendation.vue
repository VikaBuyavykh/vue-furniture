<script setup>
import { useProductStore } from '@/stores/products'
import AppButton from '@/components/UI/AppButton.vue'
import AppCard from '@/components/UI/AppCard.vue'
import router from '@/router'

const product = useProductStore()
</script>

<template>
  <section class="recommendation">
    <div class="recommendation__container">
      <h3 class="recommendation_title">You might also love these</h3>
      <ul class="recommendation_list">
        <app-card
          v-for="item in product.products.filter((item) => item.section === 'recommendation')"
          :key="item.id"
          :id="item.id"
          :img="item.img"
          :alt="item.alt"
          :name="item.name"
          :price="item.price"
          :horizontal="item.horizontal"
          place="listing"
        ></app-card>
      </ul>
      <app-button @click="() => router.push('/collection')" class="recommendation__btn"
        >See collection</app-button
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.recommendation {
  @include size(100%, auto);
  padding-block: 4rem 3rem;

  @include media_md {
    padding-block: 3rem 2.375rem;
  }

  &__container {
    @extend %sizing;
    @include flex(column, start, stretch, 0px);

    @include media_md {
      width: 100%;
    }

    .recommendation_title {
      @extend %h2;
      color: $medium-blue;

      @include media_md {
        font-size: 1.25rem;
        line-height: 1.5375rem;
        width: 90%;
        margin-inline: auto;
      }

      @include media_xs {
        width: 88%;
      }
    }

    .recommendation_list {
      list-style-type: none;
      @include size(100%, auto);
      @extend %grid;
      grid-template-columns: repeat(4, minmax(200px, 1fr));
      margin-block: 1.5rem 2.75rem;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        height: 0;
      }

      @include media_md {
        margin-block: 2.25rem 2rem;
        padding-inline: 1.5rem;
      }
    }

    .recommendation__btn {
      align-self: center;
      transition: all 0.2s ease;

      @include media_xs {
        width: 88%;
        margin-inline: auto;
        align-self: stretch;
      }

      &:hover {
        background-color: rgba($violet, 0.2);
      }
    }
  }
}
</style>
