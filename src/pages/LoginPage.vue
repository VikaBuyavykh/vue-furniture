<script setup>
import ShopForm from '@/components/ShopForm.vue'

defineProps({
  apiError: String
})

defineEmits(['resetForm', 'login', 'resetApiError'])

const emailValue = defineModel('emailValue')
const passwordValue = defineModel('passwordValue')
</script>

<template>
  <main class="main">
    <ShopForm
      title="Login form"
      button-text="Sign in"
      v-model:email="emailValue"
      v-model:password="passwordValue"
      @reset="$emit('resetForm')"
      @submit="$emit('login')"
      :api-error="apiError"
      @reset-api-error="$emit('resetApiError')"
    >
      <p class="form-link">
        Not registered yet? <RouterLink :to="{ name: 'register' }">Follow the link</RouterLink>
      </p>
    </ShopForm>
  </main>
</template>

<style lang="scss" scoped></style>
