<script setup>
import { useProductStore } from '@/stores/products'
import { storeToRefs } from 'pinia'
import { computed, watch } from 'vue'

const props = defineProps({
  place: [String, undefined],
  id: [Number, undefined],
  disabled: [Object, undefined]
})

const product = useProductStore()
const { basket } = storeToRefs(product)

const isMinusDisabled = computed(() => {
  if (props.place === 'basket') {
    return basket.value.find((item) => item.id === props.id).amount === 0
  } else {
    return product.initialAmount === 0
  }
})

function addAmount() {
  if (props.place === 'basket') {
    basket.value.find((item) => item.id === props.id).amount++
  } else {
    product.initialAmount++
  }
}

function reduceAmount() {
  if (props.place === 'basket') {
    basket.value.find((item) => item.id === props.id).amount--
  } else {
    product.initialAmount--
  }
}

watch(
  basket,
  () => {
    const elemToDelete = basket.value.find((item) => item.amount === 0)
    if (elemToDelete) {
      basket.value.splice(basket.value.indexOf(elemToDelete), 1)
    }
  },
  { deep: true }
)
</script>

<template>
  <div class="amount-input-box" :class="{ 'amount-input-box_basket': props.place === 'basket' }">
    <button :disabled="isMinusDisabled || disabled" type="button" @click="reduceAmount">-</button>
    <input
      v-if="props.place === 'basket'"
      type="number"
      name="amout"
      id="amount"
      v-model="basket.find((item) => item.id === props.id).amount"
    />
    <input v-else type="number" name="amout" id="amount" v-model="product.initialAmount" />
    <button :disabled="disabled" type="button" @click="addAmount">+</button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.amount-input-box {
  @include flex(row, start, center, 1.5rem);
  padding: 0.75rem 1rem;
  background-color: white;

  @include media_xs {
    width: 100%;
    justify-content: space-between;

    &_basket {
      justify-content: start;
    }
  }

  input,
  button {
    @extend %resetInputsAndBtns;
    @extend %ordinary;
  }

  input {
    @include size(22px, auto);
    color: $medium-blue;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &,
    &:hover,
    &:focus {
      appearance: none;
      -moz-appearance: textfield;
    }
  }

  button {
    color: $border-grey;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      color: rgba($violet, 0.8);
    }
  }
}
</style>
