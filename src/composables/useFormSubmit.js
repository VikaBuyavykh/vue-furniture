import { toRefs, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useUserStore } from '@/stores/user.js'
import { useFormStore } from '@/stores/form.js'
import { API_URL } from '@/utils/constants.js'
import { CustomError } from '@/utils/CustomError.js'

export function useFormSubmit() {
  const { user } = toRefs(useUserStore())
  const { form } = toRefs(useFormStore())
  const { setUserValues } = useUserStore()
  const { setFormValues, resetForm } = useFormStore()

  const router = useRouter()

  const isAuth = ref(false)
  function setAuth(value) {
    isAuth.value = value
  }

  const apiError = ref('')
  function resetApiError() {
    apiError.value = ''
  }

  const tooltipText = ref('')
  const isTooltipOpen = ref(false)
  function resetTooltip() {
    isTooltipOpen.value = false
  }

  const isLoading = ref(false)
  function setLoading(value) {
    isLoading.value = value
  }

  function successfullAuthorization(data, text) {
    setUserValues({ name: data.data.name, email: data.data.email, id: data.data.id })
    localStorage.setItem('token', data.token)
    localStorage.setItem('authenticated', `user with '${data.data.id}' id`)
    router.push({ name: 'main' })
    isAuth.value = true
    tooltipText.value = text
    isTooltipOpen.value = true
  }

  async function handleLogin() {
    setLoading(true)
    try {
      const { data } = await axios.post(`${API_URL}/auth`, {
        email: form.value.email,
        password: form.value.password
      })
      successfullAuthorization(data, 'You have successfully logged in')
    } catch (error) {
      if (error.request.status === 401) {
        apiError.value = 'Email address or password is incorrect'
      } else {
        apiError.value = 'Something went wrong. Please try again later or contact us'
      }
      console.log(error)
    }
    setLoading(false)
  }

  async function handleRegister() {
    setLoading(true)
    try {
      if (form.value.password !== form.value.repeatedPassword) {
        throw new CustomError('The passwords do not match')
      }
      const { data } = await axios.post(`${API_URL}/register`, {
        name: form.value.name,
        email: form.value.email,
        password: form.value.password
      })
      successfullAuthorization(data, 'You have been registered successfully')
    } catch (error) {
      if (error.name === 'custom') {
        apiError.value = error.message
      } else if (error.request.status === 401) {
        apiError.value = 'A user with the same email already exists'
      } else {
        apiError.value = 'Something went wrong. Please try again later or contact us'
      }
      console.log(error)
    }
    setLoading(false)
  }

  async function handleUpdateProfile() {
    setLoading(true)
    try {
      if (form.value.name === user.value.name && form.value.email === user.value.email) {
        throw new CustomError('Enter new data. No one symbol is changed')
      }
      const { data: usersList } = await axios.get(`${API_URL}/users`)
      if (
        usersList
          .map((item) => item.email)
          .filter((item) => item !== user.value.email)
          .some((item) => item === form.value.email)
      ) {
        throw new CustomError('This email is taken by another user')
      }
      const { data } = await axios.patch(`${API_URL}/users/${user.value.id}`, {
        name: form.value.name,
        email: form.value.email
      })
      setUserValues({ name: data.name, email: data.email })
      tooltipText.value = 'The data has been changed successfully'
      isTooltipOpen.value = true
    } catch (error) {
      setFormValues({ name: user.value.name, email: user.value.email })
      if (error.name === 'custom') {
        apiError.value = error.message
      } else {
        apiError.value = 'Something went wrong. Please try again later or contact us'
      }
      console.log(error)
    }
    setLoading(false)
  }

  return {
    user,
    setUserValues,
    form,
    setFormValues,
    resetForm,
    handleLogin,
    handleRegister,
    handleUpdateProfile,
    isTooltipOpen,
    tooltipText,
    resetTooltip,
    isAuth,
    setAuth,
    apiError,
    resetApiError,
    isLoading,
    setLoading
  }
}
