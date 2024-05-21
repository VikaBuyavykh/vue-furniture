<script setup>
import AppAmountInput from '@/components/UI/AppAmountInput.vue'
import AppButton from '@/components/UI/AppButton.vue'
import basket from '@/utils/basket'
</script>

<template>
  <main class="basket">
    <div class="basket__content">
      <div class="basket__header">
        <p class="basket__header-point">Product</p>
        <p class="basket__header-point">Quantity</p>
        <p class="basket__header-point">Total</p>
      </div>
      <ul class="basket__main">
        <li v-for="item in basket" :key="item.name" class="basket__product">
          <div class="basket__product-info">
            <img class="basket__product-img" :src="item.img" :alt="item.alt" />
            <div class="basket__product-about-box">
              <h4 class="basket__product-name">{{ item.name }}</h4>
              <p class="basket__product-desc">{{ item.desc }}</p>
              <p class="basket__product-price">{{ item.price }}</p>
            </div>
          </div>
          <app-amount-input class="basket__product-amount"></app-amount-input>
          <p class="basket__product-total">£85</p>
        </li>
      </ul>
      <div class="basket__footer">
        <p class="basket__taxes-text">Taxes and shipping are calculated at checkout</p>
        <div class="basket__sum-box">
          <p class="basket__sum"><span>Subtotal</span>£210</p>
          <app-button class="basket__btn">Go to checkout</app-button>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.basket {
  @include size(100%, auto);
  background-color: $light-grey;
  padding-block: 84px;

  &__content {
    @extend %sizing;
    background-color: white;
    padding: 54px 62px;
    @include flex(column, start, stretch, 0px);

    .basket__header {
      padding-block: 1rem;
      border-bottom: 1px solid $border-grey;
      @include size(100%, auto);
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;

      &-point {
        @extend %h6;
        text-align: end;

        &:first-of-type {
          grid-column: span 2;
          text-align: start;
        }
      }
    }

    .basket__main {
      @include size(100%, auto);
      padding-block: 1.75rem;
      @include flex(column, start, stretch, 2rem);
      list-style-type: none;

      .basket__product {
        @include size(100%, auto);
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
        align-items: center;
        justify-items: end;

        &-info {
          grid-column: span 3;
          @include size(100%, auto);
          display: grid;
          grid-template-columns: 109px auto;
          gap: 1.5rem;

          .basket__product-img {
            @include size(100%, 134px);
            @extend %pic;
          }

          .basket__product-about-box {
            @include size(100%, auto);
            max-width: 232px;
            @include flex(column, center, start, 0.5rem);

            .basket__product-name {
              @extend %h4;
            }

            .basket__product-desc {
              @extend %body-small;
            }

            .basket__product-price {
              @extend %body-medium;
            }
          }
        }

        &-amount {
          background-color: $light-grey;
        }

        &-total {
          @extend %body-large;
        }
      }
    }

    .basket__footer {
      @include size(100%, auto);
      padding-top: 1.25rem;
      border-top: 1px solid $border-grey;
      @include flex(row, space-between, start, 1.25rem);

      .basket__taxes-text {
        @extend %body-small;
      }

      .basket__sum-box {
        @include flex(column, start, end, 1rem);

        .basket__sum {
          @include flex(row, end, center, 1rem);
          @extend %h3;
          text-align: right;

          span {
            @extend %h4;
            text-align: right;
          }
        }

        .basket__btn {
          background-color: $medium-blue;
          color: white;
          transition: all 0.2s ease;

          &:hover {
            background-color: rgba($medium-blue, 0.8);
          }
        }
      }
    }
  }
}
</style>
