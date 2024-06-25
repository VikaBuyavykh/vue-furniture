<script setup>
import { useFormStore } from '@/stores/form'
import axios from 'axios'
import { storeToRefs } from 'pinia'

const props = defineProps({
  theme: String,
  invitation: Boolean
})

const form = useFormStore()
const { clubListEmail, mailingEmail, errorText } = storeToRefs(form)

function onInput(e) {
  errorText.value = ''
  if (props.invitation) {
    clubListEmail.value = e.target.value
  } else {
    mailingEmail.value = e.target.value
  }
}

async function sbmt() {
  try {
    let path
    let value
    let error
    if (props.invitation) {
      path = 'clubList'
      value = clubListEmail.value
      error = 'This email is already in the club list'
    } else {
      path = 'mailingList'
      value = mailingEmail.value
      error = 'This email is already in mailing list'
    }
    const { data } = await axios.get(`https://e7067c4f8e5566a0.mokky.dev/${path}`)
    if (data.map((item) => item.email).includes(value)) {
      errorText.value = error
      throw new Error(error)
    } else {
      await axios.post(`https://e7067c4f8e5566a0.mokky.dev/${path}`, {
        email: value
      })
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <form @submit.prevent="sbmt" class="email-form">
    <input
      class="email-input"
      :class="{ 'email-input_dark': theme === 'dark' }"
      type="email"
      name="email"
      id="email"
      placeholder="your@email.com"
      :value="invitation ? clubListEmail : mailingEmail"
      @input="onInput"
    />
    <button class="email-btn" :class="{ 'email-btn_dark': theme === 'dark' }" type="submit">
      Sign up
    </button>
  </form>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.email-form {
  @include size(95%, auto);
  display: grid;
  grid-template-columns: auto max-content;

  @include media_md {
    width: 100%;
  }

  .email-input {
    @extend %resetInputsAndBtns;
    background-color: $light-grey;
    padding: 1rem 2rem;
    @extend %body-medium;
    overflow-x: scroll;

    &::placeholder {
      color: rgba($medium-blue, 0.2);
    }

    &_dark {
      background-color: rgba(white, 0.15);
      color: white;

      &::placeholder {
        color: white;
      }
    }
  }

  .email-btn {
    @extend %resetInputsAndBtns;
    padding: 1rem 2rem;
    background-color: $medium-blue;
    @extend %body-medium;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: $violet;
    }

    &_dark {
      background-color: #fff;
      color: $medium-blue;

      &:hover {
        color: white;
      }
    }
  }
}
</style>
