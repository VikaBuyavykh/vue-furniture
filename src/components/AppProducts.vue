<script setup>
import AppButton from '@/components/UI/AppButton.vue'
import AppCard from '@/components/UI/AppCard.vue'
import router from '@/router'
import products from '@/utils/products'
</script>

<template>
  <section class="products">
    <div class="products__container">
      <ul class="products__list">
        <app-card
          v-for="item in products"
          :key="item.name"
          :img="item.img"
          :alt="item.alt"
          :name="item.name"
          :price="item.price"
          :horizontal="item.horizontal"
        >
        </app-card>
      </ul>
      <app-button class="products__btn" @click="() => router.push('/collection')"
        >View collection</app-button
      >
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
    }

    .products__btn {
      transition: all 0.2s ease;

      &:hover {
        background-color: rgba($violet, 0.2);
      }
    }
  }
}
</style>
