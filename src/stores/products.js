import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const currentProductId = ref(null)
  const currentProduct = computed(() =>
    products.value.find((item) => item.id === Number(currentProductId.value))
  )
  const basket = ref([])
  const initialAmount = ref(1)

  return { products, currentProductId, currentProduct, basket, initialAmount }
})
