<script setup>
import ShopForm from '@/components/ShopForm.vue'

defineProps({
  apiError: String
})

defineEmits(['resetForm', 'register', 'resetApiError'])

const nameValue = defineModel('nameValue')
const emailValue = defineModel('emailValue')
const passwordValue = defineModel('passwordValue')
const repeatedPasswordValue = defineModel('repeatedPasswordValue')
</script>

<template>
  <main class="main">
    <ShopForm
      title="Registration form"
      button-text="Register"
      v-model:name="nameValue"
      v-model:email="emailValue"
      v-model:password="passwordValue"
      v-model:repeatedPassword="repeatedPasswordValue"
      @reset="$emit('resetForm')"
      @submit="$emit('register')"
      :api-error="apiError"
      @reset-api-error="$emit('resetApiError')"
    >
      <p class="form-link">
        Already registered?
        <RouterLink :to="{ name: 'login' }">Follow the link to sign in</RouterLink>
      </p>
    </ShopForm>
  </main>
</template>

<style lang="scss" scoped></style>
