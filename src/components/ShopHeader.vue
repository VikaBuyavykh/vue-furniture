<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ShopNavigation from '@/components/ShopNavigation.vue'

defineProps({
  isAuth: Boolean
})

defineEmits(['toggle', 'chooseSection'])

const route = useRoute()
const router = useRouter()

const searchQuery = defineModel('searchQuery')

function handleSearchSubmit() {
  router.push({ name: 'collection' })
}

const searchIcon = computed(() => {
  return new URL(`/src/images/icons/search.svg#svg`, import.meta.url).href
})
const cartIcon = computed(() => {
  return new URL(`/src/images/icons/cart.svg#svg`, import.meta.url).href
})
const profileIcon = computed(() => {
  return new URL(`/src/images/icons/profile.svg#svg`, import.meta.url).href
})
const menuIcon = computed(() => {
  return new URL(`/src/images/icons/menu.svg#svg`, import.meta.url).href
})
const loginIcon = computed(() => {
  return new URL(`/src/images/icons/login.svg#svg`, import.meta.url).href
})
</script>

<template>
  <header class="header">
    <div
      class="header--main-block"
      :class="{
        'header--main-block-prod': route.meta.isProductPage,
        'header--main-block-about': route.meta.isAboutPage
      }"
    >
      <ShopNavigation
        :isAuth="isAuth"
        v-if="route.meta.isProductPage"
        class="header--navigation-prod"
        @choose-section="$emit('chooseSection', $event)"
      />
      <form
        @submit.prevent="handleSearchSubmit"
        class="header--form"
        :class="{ 'header--form-left': route.meta.isProductPage || route.meta.isAboutPage }"
      >
        <button @click.prevent="handleSearchSubmit" class="header--submit" type="submit">
          <svg
            class="header--icon"
            alt="Icon of search"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <use :href="searchIcon" />
          </svg>
        </button>
        <input
          v-model.trim.lazy="searchQuery"
          type="search"
          class="header--search-input"
          :class="{ 'header--search-input-prod': route.meta.isProductPage }"
          placeholder="Search"
        />
      </form>
      <RouterLink
        :to="{ name: 'main' }"
        class="header--title"
        :class="{ 'header--title-left': route.meta.isProductPage || route.meta.isAboutPage }"
      >
        <h1>Avion</h1>
      </RouterLink>
      <div class="header--icons">
        <RouterLink :to="{ name: 'cart' }">
          <svg
            alt="Icon of cart"
            class="header--icon header--icon-cart"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <use :href="cartIcon" />
          </svg>
        </RouterLink>
        <RouterLink v-if="isAuth" :to="{ name: 'profile' }">
          <svg
            alt="Icon of profile"
            class="header--icon header--icon-profile"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <use :href="profileIcon" />
          </svg>
        </RouterLink>
        <svg
          @click="$emit('toggle')"
          alt="Icon of menu"
          class="header--icon header--icon-menu"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <use :href="menuIcon" />
        </svg>
        <RouterLink v-if="!isAuth" :to="{ name: 'login' }" class="header--icon-link">
          <svg width="16" height="16" fill="currentColor" class="header--icon" viewBox="0 0 16 16">
            <use :href="loginIcon" />
          </svg>
        </RouterLink>
      </div>
    </div>
    <ShopNavigation
      v-if="!route.meta.isProductPage"
      class="header--navigation"
      :class="{ 'header--navigation-about': route.meta.isAboutPage }"
      @choose-section="$emit('chooseSection', $event)"
    />
  </header>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

%header_content_size {
  @include size(96.25%, auto);
  max-width: 1386px;

  @include media_md {
    width: 87%;
  }
}

.header {
  @include size(100%, auto);
  @include flex(column, start, center, 0);

  &--main-block {
    @extend %header_content_size;
    padding-block: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    align-items: center;
    border-block-end: 1px solid rgba(#000000, 0.1);

    &-prod {
      width: 89%;
      padding-block: 24px;
      grid-template-columns: auto 3fr 1fr auto;
      border-block-end: none;

      @include media_md {
        padding-block: 21px;
      }
    }

    &-about {
      grid-template-columns: auto 1fr auto;
      border-block-end: none;
    }

    @include media_md {
      grid-template-columns: auto 1fr auto;
      border-block-end: none;
    }
  }

  &--navigation {
    @extend %header_content_size;

    @include media_md {
      display: none;
    }

    &-prod {
      padding: 0;
      flex-wrap: wrap;
      row-gap: 8px;

      @include media_md {
        display: none;
      }
    }

    &-about {
      @include size(100%, auto);
      max-width: unset;
      background-color: $light-gray;
      padding-inline: 24px;
      overflow-x: scroll;
      justify-content: center;
      &::-webkit-scrollbar {
        height: 0;
      }

      @include media_md {
        padding-block: 16px;
        display: flex;
        justify-content: space-between;
        &::-webkit-scrollbar {
          height: 3px;
          background-color: $light-gray;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: $dark-primary;
        }

        &::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          background-color: $light-gray;
        }
      }
    }
  }

  &--form {
    @include flex(row, start, center, 16px);

    @include media_md {
      flex-direction: row-reverse;
    }

    &-left {
      flex-direction: row-reverse;
    }
  }

  &--submit {
    @include size(16px, 16px);
    @extend %resetInputsAndBtns;
  }

  &--icon-link {
    @include size(16px, 16px);
  }

  &--icon {
    @include size(16px, 16px);
    cursor: pointer;
    color: $dark-primary;
    @extend %hoverOpacity;

    &-profile,
    &-cart {
      @include media_md {
        display: none;
      }
    }

    &-menu {
      display: none;

      @include media_md {
        display: inherit;
      }
    }
  }

  &--search-input {
    width: 100%;
    @include h6($dark-primary, left);
    @extend %resetInputsAndBtns;
    @extend %deleteX;

    &-prod {
      text-align: right;
    }

    &::placeholder {
      color: rgba($dark-primary, 0.2);
    }

    @include media_md {
      text-align: right;
    }
  }

  &--title {
    text-decoration: none;
    font-family: 'ClashDisplay', 'Arial', 'Helvetica', sans-serif;
    cursor: pointer;
    @extend %hoverOpacity;

    h1 {
      @include text(24px, 29.52px, $dark, center);
    }

    &-left {
      order: -1;

      h1 {
        text-align: left;
      }
    }

    @include media_md {
      text-align: left;
      order: -1;
    }
  }

  &--icons {
    @include flex(row, end, center, 16px);
  }
}
</style>
