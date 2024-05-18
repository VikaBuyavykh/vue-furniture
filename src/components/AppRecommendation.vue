<script setup>
import AppButton from '@/components/UI/AppButton.vue'
import recommendation from '@/utils/recommendation'
</script>

<template>
  <section class="recommendation">
    <div class="recommendation__container">
      <h3 class="recommendation_title">You might also love these</h3>
      <ul class="recommendation_list">
        <li v-for="item in recommendation" :key="item.img" class="recommendation_list-item">
          <img class="recommendation__img" :src="item.img" :alt="item.alt" />
          <h4 class="recommendation__name">{{ item.name }}</h4>
          <p class="recommendation__price">{{ item.price }}</p>
        </li>
      </ul>
      <app-button class="recommendation__btn">See collection</app-button>
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

      &-item {
        @include size(100%, auto);
        @include flex(column, start, start, 0px);

        &:first-of-type {
          grid-column: 1 / span 2;
        }

        .recommendation__img {
          @include size(100%, 375px);
          @extend %pic;
        }

        .recommendation__name {
          @extend %h4;
          margin-block: 1.5rem 0.5rem;
        }

        .recommendation__price {
          @extend %body-large;
          color: $medium-blue;
        }
      }
    }

    .recommendation__btn {
      align-self: center;
    }
  }
}
</style>
