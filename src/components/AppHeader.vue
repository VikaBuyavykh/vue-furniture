<script setup>
import { ref } from 'vue'
import navLinks from '@/utils/navLinks'
import router from '@/router'

defineProps({
  isAboutPage: Boolean,
  isListingPage: Boolean
})

const searchQuery = ref('')

function search() {
  router.push('/collection')
  setTimeout(() => {
    document.querySelector('#search').focus()
  }, 0)
}
</script>

<template>
  <header class="header">
    <div
      class="header__row"
      :class="{ header__row_about: isAboutPage, header__row_listing: isListingPage }"
    >
      <div class="header__input-box" v-if="!isAboutPage && !isListingPage">
        <img class="header__input-btn" src="/search.svg" alt="Icon of search-button" />
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
        :class="{ header__name_about: isAboutPage }"
      >
        Avion
      </h1>
      <ul v-if="isListingPage" class="header__nav-list">
        <li v-for="link in navLinks" :key="link.name" class="header__nav-list-item">
          <router-link class="header__nav-list-link" :to="link.link">{{ link.name }}</router-link>
        </li>
      </ul>
      <div class="header__buttons" :class="{ header__buttons_about: isAboutPage }">
        <div class="header__input-box header__input-box_listing" v-if="isListingPage">
          <img class="header__input-btn" src="/search.svg" alt="Icon of search-button" />
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
        <button @click="search" v-if="isAboutPage" class="header__btn">
          <img class="header__btn-img" src="/search.svg" alt="Cart of search" />
        </button>
        <button class="header__btn" type="button" @click="() => router.push('/basket')">
          <img class="header__btn-img" src="/cart.svg" alt="Cart icon" />
        </button>
        <button class="header__btn">
          <img class="header__btn-img" src="/profile.svg" alt="Profile icon" />
        </button>
      </div>
    </div>
    <nav v-if="!isListingPage" class="header__nav" :class="{ header__nav_about: isAboutPage }">
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
    padding-block: 20px;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);

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

      &_about {
        grid-area: 1 / 1 / 2 / 2;
        text-align: left;
      }
    }

    .header__buttons {
      justify-self: end;
      @include flex(row, end, center, 1rem);

      &_about {
        grid-area: 1 / 2 / 2 / 4;
      }

      .header__sections-menu {
        @include flex(row, end, center, 32px);
        margin-right: 2rem;

        .header__menu-item {
          @extend %ordinary;
          text-decoration: none;
        }
      }

      .header__btn {
        background-color: transparent;
        @extend %resetInputsAndBtns;
        @include size(1rem, 1rem);
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
        }
      }
    }
  }
}
</style>
