import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCollectionStore = defineStore('collection', () => {
  const collection = ref(null)

  function setInitialCollection(value) {
    collection.value = value.map((item) => ({ ...item, isAdded: false, amount: 1 }))
  }

  function setCollection(value) {
    collection.value = value
  }

  function clearCart() {
    setInitialCollection(collection.value)
  }

  const cart = computed(() =>
    collection.value ? collection.value.filter((item) => item.isAdded) : []
  )

  function addToCart(id) {
    collection.value = collection.value.map((item) =>
      item.id === id ? { ...item, isAdded: true } : item
    )
  }

  const cartTotal = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price * item.amount, 0)
  )

  function deleteFromCart(id) {
    collection.value = collection.value.map((item) =>
      item.id === id ? { ...item, isAdded: false } : item
    )
  }

  return {
    collection,
    setInitialCollection,
    setCollection,
    addToCart,
    cart,
    cartTotal,
    deleteFromCart,
    clearCart
  }
})
