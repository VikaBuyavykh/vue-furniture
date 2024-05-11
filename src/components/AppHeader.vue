<script setup>
import { ref } from 'vue'
import navLinks from '@/utils/navLinks'

const searchQuery = ref('')
</script>

<template>
  <header class="header">
    <div class="header__row">
      <div class="header__input-box">
        <img class="header__input-btn" src="/search.svg" alt="Icon of search-button" />
        <input
          v-model="searchQuery"
          class="header__input"
          type="search"
          name="search"
          id="search"
        />
      </div>
      <h1 class="header__name">Avion</h1>
      <div class="header__buttons">
        <button class="header__btn">
          <img class="header__btn-img" src="/cart.svg" alt="Cart icon" />
        </button>
        <button class="header__btn">
          <img class="header__btn-img" src="/profile.svg" alt="Profile icon" />
        </button>
      </div>
    </div>
    <nav class="header__nav">
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
  @include size(96.25%, auto);
  max-width: 1386px;
  @include flex(column, start, stretch, 0);

  &__row {
    @include size(100%, auto);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding-block: 20px;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);

    .header__input-box {
      @include size(100%, auto);
      @include flex(row, start, center, 15px);

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
      justify-self: center;
      @extend %logo;
    }

    .header__buttons {
      justify-self: end;
      @include flex(row, end, center, 1rem);

      .header__btn {
        background-color: transparent;
        @extend %resetInputsAndBtns;
        @include size(1rem, 1rem);
      }
    }
  }

  &__nav {
    @include size(100%, auto);
    padding-block: 20px;

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
