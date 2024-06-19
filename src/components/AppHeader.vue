<script setup>
import { usePageStore } from '@/stores/page'
import { useHoverStore } from '@/stores/hover'
import { usePopupStore } from '@/stores/popup'
import { useFormStore } from '@/stores/form'
import { useProductStore } from '@/stores/products'
import router from '@/router'
import navLinks from '@/utils/navLinks'
import { storeToRefs } from 'pinia'

const page = usePageStore()
const hover = useHoverStore()
const popup = usePopupStore()
const form = useFormStore()
const product = useProductStore()
const { currentSection, searchQueryRequest } = storeToRefs(product)

function search() {
  router.push('/collection')
  setTimeout(() => {
    document.querySelector('#search').focus()
  }, 0)
}

function clickSection(section) {
  currentSection.value = section
}

function searchSbmt() {
  searchQueryRequest.value = form.searchQuery.toLowerCase()
  router.push('/collection')
}
</script>

<template>
  <header class="header">
    <div
      class="header__row"
      :class="{ header__row_about: page.isAboutPage, header__row_listing: page.isListingPage }"
    >
      <form
        @submit.prevent="searchSbmt"
        class="header__input-box"
        v-if="
          !page.isAboutPage &&
          !page.isListingPage &&
          !page.isMainPageSmallScreenSized &&
          !page.isBasketPageSmallScreenSized &&
          !page.isCollectionPageSmallScreenSized
        "
      >
        <img
          @mouseenter="() => (hover.isLoupeHovered = true)"
          @mouseleave="() => (hover.isLoupeHovered = false)"
          class="header__input-btn"
          :src="hover.isLoupeHovered ? '/search-active.svg' : '/search.svg'"
          alt="Icon of search-button"
          @click="searchSbmt"
        />
        <input
          v-model="form.searchQuery"
          class="header__input"
          type="search"
          name="search"
          id="search"
        />
      </form>
      <h1
        @click="() => router.push('/')"
        class="header__name"
        :class="{
          header__name_about:
            page.isAboutPage ||
            page.isMainPageSmallScreenSized ||
            page.isBasketPageSmallScreenSized ||
            page.isCollectionPageSmallScreenSized
        }"
      >
        Avion
      </h1>
      <ul
        v-if="page.isListingPage"
        class="header__nav-list"
        :class="{ 'header__nav-list_listing': page.isListingPage }"
      >
        <li
          v-for="link in navLinks"
          :key="link.name"
          class="header__nav-list-item"
          @click="clickSection(link.name)"
        >
          <router-link class="header__nav-list-link" :to="link.link">{{ link.name }}</router-link>
        </li>
      </ul>
      <div
        class="header__buttons"
        :class="{
          header__buttons_about:
            page.isAboutPage ||
            page.isMainPageSmallScreenSized ||
            page.isBasketPageSmallScreenSized ||
            page.isCollectionPageSmallScreenSized,
          header__buttons_basket:
            page.isBasketPageSmallScreenSized || page.isCollectionPageSmallScreenSized
        }"
      >
        <form
          class="header__input-box header__input-box_listing"
          @submit.prevent="searchSbmt"
          v-if="
            page.isListingPage ||
            page.isMainPageSmallScreenSized ||
            page.isBasketPageSmallScreenSized ||
            page.isCollectionPageSmallScreenSized
          "
        >
          <img
            @mouseenter="() => (hover.isLoupeHovered = true)"
            @mouseleave="() => (hover.isLoupeHovered = false)"
            @click="searchSbmt"
            class="header__input-btn"
            :src="hover.isLoupeHovered ? '/search-active.svg' : '/search.svg'"
            alt="Icon of search-button"
          />
          <input
            v-model="form.searchQuery"
            class="header__input"
            type="search"
            name="search"
            id="search"
          />
        </form>
        <nav class="header__sections-menu" v-if="page.isAboutPage">
          <router-link class="header__menu-item" to="#">About us</router-link>
          <router-link class="header__menu-item" to="#">Contact</router-link>
          <router-link class="header__menu-item" to="#">Blog</router-link>
        </nav>
        <button
          @mouseenter="hoverLoupe"
          @mouseleave="hoverLoupe"
          @click="search"
          v-if="
            page.isAboutPage &&
            !page.isAboutPageSmallScreenSized &&
            !page.isBasketPageSmallScreenSized &&
            !page.isCollectionPageSmallScreenSized
          "
          class="header__btn"
        >
          <img
            class="header__btn-img"
            :src="hover.isLoupeHovered ? '/search-active.svg' : '/search.svg'"
            alt="Cart of search"
          />
        </button>
        <button
          v-if="
            !page.isMainPageSmallScreenSized &&
            !page.isAboutPageSmallScreenSized &&
            !page.isBasketPageSmallScreenSized &&
            !page.isCollectionPageSmallScreenSized
          "
          @mouseenter="() => (hover.isCartHovered = true)"
          @mouseleave="() => (hover.isCartHovered = false)"
          class="header__btn"
          type="button"
          @click="() => router.push('/basket')"
        >
          <img
            class="header__btn-img"
            :src="hover.isCartHovered ? '/cart-active.svg' : '/cart.svg'"
            alt="Cart icon"
          />
        </button>
        <button
          v-if="
            !page.isMainPageSmallScreenSized &&
            !page.isAboutPageSmallScreenSized &&
            !page.isBasketPageSmallScreenSized &&
            !page.isCollectionPageSmallScreenSized
          "
          @mouseenter="() => (hover.isProfileHovered = true)"
          @mouseleave="() => (hover.isProfileHovered = false)"
          class="header__btn"
        >
          <img
            class="header__btn-img"
            :src="hover.isProfileHovered ? '/profile-active.svg' : '/profile.svg'"
            alt="Profile icon"
          />
        </button>
        <button
          @mouseenter="() => (hover.isMenuHovered = true)"
          @mouseleave="() => (hover.isMenuHovered = false)"
          class="header__btn header__btn_menu"
          @click="() => (popup.isPopupVisible = true)"
        >
          <img
            class="header__btn-img"
            :src="hover.isMenuHovered ? '/menu-active.svg' : '/menu.svg'"
            alt="Menu icon"
          />
        </button>
      </div>
    </div>
    <nav
      v-if="
        !page.isListingPage &&
        !page.isMainPageSmallScreenSized &&
        !page.isBasketPageSmallScreenSized &&
        !page.isCollectionPageSmallScreenSized
      "
      class="header__nav"
      :class="{ header__nav_about: page.isAboutPage }"
    >
      <ul class="header__nav-list">
        <li
          v-if="page.isAboutPage"
          key="All products"
          class="header__nav-list-item"
          @click="
            () => {
              currentSection = 'all'
            }
          "
        >
          <router-link class="header__nav-list-link" to="/collection">All products</router-link>
        </li>
        <li
          v-for="link in navLinks"
          :key="link.name"
          class="header__nav-list-item"
          @click="clickSection(link.name)"
        >
          <router-link
            class="header__nav-list-link"
            :class="{ 'header__nav-list-link_active': currentSection === link.name }"
            :to="link.link"
            >{{ link.name }}</router-link
          >
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
      width: 89%;
      grid-template-columns: repeat(3, minmax(min-content, max-content));
      justify-content: space-between;
      border: none;

      @include media_lg {
        width: 87.5%;
        grid-template-columns: repeat(2, minmax(min-content, max-content));
      }
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
        margin-right: 1.25rem;

        @include media_lg {
          margin-right: 0.25rem;
        }
      }

      &_basket {
        @include media_lg {
          margin-right: 0;
        }
      }

      .header__sections-menu {
        @include flex(row, end, center, 32px);
        margin-right: 2rem;

        @include media_lg {
          display: none;
        }

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
    padding-block: 1.25rem;

    &_about {
      @include size(100%, auto);
      max-width: unset;
      background-color: $light-grey;
      padding-block: 1.25rem;
      overflow-x: scroll;

      @include media_md {
        padding-block: 1rem;
      }

      &::-webkit-scrollbar {
        height: 0;
      }
    }

    &-list {
      list-style-type: none;
      margin: 0 auto;
      @include flex(row, center, center, 2.75rem);
      padding-inline: 1.5rem;
      width: max-content;

      &_listing {
        margin-left: 2.75rem;

        @include media_xl {
          gap: 1rem;
        }

        @include media_lg {
          display: none;
        }
      }

      &-item {
        .header__nav-list-link {
          text-decoration: none;
          @extend %ordinary;
          transition: all 0.2s ease;
          text-wrap: nowrap;

          &:hover {
            text-decoration: underline;
            opacity: 0.7;
          }

          &_active {
            color: coral;
          }
        }
      }
    }
  }
}
</style>
