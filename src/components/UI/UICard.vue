<script setup>
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/product.js'
import { computed } from 'vue'

const router = useRouter()

const { setProductId } = useProductStore()

const props = defineProps({
  img: {
    type: String,
    required: true
  },
  bigImg: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
})

const imgPath = computed(() => new URL(`/src/images/products/${props.img}`, import.meta.url).href)
const bigImgPath = computed(
  () => new URL(`/src/images/products/${props.bigImg}`, import.meta.url).href
)

function handleClick() {
  setProductId(props.id)
  localStorage.setItem('selectedProductId', props.id.toString())
  router.push({ name: 'product', params: { productId: props.id } })
}
</script>

<template>
  <li class="card">
    <RouterLink
      @click="handleClick"
      :to="{ name: 'product', params: { productId: id } }"
      class="card--link"
    >
      <picture>
        <source :srcset="imgPath" media="(max-width: 1000px)" />
        <img :src="bigImgPath" :alt="alt" class="card--image" />
      </picture>
      <h4 class="card--title">{{ title }}</h4>
      <p class="card--price">£{{ price }}</p>
    </RouterLink>
  </li>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.card {
  @include size(100%, auto);
  cursor: pointer;
  @extend %hoverScale;

  &--link {
    @include size(100%, auto);
    @include flex(column, start, stretch, 8px);
    text-decoration: none;
  }

  &--image {
    @include size(100%, 375px);
    @extend %pic;
    margin-bottom: 16px;

    @include media_md {
      height: 300px;
    }

    @include media_sm {
      height: 200px;
    }
  }

  &--title {
    @include h4($dark-primary, left);
  }

  &--price {
    @include large($dark-primary, left);
  }
}
</style>
