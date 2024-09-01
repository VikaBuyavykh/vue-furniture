<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import UIButton from '@/components/UI/UIButton.vue'

const router = useRouter()

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  theme: {
    type: String
  },
  hasInfoPurpose: {
    type: Boolean
  }
})

function handleClick() {
  if (props.buttonText === 'View collection') {
    router.push({ name: 'collection' })
  } else if (props.buttonText === 'Get in touch') {
    const input = document.forms.benefits.elements.email
    input.scrollIntoView({ behavior: 'smooth', block: 'center' })
    input.focus()
  }
}

const paragraphs = computed(() => props.text.split('<br>'))
</script>

<template>
  <div
    class="container"
    :class="{ 'container-theme-dark': theme === 'dark', 'container-forInfo': hasInfoPurpose }"
  >
    <h2
      class="container--title"
      :class="{
        'container--title-theme-dark': theme === 'dark',
        'container--title-forInfo': hasInfoPurpose
      }"
    >
      {{ title }}
    </h2>
    <p
      v-for="(paragraph, index) in paragraphs"
      :key="index"
      class="container--text"
      :class="{ 'container--text-theme-dark': theme === 'dark' }"
    >
      {{ paragraph }}
    </p>
    <UIButton
      class="container--button"
      :class="{ 'container--button-forInfo': hasInfoPurpose }"
      @click="handleClick"
      :theme="theme"
      >{{ buttonText }}</UIButton
    >
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.container {
  @include size(100%, auto);
  min-height: 444px;
  padding: 56px 60px;
  background-color: $white;
  @include flex(column, start, start, 20px);

  @include media_sm {
    padding: 46px 24px;
    min-height: 340px;
  }

  &-forInfo {
    padding: 73px 84px 51px;

    @include media_md {
      width: 88%;
      margin-inline: auto;
      padding: 48px 0 62px;
    }
  }

  &-theme {
    &-dark {
      background-color: $dark-primary;

      @include media_md {
        padding: 34px 28px;
        min-height: 284px;
      }
    }
  }

  &--title {
    @include h1($dark, left);

    @include media_sm {
      @include h3($dark, left);
    }

    &-forInfo {
      @include h3($dark, left);

      @include media_md {
        @include h4($dark, left);
      }
    }

    &-theme {
      &-dark {
        color: $white;

        @include media_md {
          @include h4($white, left);
        }
      }
    }
  }

  &--text {
    @include large($violet, left);

    @include media_sm {
      @include medium($violet, left);
    }

    &-theme {
      &-dark {
        color: $white;

        @include media_md {
          @include small($white, left);
        }
      }
    }
  }

  &--button {
    @include media_sm {
      width: 100%;
    }

    &-forInfo {
      margin-top: 28px;
    }
  }
}
</style>
