import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', () => {
  const form = ref({
    name: '',
    email: '',
    password: '',
    repeatedPassword: ''
  })

  function setFormValues(values) {
    Object.entries(values).forEach(([key, value]) => {
      form.value = { ...form.value, [key]: value }
    })
  }

  function resetForm() {
    Object.keys(form.value).forEach((key) => {
      form.value[key] = ''
    })
  }

  return {
    form,
    setFormValues,
    resetForm
  }
})
