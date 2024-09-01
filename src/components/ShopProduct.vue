<script setup>
import { toRefs, computed } from 'vue'
import { useProductStore } from '@/stores/product.js'
import UINumberInput from '@/components/UI/UINumberInput.vue'
import UIButton from '@/components/UI/UIButton.vue'

defineProps({
  isAdded: Boolean
})

defineEmits(['add'])

const { product } = toRefs(useProductStore())

const imgPath = computed(
  () => new URL(`/src/images/products/${product.value.img}`, import.meta.url).href
)
const bigImgPath = computed(
  () => new URL(`/src/images/products/${product.value.bigImg}`, import.meta.url).href
)
</script>

<template>
  <section v-if="product" class="product">
    <picture class="product--image">
      <source :srcset="imgPath" media="(max-width: 1000px)" />
      <img :src="bigImgPath" :alt="product.alt" />
    </picture>
    <div class="product--info">
      <h2 class="product--title">{{ product.title }}</h2>
      <p class="product--price">£{{ product.price }}</p>
      <div class="product--description">
        <h3 class="product--section-title">Description</h3>
        <p class="product--description-text">{{ product.desc }}</p>
        <ul class="product--advantages">
          <li v-for="(item, index) in product.adv" :key="index" class="product--advantages-item">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="product--dimensions">
        <h3 class="product--section-title">Dimensions</h3>
        <ul class="product--dimensions-list">
          <li
            v-for="[key, value] in Object.entries(product.dims)"
            :key="key"
            class="product--dimensions-item"
          >
            <p class="product--dimensions-name">{{ key }}</p>
            <p class="product--dimensions-value">{{ value }}cm</p>
          </li>
        </ul>
      </div>
      <form class="product--form">
        <div class="product--amount-box">
          Amount:
          <UINumberInput v-model="product.amount" />
        </div>
        <UIButton
          :disabled="isAdded || product.amount === 0"
          @click.prevent="$emit('add', product.id)"
          class="product--button"
          theme="contrast"
          >Add to cart</UIButton
        >
        <span v-if="isAdded || product.amount === 0" class="product--warning">{{
          isAdded ? 'Product is already in the cart' : 'Determine the quantity of items'
        }}</span>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.product {
  @include size(100%, auto);
  max-width: 1440px;
  display: grid;
  grid-template: minmax(auto, 758px) / repeat(2, 1fr);
  padding-bottom: 48px;

  @include media_md {
    grid-template: 500px max-content / 1fr;
  }

  @include media_sm {
    grid-template-rows: 391px max-content;
  }

  &--image {
    @include size(100%, 100%);

    img {
      @include size(100%, 100%);
      @extend %pic;
    }
  }

  &--info {
    padding: 12% 14% 5%;
    @include flex(column, start, start, 10px);

    @include media_xl {
      gap: 14px;
      padding: 7%;
    }
  }

  &--title {
    @include h1($dark-primary, left);

    @include media_md {
      @include h3($dark-primary, left);
    }
  }

  &--price {
    @include x-large($dark-primary, left);

    @include media_md {
      @include h4($dark-primary, left);
    }
  }

  &--description {
    @include flex(column, start, start, 16px);
    padding-block: 40px 23px;

    @include media_md {
      padding-block: 16px 12px;
    }

    &-text {
      @include medium($primary, left);

      @include media_md {
        @include small($primary, left);
      }
    }
  }

  &--section-title {
    @include medium($dark-primary, left);

    @include media_md {
      @include h5($dark-primary, left);
    }
  }

  &--advantages {
    @include flex(column, start, start, 0);
    list-style-position: inside;

    &-item {
      @include medium($primary, left);

      @include media_md {
        @include small($primary, left);
      }
    }
  }

  &--dimensions {
    @include flex(column, start, start, 28px);
    @include size(100%, auto);

    &-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 57px;

      @include media_sm {
        @include size(100%, auto);
        grid-template-columns: 1.5fr 2fr 1.5fr;
        gap: 0;
      }
    }

    &-item {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      gap: 12px;

      @include media_sm {
        @include size(100%, auto);
        justify-content: start;

        &:nth-of-type(2) {
          justify-content: center;
          border-inline: 1px solid $border-gray;
        }

        &:last-of-type {
          justify-content: end;
        }
      }
    }

    &-name {
      @include small($dark-primary, left);

      @include media_md {
        @include h6($dark-primary, left);
      }
    }

    &-value {
      @include medium($violet, left);

      @include media_md {
        @include small($violet, left);
      }
    }
  }

  &--form {
    @include size(100%, auto);
    margin-block: 30px 40px;
    @include flex(row, space-between, center, 16px);
    position: relative;

    @include media_xl {
      @include flex(column, start, start, 16px);
      margin-block: 12px 0;
    }
  }

  &--amount-box {
    @include h5($dark-primary, left);
    @include flex(row, start, center, 22px);

    @include media_xl {
      @include size(100%, auto);
      @include flex(column, start, start, 16px);
    }
  }

  &--button {
    @include media_xl {
      width: 50%;
    }

    @include media_sm {
      width: 100%;
    }
  }

  &--warning {
    position: absolute;
    right: 0;
    top: calc(100% + 4px);
    @include small($primary, right);

    @include media_xl {
      text-align: left;
      left: 0;
    }
  }
}
</style>
