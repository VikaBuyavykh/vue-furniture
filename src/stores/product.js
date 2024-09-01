import { ref, computed, toRefs } from 'vue'
import { defineStore } from 'pinia'
import { useCollectionStore } from '@/stores/collection.js'

export const useProductStore = defineStore('product', () => {
  const { cart, collection } = toRefs(useCollectionStore())

  const productId = ref(null)

  function setProductId(id) {
    productId.value = id
  }

  const isProductAdded = computed(() => cart.value.some((item) => item.id === productId.value))

  const product = computed(() =>
    collection.value ? collection.value.find((item) => item.id === productId.value) : null
  )

  return {
    productId,
    setProductId,
    isProductAdded,
    product
  }
})
