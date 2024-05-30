import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const currentProductId = ref(null)
  const currentProduct = computed(
    () =>
      //products.value.find((item) => item.id === currentProductId.value)
      currentProductId.value
  )

  return { products, currentProductId, currentProduct }
})
