<script setup>
import { inject, onMounted, onUnmounted, watch } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import AppAmountInput from '@/components/UI/AppAmountInput.vue'
import AppButton from '@/components/UI/AppButton.vue'
import basket from '@/utils/basket'

const { setIsBasketPage, setIsBasketPageSmallScreenSized } = inject('app')

const isSmallScreen = useMediaQuery('(max-width: 1000px)')

watch(isSmallScreen, () => {
  isSmallScreen.value
    ? setIsBasketPageSmallScreenSized(true)
    : setIsBasketPageSmallScreenSized(false)
})

onMounted(() => {
  setIsBasketPage(true)
  isSmallScreen.value
    ? setIsBasketPageSmallScreenSized(true)
    : setIsBasketPageSmallScreenSized(false)
})

onUnmounted(() => {
  setIsBasketPage(false)
  setIsBasketPageSmallScreenSized(false)
})
</script>

<template>
  <main class="basket">
    <div class="basket__content">
      <h2 class="basket__title">Your shopping cart</h2>
      <div class="basket__header">
        <p class="basket__header-point">Product</p>
        <p class="basket__header-point">Quantity</p>
        <p class="basket__header-point">Total</p>
      </div>
      <ul class="basket__main">
        <li key="ddkdkdkdk" class="basket__product">
          <img class="basket__product-img" src="@/images/vase.jpg" alt="Vase img" />
          <div class="basket__product-about-box">
            <h4 class="basket__product-name">Vase</h4>
            <p class="basket__product-desc">a.kdjvcn ;sdnv.jsndz. vn;sdfnv.lsnd.f</p>
            <p class="basket__product-price">£85</p>
          </div>
          <app-amount-input class="basket__product-amount" place="basket"></app-amount-input>
          <p class="basket__product-total">£85</p>
        </li>
        <li
          v-for="item in basket.filter((item, index) => index === 1)"
          :key="item.name"
          class="basket__product"
        >
          <img class="basket__product-img" :src="item.img" :alt="item.alt" />
          <div class="basket__product-about-box">
            <h4 class="basket__product-name">{{ item.name }}</h4>
            <p class="basket__product-desc">{{ item.desc }}</p>
            <p class="basket__product-price">{{ item.price }}</p>
          </div>
          <app-amount-input class="basket__product-amount" place="basket"></app-amount-input>
          <p class="basket__product-total">£85</p>
        </li>
      </ul>
      <div class="basket__footer">
        <div class="basket__sum-box">
          <p class="basket__taxes-text">Taxes and shipping are calculated at checkout</p>
          <p class="basket__sum"><span>Subtotal</span>£210</p>
        </div>
        <app-button class="basket__btn">Go to checkout</app-button>
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
  padding-block: 5.25rem;

  @include media_lg {
    padding-block: 2.125rem 3rem;
  }

  &__content {
    @extend %sizing;
    background-color: white;
    padding: 3.375rem 3.875rem;
    @include flex(column, start, stretch, 0px);

    @include media_lg {
      background-color: $light-grey;
      padding: 0;
    }

    .basket__title {
      display: none;
      @extend %h3;

      @include media_lg {
        display: block;
      }
    }

    .basket__header {
      padding-block: 1rem;
      border-bottom: 1px solid $border-grey;
      @include size(100%, auto);
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1.25rem;

      @include media_lg {
        display: none;
      }

      &-point {
        @extend %h6;
        text-align: center;

        &:first-of-type {
          grid-column: span 3;
          text-align: start;
        }

        &:last-of-type {
          text-align: end;
        }
      }
    }

    .basket__main {
      @include size(100%, auto);
      padding-block: 1.75rem;
      @include flex(column, start, stretch, 2rem);
      list-style-type: none;
      overflow-x: scroll;

      @include media_lg {
        padding-block: 2rem 2.25rem;
        gap: 2.5rem;
      }

      .basket__product {
        @include size(100%, auto);
        min-width: min-content;
        display: grid;
        grid-template-columns: auto repeat(4, 1fr);
        gap: 1.25rem;
        align-items: start;
        justify-items: start;

        @include media_lg {
          grid-template-columns: auto 1fr;
          grid-template-rows: repeat(2, minmax(min-content, max-content));
          gap: 0.875rem 1.25rem;
        }

        .basket__product-img {
          @include size(109px, 134px);
          @extend %pic;

          @include media_lg {
            grid-row: span 2;
            @include size(133px, 164px);
          }
        }

        .basket__product-about-box {
          grid-column: span 2;
          @include size(100%, auto);
          max-width: 232px;
          @include flex(column, center, start, 0.5rem);

          @include media_lg {
            grid-area: 1 / 2 / 2 / 3;
          }

          .basket__product-name {
            @extend %h4;

            @include media_lg {
              font-size: 1rem;
              line-height: 1.4rem;
            }
          }

          .basket__product-desc {
            @extend %body-small;
          }

          .basket__product-price {
            @extend %body-medium;
          }
        }

        &-amount {
          justify-self: center;
          background-color: $light-grey;
          margin-top: 1rem;

          @include media_lg {
            grid-area: 2/2/3/3;
            justify-self: start;
            margin-top: 0;
          }
        }

        &-total {
          justify-self: end;
          @extend %body-large;
          margin-top: 1rem;

          @include media_lg {
            display: none;
          }
        }
      }
    }

    .basket__footer {
      @include size(100%, auto);
      padding-top: 1.25rem;
      border-top: 1px solid $border-grey;
      @include flex(column, start, stretch, 1rem);

      @include media_lg {
        gap: 2.25rem;
        padding-top: 1rem;
      }

      .basket__sum-box {
        @include flex(row, space-between, start, 1rem);

        @include media_lg {
          flex-direction: column-reverse;
          align-items: end;
          gap: 0.5rem;
        }

        .basket__taxes-text {
          @extend %body-small;
          text-align: right;
        }

        .basket__sum {
          @include flex(row, end, baseline, 1rem);
          @extend %h3;
          text-align: right;

          span {
            @extend %h4;
            text-align: right;
          }
        }
      }

      .basket__btn {
        align-self: end;
        background-color: $medium-blue;
        color: white;
        transition: all 0.2s ease;

        &:hover {
          background-color: rgba($medium-blue, 0.8);
        }

        @include media_xs {
          align-self: stretch;
        }
      }
    }
  }
}
</style>
