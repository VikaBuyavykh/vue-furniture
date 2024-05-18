<script setup>
import AppButton from '@/components/UI/AppButton.vue'
</script>

<template>
  <section class="product">
    <div class="product__container">
      <img class="product__img" src="@/images/products/chair2.jpg" alt="The chair photo" />
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
            <li class="product__dims-item">
              <h4 class="product__dims-item-value">Width</h4>
              <p class="product__dims-item-prop">75cm</p>
            </li>
            <li class="product__dims-item">
              <h4 class="product__dims-item-value">Depth</h4>
              <p class="product__dims-item-prop">50cm</p>
            </li>
          </ul>
        </div>
        <div class="product__amount-box">
          <label for="amount">Quantitity</label>
          <div class="product__input-box">
            <button type="button">-</button>
            <input type="number" name="amout" id="amount" value="1" />
            <button type="button">+</button>
          </div>
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
  padding-block: 50px;

  &__container {
    @extend %sizing;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 65px;

    .product__img {
      @include size(100%, 660px);
      @extend %pic;
    }

    .product__info {
      @include size(100%, auto);
      @include flex(column, center, start, 0px);

      .product__name-box {
        @include size(100%, auto);
        @include flex(column, start, start, 1rem);
        padding-bottom: 28px;
        border-bottom: 1px solid $border-grey;

        .product__name {
          @extend %prod-name;
        }

        .product__price {
          @extend %prod-price;
        }
      }

      .product__desc-box {
        margin-block: 1.5rem 2.25rem;
        @include size(100%, auto);
        @include flex(column, start, start, 14px);

        .product__desc-title {
          @extend %prod-sec-title;
        }

        .product__desc-text {
          @extend %ordinary;
          color: $medium-blue;
          text-align: left;
        }
      }

      .product__dims {
        @include size(100%, auto);
        @include flex(column, start, start, 1.5rem);

        &-title {
          @extend %prod-sec-title;
        }

        &-list {
          @include flex(row, start, center, 0px);
          list-style-type: none;

          .product__dims-item {
            @include flex(column, start, center, 15px);
            padding-inline: 49.25px;
            border-right: 1px solid $border-grey;

            &:first-of-type {
              padding-left: 0;
            }

            &:last-of-type {
              padding-right: 0;
              border: none;
            }

            &-value {
              @extend %prod-dims-value;
            }

            &-prop {
              @extend %ordinary;
              color: $medium-blue;
            }
          }
        }
      }

      .product__amount-box {
        @include flex(column, start, start, 0.75rem);
        margin-block: 40px 48px;

        label {
          @extend %prod-sec-title;
        }

        .product__input-box {
          @include flex(row, start, center, 25px);
          padding: 0.75rem 1rem;
          background-color: white;

          input,
          button {
            @extend %resetInputsAndBtns;
            @extend %ordinary;
          }

          input {
            @include size(22px, auto);
            color: $medium-blue;
          }

          button {
            color: $border-grey;
          }
        }
      }

      .product__btns {
        @include flex(row, start, center, 1rem);

        button {
          &:first-of-type {
            background-color: $medium-blue;
            color: white;
          }

          &:last-of-type {
            background-color: white;
          }
        }
      }
    }
  }
}
</style>
