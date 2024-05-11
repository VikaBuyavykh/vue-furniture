<script setup>
import AppButton from '@/components/UI/AppButton.vue'
import products from '@/utils/products'
</script>

<template>
  <section class="products">
    <div class="products__container">
      <ul class="products__list">
        <li v-for="item in products" :key="item.name" class="products__list-item">
          <img class="products__list-item-img" :src="item.img" :alt="item.alt" />
          <div class="products__list-item-text">
            <h4 class="products__list-item-name">{{ item.name }}</h4>
            <p class="products__list-item-price">{{ item.price }}</p>
          </div>
        </li>
      </ul>
      <app-button>View collection</app-button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.products {
  @include size(100%, auto);
  padding-block: 28px 40px;

  &__container {
    @extend %sizing;
    @include flex(column, start, center, 48px);

    .products__list {
      list-style-type: none;
      @include size(100%, auto);
      display: grid;
      @extend %grid;

      &-item {
        @include size(100%, auto);
        display: grid;
        grid-template-rows: 375px auto;
        gap: 24px;

        &-img {
          @include size(100%, 100%);
          @extend %pic;
        }

        &-text {
          @include flex(column, start, start, 8px);

          .products__list-item-name {
            @extend %h4;
          }

          .products__list-item-price {
            @extend %body-large;
          }
        }
      }
    }
  }
}
</style>
