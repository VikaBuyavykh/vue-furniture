<script setup>
import { inject, ref } from 'vue'
import navLinks from '@/utils/navLinks'
import router from '@/router'

defineProps({
  isAboutPage: Boolean,
  isListingPage: Boolean,
  isMainPageSmallScreenSized: Boolean
})

const { setIsPopupVisible } = inject('app')

const searchQuery = ref('')
const isCartHovered = ref(false)
const isProfileHovered = ref(false)
const isLoupeHovered = ref(false)
const isMenuHovered = ref(false)

function search() {
  router.push('/collection')
  setTimeout(() => {
    document.querySelector('#search').focus()
  }, 0)
}

function hoverCart() {
  isCartHovered.value = !isCartHovered.value
}

function hoverProfile() {
  isProfileHovered.value = !isProfileHovered.value
}

function hoverLoupe() {
  isLoupeHovered.value = !isLoupeHovered.value
}

function hoverMenu() {
  isMenuHovered.value = !isMenuHovered.value
}
</script>

<template>
  <header class="header">
    <div
      class="header__row"
      :class="{ header__row_about: isAboutPage, header__row_listing: isListingPage }"
    >
      <div
        class="header__input-box"
        v-if="!isAboutPage && !isListingPage && !isMainPageSmallScreenSized"
      >
        <img
          @mouseenter="hoverLoupe"
          @mouseleave="hoverLoupe"
          class="header__input-btn"
          :src="isLoupeHovered ? '/search-active.svg' : '/search.svg'"
          alt="Icon of search-button"
        />
        <input
          v-model="searchQuery"
          class="header__input"
          type="search"
          name="search"
          id="search"
        />
      </div>
      <h1
        @click="() => router.push('/')"
        class="header__name"
        :class="{ header__name_about: isAboutPage || isMainPageSmallScreenSized }"
      >
        Avion
      </h1>
      <ul v-if="isListingPage" class="header__nav-list">
        <li v-for="link in navLinks" :key="link.name" class="header__nav-list-item">
          <router-link class="header__nav-list-link" :to="link.link">{{ link.name }}</router-link>
        </li>
      </ul>
      <div
        class="header__buttons"
        :class="{ header__buttons_about: isAboutPage || isMainPageSmallScreenSized }"
      >
        <div
          class="header__input-box header__input-box_listing"
          v-if="isListingPage || isMainPageSmallScreenSized"
        >
          <img
            @mouseenter="hoverLoupe"
            @mouseleave="hoverLoupe"
            class="header__input-btn"
            :src="isLoupeHovered ? '/search-active.svg' : '/search.svg'"
            alt="Icon of search-button"
          />
          <input
            v-model="searchQuery"
            class="header__input"
            type="search"
            name="search"
            id="search"
          />
        </div>
        <nav class="header__sections-menu" v-if="isAboutPage">
          <router-link class="header__menu-item" to="#">About us</router-link>
          <router-link class="header__menu-item" to="#">Contact</router-link>
          <router-link class="header__menu-item" to="#">Blog</router-link>
        </nav>
        <button
          @mouseenter="hoverLoupe"
          @mouseleave="hoverLoupe"
          @click="search"
          v-if="isAboutPage"
          class="header__btn"
        >
          <img
            class="header__btn-img"
            :src="isLoupeHovered ? '/search-active.svg' : '/search.svg'"
            alt="Cart of search"
          />
        </button>
        <button
          v-if="!isMainPageSmallScreenSized"
          @mouseenter="hoverCart"
          @mouseleave="hoverCart"
          class="header__btn"
          type="button"
          @click="() => router.push('/basket')"
        >
          <img
            class="header__btn-img"
            :src="isCartHovered ? '/cart-active.svg' : '/cart.svg'"
            alt="Cart icon"
          />
        </button>
        <button
          v-if="!isMainPageSmallScreenSized"
          @mouseenter="hoverProfile"
          @mouseleave="hoverProfile"
          class="header__btn"
        >
          <img
            class="header__btn-img"
            :src="isProfileHovered ? '/profile-active.svg' : '/profile.svg'"
            alt="Profile icon"
          />
        </button>
        <button
          @mouseenter="hoverMenu"
          @mouseleave="hoverMenu"
          class="header__btn header__btn_menu"
          @click="() => setIsPopupVisible(true)"
        >
          <img
            class="header__btn-img"
            :src="isMenuHovered ? '/menu-active.svg' : '/menu.svg'"
            alt="Menu icon"
          />
        </button>
      </div>
    </div>
    <nav
      v-if="!isListingPage && !isMainPageSmallScreenSized"
      class="header__nav"
      :class="{ header__nav_about: isAboutPage }"
    >
      <ul class="header__nav-list">
        <li v-for="link in navLinks" :key="link.name" class="header__nav-list-item">
          <a class="header__nav-list-link" :href="link.link">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.header {
  @include size(100%, auto);
  @include flex(column, start, center, 0);

  &__row {
    @include size(96.25%, auto);
    max-width: 1386px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding-block: 1.25rem;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);

    @include media_lg {
      border: none;
      width: 89.23%;
    }

    &_about {
      border: none;
    }

    &_listing {
      grid-template-columns: repeat(3, minmax(min-content, max-content));
      justify-content: space-between;
      border: none;
    }

    .header__input-box {
      @include size(100%, auto);
      @include flex(row, start, center, 15px);

      &_listing {
        flex-direction: row-reverse;
      }

      .header__input-btn {
        @include size(1rem, 1rem);
        cursor: pointer;
      }

      .header__input {
        @include size(100%, auto);
        @extend %resetInputsAndBtns;
        @extend %body-large;

        &::-webkit-search-decoration,
        &::-webkit-search-cancel-button,
        &::-webkit-search-results-button,
        &::-webkit-search-results-decoration {
          -webkit-appearance: none;
        }
      }
    }

    .header__name {
      @extend %logo;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        color: $violet;
      }

      &_about {
        grid-area: 1 / 1 / 2 / 2;
        text-align: left;
      }
    }

    .header__buttons {
      justify-self: end;
      @include flex(row, end, center, 1rem);

      @include media_lg {
        gap: 1.25rem;
      }

      &_about {
        grid-area: 1 / 2 / 2 / 4;
      }

      .header__sections-menu {
        @include flex(row, end, center, 32px);
        margin-right: 2rem;

        .header__menu-item {
          @extend %ordinary;
          text-decoration: none;
          transition: all 0.2s ease;

          &:hover {
            text-decoration: underline;
            opacity: 0.7;
          }
        }
      }

      .header__btn {
        @extend %resetInputsAndBtns;
        @include size(1rem, 1rem);
        cursor: pointer;

        &_menu {
          display: none;

          @include media_lg {
            display: block;
          }
        }
      }
    }
  }

  &__nav {
    @include size(96.25%, auto);
    max-width: 1386px;
    padding-block: 20px;

    &_about {
      @include size(100%, auto);
      max-width: unset;
      background-color: $light-grey;
    }

    &-list {
      list-style-type: none;
      margin: 0 auto;
      @include flex(row, center, center, 44px);

      &-item {
        .header__nav-list-link {
          text-decoration: none;
          @extend %ordinary;
          transition: all 0.2s ease;

          &:hover {
            text-decoration: underline;
            opacity: 0.7;
          }
        }
      }
    }
  }
}
</style>
