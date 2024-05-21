<script setup>
import AppButton from '@/components/UI/AppButton.vue'
import recommendation from '@/utils/recommendation'
import AppCard from '@/components/UI/AppCard.vue'
import router from '@/router'
</script>

<template>
  <section class="recommendation">
    <div class="recommendation__container">
      <h3 class="recommendation_title">You might also love these</h3>
      <ul class="recommendation_list">
        <app-card
          v-for="item in recommendation"
          :key="item.img"
          :img="item.img"
          :alt="item.alt"
          :name="item.name"
          :price="item.price"
          :horizontal="item.horizontal"
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
  padding-block: 64px 48px;

  &__container {
    @extend %sizing;
    @include flex(column, start, stretch, 0px);

    .recommendation_title {
      @extend %h2;
      color: $medium-blue;
    }

    .recommendation_list {
      list-style-type: none;
      @include size(100%, auto);
      @extend %grid;
      margin-block: 25px 44px;
    }

    .recommendation__btn {
      align-self: center;
      transition: all 0.2s ease;

      &:hover {
        background-color: rgba($violet, 0.2);
      }
    }
  }
}
</style>
