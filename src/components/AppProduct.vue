<script setup>
import AppButton from '@/components/UI/AppButton.vue'
import AppAmountInput from '@/components/UI/AppAmountInput.vue'
</script>

<template>
  <section class="product">
    <div class="product__container">
      <img class="product__img" src="/products/chair2.jpg" alt="The chair photo" />
      <div class="product__info">
        <div class="product__name-box">
          <h2 class="product__name">The Dandy Chair</h2>
          <p class="product__price">£250</p>
        </div>
        <div class="product__desc-box">
          <h3 class="product__desc-title">Product description</h3>
          <p class="product__desc-text">
            A timeless design, with premium materials features as one of our most popular and iconic
            pieces. The dandy chair is perfect for any stylish living space with beech legs and
            lambskin leather upholstery.
          </p>
        </div>
        <div class="product__dims">
          <h3 class="product__dims-title">Dimensions</h3>
          <ul class="product__dims-list">
            <li class="product__dims-item">
              <h4 class="product__dims-item-value">Height</h4>
              <p class="product__dims-item-prop">110cm</p>
            </li>
            <li class="product__dims-separator"></li>
            <li class="product__dims-item">
              <h4 class="product__dims-item-value">Width</h4>
              <p class="product__dims-item-prop">75cm</p>
            </li>
            <li class="product__dims-separator"></li>
            <li class="product__dims-item">
              <h4 class="product__dims-item-value">Depth</h4>
              <p class="product__dims-item-prop">50cm</p>
            </li>
          </ul>
        </div>
        <div class="product__amount-box">
          <h3 class="product__amount-box-label">Quantitity</h3>
          <app-amount-input></app-amount-input>
        </div>
        <div class="product__btns">
          <app-button>Add to cart</app-button>
          <app-button>Save to favorites</app-button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.product {
  @include size(100%, auto);
  background-color: $light-grey;
  padding-block: 3.5rem 3rem;

  @include media_sm {
    padding-block: 0 2rem;
  }

  &__container {
    @extend %sizing;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;

    @include media_lg {
      grid-template-columns: 1fr;
    }

    @include media_md {
      gap: 2rem;
    }

    @include media_sm {
      width: 100%;
    }

    .product__img {
      @include size(100%, 660px);
      @extend %pic;

      @include media_lg {
        height: 500px;
      }

      @include media_md {
        height: 386px;
      }
    }

    .product__info {
      @include size(100%, auto);
      @include flex(column, center, start, 0px);

      @include media_sm {
        width: 88%;
        margin-inline: auto;
      }

      .product__name-box {
        @include size(100%, auto);
        @include flex(column, start, start, 1rem);
        padding-bottom: 1.75rem;
        border-bottom: 1px solid $border-grey;

        @include media_md {
          gap: 0.75rem;
          padding-bottom: 1rem;
        }

        .product__name {
          @extend %prod-name;

          @include media_sm {
            font-size: 1.5rem;
            line-height: 2.1rem;
          }
        }

        .product__price {
          @extend %prod-price;

          @include media_sm {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
        }
      }

      .product__desc-box {
        margin-block: 1.5rem 2.25rem;
        @include size(100%, auto);
        @include flex(column, start, start, 0.875rem);

        @include media_md {
          margin-block: 1.75rem;
          gap: 0.75rem;
        }

        .product__desc-title {
          @extend %prod-sec-title;

          @include media_sm {
            line-height: 1.4rem;
          }
        }

        .product__desc-text {
          @extend %ordinary;
          color: $medium-blue;
          text-align: left;
          width: 83%;

          @include media_xl {
            width: 100%;
          }

          @include media_sm {
            font-size: 0.875rem;
            line-height: 1.3125rem;
          }
        }
      }

      .product__dims {
        @include size(100%, auto);
        @include flex(column, start, start, 1.5rem);

        @include media_sm {
          gap: 0;
        }

        &-title {
          @extend %prod-sec-title;

          @include media_sm {
            padding-bottom: 0.875rem;
            line-height: 1.4rem;
          }
        }

        &-list {
          @include size(53%, auto);
          @include flex(row, space-between, center, 0px);
          list-style-type: none;

          @include media_sm {
            width: 100%;
            border-top: 1px solid $border-grey;
            padding-top: 0.875rem;
          }

          .product__dims-item {
            @include flex(column, start, center, 1rem);

            &-value {
              @extend %prod-dims-value;

              @include media_sm {
                line-height: 1.225rem;
              }
            }

            &-prop {
              @extend %ordinary;
              color: $medium-blue;

              @include media_sm {
                font-size: 0.875rem;
                line-height: 1.3125rem;
              }
            }
          }

          .product__dims-separator {
            @include size(1px, 75%);
            background-color: $border-grey;
          }
        }
      }

      .product__amount-box {
        @include flex(column, start, start, 0.75rem);
        margin-block: 2.5rem 3rem;

        @include media_md {
          margin-block: 1.75rem 2.25rem;
          gap: 0.5rem;
        }

        @include media_xs {
          width: 100%;
        }

        .product__amount-box-label {
          @extend %prod-sec-title;

          @include media_sm {
            line-height: 1.4rem;
          }
        }
      }

      .product__btns {
        @include flex(row, start, center, 1rem);

        @include media_md {
          gap: 0.875rem;
        }

        @include media_xs {
          width: 100%;
          flex-direction: column-reverse;
          align-items: stretch;
        }

        button {
          transition: all 0.2s ease;

          &:first-of-type {
            background-color: $medium-blue;
            color: white;

            &:hover {
              background-color: rgba($medium-blue, 0.8);
            }
          }

          &:last-of-type {
            background-color: white;

            &:hover {
              background-color: rgba($violet, 0.2);
            }
          }
        }
      }
    }
  }
}
</style>
