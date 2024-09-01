<script setup>
import benefits from '@/utils/benefits.js'
import checkmarkIcon from '@/images/icons/checkmark-filled.svg'
import UIEmailInput from '@/components/UI/UIEmailInput.vue'

defineProps({
  isSimple: {
    type: Boolean
  }
})

defineEmits(['subscribe'])

const subs = defineModel('subs')
</script>

<template>
  <section class="benefits" :class="{ 'benefits-simple': isSimple }">
    <div class="benefits--content" :class="{ 'benefits--content-simple': isSimple }">
      <h2 class="benefits--title" :class="{ 'benefits--title-simple': isSimple }">
        Join the club and get the benefits
      </h2>
      <p class="benefits--text" :class="{ 'benefits--text-simple': isSimple }">
        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores
        and more
      </p>
      <ul v-if="!isSimple" class="benefits--list">
        <li v-for="benefit in benefits" :key="benefit" class="benefits--item">
          <img class="benefits--item-icon" :src="checkmarkIcon" alt="Checkmark icon" />
          <p class="benefits--item-text">{{ benefit }}</p>
        </li>
      </ul>
      <UIEmailInput
        formName="benefits"
        @subscribe="$emit('subscribe', $event)"
        v-model:subs="subs"
        theme="contrast"
        :class="{ 'benefits--input-simple': isSimple }"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.benefits {
  @include size(100%, auto);
  flex-grow: 1;
  padding-block: 97px 86px;
  background-image: url('@/images/background/benefits.jpg');
  @extend %bgi;

  @include media_md {
    padding-block: 24px 32px;
  }

  &-simple {
    background: $light-gray;
    padding-block: 52px 64px;

    @include media_md {
      background: $white;
      padding-block: 37px;
    }
  }

  &--content {
    margin: 0 auto;
    width: 35%;
    max-width: 1280px;
    @include flex(column, start, center, 12px);

    @include media_xxl {
      width: 70%;
    }

    @include media_md {
      width: 88%;
    }

    &-simple {
      background: $white;
      width: 90%;
      max-width: 1280px;
      padding-block: 68px 54px;
      gap: 16px;

      @include media_lg {
        padding: 48px 24px 38px;
      }

      @include media_md {
        padding: 0;
      }
    }
  }

  &--title {
    @include h2($white, center);

    @include media_md {
      @include h3($white, left);
    }

    &-simple {
      color: $dark-primary;
      width: 50%;

      @include media_xxl {
        width: 90%;
      }

      @include media_md {
        width: 100%;
        @include h4($dark-primary, left);
      }
    }
  }

  &--text {
    width: 95%;
    @include large($white, center);

    @include media_md {
      width: 100%;
      @include small($white, start);
    }

    &-simple {
      color: $dark-primary;
      margin-bottom: 56px;
      width: 38%;

      @include media_xxl {
        width: 90%;
      }

      @include media_md {
        width: 100%;
        @include small($dark-primary, left);
        margin-bottom: 48px;
      }
    }
  }

  &--list {
    width: 90%;
    margin-block: 18px 28px;
    @include flex(row, center, center, 36px);

    @include media_md {
      margin-block: 12px 16px;
      @include flex(column, start, center, 8px);
    }

    @include media_sm {
      width: 100%;
      align-items: start;
    }
  }

  &--item {
    @include flex(row, center, center, 8px);

    &-icon {
      @include size(16px, 16px);
    }

    &-text {
      @include medium($white, left);
    }
  }

  &--input {
    &-simple {
      width: 38%;

      @include media_xxl {
        width: 75%;
      }

      @include media_md {
        width: 100%;
      }
    }
  }
}
</style>
