import { ref, onMounted } from 'vue'
import axios from 'axios'
import { API_URL } from '@/utils/constants.js'

export function useProductsFetch() {
  const fetchData = ref(null)

  onMounted(async () => {
    try {
      const { data } = await axios.get(`${API_URL}/products`)
      fetchData.value = data
    } catch (error) {
      console.log(error)
    }
  })

  return {
    fetchData
  }
}
