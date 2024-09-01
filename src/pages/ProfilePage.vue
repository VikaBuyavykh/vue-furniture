<script setup>
import { onMounted } from 'vue'
import ShopForm from '@/components/ShopForm.vue'

const props = defineProps({
  user: [Object, null],
  apiError: String
})

const emit = defineEmits(['updateProfile', 'resetForm', 'setFormValues', 'resetApiError', 'logOut'])

const nameValue = defineModel('nameValue')
const emailValue = defineModel('emailValue')

onMounted(() => {
  if (props.user) {
    emit('setFormValues', { name: props.user.name, email: props.user.email })
  }
})
</script>

<template>
  <main class="main">
    <ShopForm
      title="Your profile"
      button-text="Edit"
      v-model:name="nameValue"
      v-model:email="emailValue"
      @reset="$emit('resetForm')"
      @submit="$emit('updateProfile')"
      :api-error="apiError"
      @reset-api-error="$emit('resetApiError')"
    >
      <p class="form-link">
        Do you want to change the account?
        <RouterLink @click="$emit('logOut')" :to="{ name: 'login' }">Log out</RouterLink>
      </p>
    </ShopForm>
  </main>
</template>

<style lang="scss" scoped></style>
