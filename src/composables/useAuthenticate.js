import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { API_URL } from '@/utils/constants.js'

export function useAuthenticate(
  setAuth,
  setUserValues,
  setFormValues,
  setCollection,
  setFilters,
  setProductId
) {
  const route = useRoute()

  function setIf(func, val) {
    if (val) {
      func(val)
    }
  }

  const isWatchPossible = ref(false)

  async function authenticate() {
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.get(`${API_URL}/auth_me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setAuth(true)
      setUserValues(data)
      if (route.meta.isProfilePage) {
        setFormValues({ name: data.name, email: data.email })
      }
    } catch (error) {
      setAuth(false)
      localStorage.removeItem('authenticated')
      console.log(error)
    }
    isWatchPossible.value = true
    setIf(setProductId, parseInt(localStorage.getItem('selectedProductId')))
    setIf(setCollection, JSON.parse(localStorage.getItem('collection')))
    setIf(setFilters, JSON.parse(localStorage.getItem('filters')))
  }

  onMounted(() => authenticate())

  return {
    isWatchPossible
  }
}
