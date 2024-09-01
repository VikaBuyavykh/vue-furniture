import { ref } from 'vue'
import axios from 'axios'
import { API_URL } from '@/utils/constants.js'
import { CustomError } from '@/utils/CustomError.js'

export function useSubscribe(showResult, setLoading) {
  const subsInput = ref('')
  const mailingInput = ref('')

  const resetInputs = () => {
    subsInput.value = ''
    mailingInput.value = ''
  }

  async function subscribe(e) {
    setLoading(true)
    const email = e.target[0].value
    try {
      const { data: mailingList } = await axios.get(`${API_URL}/subscribers`)
      if (mailingList.map((item) => item.email).some((item) => item === email)) {
        throw new CustomError('You are already in our club and subscribed to our newsletter')
      }
      await axios.post(`${API_URL}/subscribers`, { email })
      showResult('Congatulations! You have joined our club and mailing list')
    } catch (error) {
      if (error.name === 'custom') {
        showResult(error.message)
      } else {
        showResult('Something went wrong. Please try again later or contact us')
      }
      console.log(error)
    }
    resetInputs()
  }

  return {
    subsInput,
    mailingInput,
    resetInputs,
    subscribe
  }
}
