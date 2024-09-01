import { watch, toRefs } from 'vue'
import axios from 'axios'
import { useCollectionStore } from '@/stores/collection.js'
import { useUserStore } from '@/stores/user.js'
import { API_URL } from '@/utils/constants.js'

export function useCartService(setLoading, showResult) {
  const { cart, cartTotal } = toRefs(useCollectionStore())
  const { deleteFromCart, clearCart } = useCollectionStore()
  const { user } = toRefs(useUserStore())

  async function makeOrder() {
    setLoading(true)

    const date = new Date().toLocaleString('en-US', { timeZone: 'UTC' })
    const orderInfo = {
      user: { name: user.value.name, userId: user.value.id },
      date: date,
      totalSum: cartTotal.value,
      purchases: cart.value.map((item) => ({
        id: item.id,
        name: item.title,
        price: item.price,
        amount: item.amount,
        sum: item.price * item.amount
      }))
    }

    try {
      const { data } = await axios.post(`${API_URL}/orders`, orderInfo)
      showResult(`Your order #${data.id} has been successfully placed`)
      clearCart()
    } catch (error) {
      showResult('An error occurred while placing your order. Try again later or contact us')
      console.log(error)
    }
  }

  watch(
    cart,
    () => {
      if (cart.value.some((item) => item.amount === 0)) {
        deleteFromCart(cart.value.find((item) => item.amount === 0).id)
      }
    },
    { deep: true }
  )

  return {
    makeOrder,
    cart,
    cartTotal,
    clearCart
  }
}
