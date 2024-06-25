import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormStore = defineStore('form', () => {
  const searchQuery = ref('')
  const clubListEmail = ref('')
  const mailingEmail = ref('')
  const errorText = ref('')

  return { searchQuery, mailingEmail, clubListEmail, errorText }
})
