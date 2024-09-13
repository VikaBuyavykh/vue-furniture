<script setup>
import { onUnmounted } from 'vue'
import { checkInputValidity } from '@/utils/checkInputValidity.js'
import { checkFormValidity } from '@/utils/checkFormValidity.js'
import UIButton from '@/components/UI/UIButton.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  apiError: String
})

const emit = defineEmits(['reset', 'submit', 'resetApiError'])

const name = defineModel('name')
const email = defineModel('email')
const password = defineModel('password')
const repeatedPassword = defineModel('repeatedPassword')

function handleFormInput(e) {
  emit('resetApiError')
  setTimeout(() => {
    checkFormValidity(e)
  }, 0)
}

onUnmounted(() => emit('reset'))
</script>

<template>
  <section class="form">
    <div class="form--content">
      <h2 class="form--title">{{ title }}</h2>
      <form
        class="form--container"
        name="form"
        @submit.prevent="$emit('submit')"
        @input="handleFormInput($event)"
        novalidate
      >
        <div v-if="$route.meta.isRegisterPage || $route.meta.isProfilePage" class="form--item">
          <label class="form--label" for="name"
            >Name
            <input
              type="text"
              id="name"
              name="name"
              class="form--input"
              placeholder="Enter your name"
              minlength="2"
              required
              @input="checkInputValidity($event)"
              v-model="name"
            />
          </label>
          <span class="form--input-error form--error" id="name-error"></span>
        </div>
        <div class="form--item">
          <label class="form--label" for="email"
            >Email
            <input
              type="email"
              id="email"
              name="email"
              class="form--input"
              placeholder="your_email@example.com"
              minlength="2"
              required
              @input="checkInputValidity($event)"
              v-model="email"
            />
          </label>
          <span class="form--input-error form--error" id="email-error"></span>
        </div>
        <div v-if="$route.meta.isRegisterPage || $route.meta.isLoginPage" class="form--item">
          <label class="form--label" for="password"
            >Password
            <input
              type="password"
              id="password"
              name="password"
              class="form--input"
              placeholder="Enter password"
              minlength="8"
              required
              @input="checkInputValidity($event)"
              v-model="password"
            />
          </label>
          <span class="form--input-error form--error" id="password-error"></span>
        </div>
        <div v-if="$route.meta.isRegisterPage" class="form--item">
          <label class="form--label" for="repeated-password"
            >Confirm password
            <input
              type="password"
              id="repeated-password"
              name="repeated-password"
              class="form--input"
              placeholder="Repeat entering the password"
              minlength="8"
              required
              @input="checkInputValidity($event)"
              v-model="repeatedPassword"
            />
          </label>
          <span class="form--input-error form--error" id="repeated-password-error"></span>
        </div>
        <UIButton id="form-button" disabled theme="contrast" type="submit" class="form--button">{{
          buttonText
        }}</UIButton>
        <span class="form--api-error form--error" id="api-error">{{ apiError }}</span>
        <slot></slot>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.form {
  @include size(100%, auto);
  padding-block: 84px;
  background-color: $light-gray;
  flex-grow: 1;

  @include media_md {
    padding-block: 48px;
  }

  &--content {
    @extend %sizing;
    background-color: $white;
    padding-block: 70px 55px;
    @include flex(column, start, start, 48px);

    @include media_md {
      gap: 12px;
      padding-block: 48px 36px;
    }
  }

  &--title {
    @include size(80%, auto);
    margin-inline: auto;
    @include h1($dark-primary, left);

    @include media_md {
      @include h2($dark-primary, left);
    }
  }

  &--container {
    @include size(80%, auto);
    margin-inline: auto;
    @include flex(column, start, end, 0);
  }

  &--item {
    @include size(100%, auto);
    @include flex(column, start, stretch, 0);
    padding-block: 24px 4px;
    border-block-end: 1px solid $border-dark;

    &:last-of-type {
      border: none;
    }

    @include media_md {
      padding-block: 28px 0;
    }
  }

  &--label {
    @include flex(row, space-between, center, 32px);
    @include h4($dark-primary, left);

    @include media_md {
      @include flex(column, start, start, 0);
      gap: 16px;
    }
  }

  &--input {
    width: 50%;
    @extend %resetInputsAndBtns;
    @include large($primary, right);

    @include media_md {
      width: 100%;
      text-align: left;
    }

    &::placeholder {
      @include large(rgba($dark-primary, 0.2), right);

      @include media_md {
        text-align: left;
      }
    }
  }

  &--error {
    @include h6(coral, right);
  }

  &--input-error {
    @include size(100%, 19.6px);

    @include media_md {
      text-align: left;
    }
  }

  &--api-error {
    @include size(50%, 19.6px);
  }

  &--button {
    margin-block: 32px 4px;

    @include media_md {
      width: 100%;
    }
  }
}
</style>
