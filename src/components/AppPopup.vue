<script setup>
import { inject, ref } from 'vue'
import navLinks from '@/utils/navLinks'

defineProps({
  isMainPageSmallScreenSized: Boolean
})

const { setIsPopupVisible } = inject('app')

const isCloseHovered = ref(false)

function hoverClose() {
  isCloseHovered.value = !isCloseHovered.value
}
</script>

<template>
  <div class="popup" @click="() => setIsPopupVisible(false)">
    <div @click.stop class="popup__content">
      <img
        @mouseenter="hoverClose"
        @mouseleave="hoverClose"
        @click="() => setIsPopupVisible(false)"
        :src="isCloseHovered ? '/close-active.svg' : '/close.svg'"
        alt="Close icon"
        class="popup__close"
      />
      <nav class="popup__menu">
        <router-link
          @click="() => setIsPopupVisible(false)"
          class="popup__link"
          v-for="item in navLinks"
          :key="item.name"
          :to="item.link"
          >{{ item.name }}</router-link
        >
        <div class="popup__separator"></div>
        <router-link @click="() => setIsPopupVisible(false)" class="popup__link" to="#"
          >Profile</router-link
        >
        <router-link @click="() => setIsPopupVisible(false)" class="popup__link" to="/basket"
          >Cart</router-link
        >
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.popup {
  position: fixed;
  inset: 0;
  background-color: rgba(black, 0.5);
  @include flex(row, end, stretch, 0px);
  z-index: 10;

  &__content {
    background-color: $light-grey;
    @include size(50%, 100%);
    position: relative;
    @include flex(column, stretch, stretch, 0px);
    padding: 3rem 2rem;

    @include media_md {
      width: 60%;
    }

    @include media_sm {
      width: 70%;
    }

    @include media_xs {
      width: 80%;
    }

    .popup__close {
      position: absolute;
      top: 1rem;
      left: 1rem;
      cursor: pointer;
    }

    .popup__menu {
      @include size(100%, 100%);
      @include flex(column, center, end, 1.5rem);

      .popup__link {
        text-decoration: none;
        @extend %ordinary;
        transition: all 0.2s ease;

        &:hover {
          text-decoration: underline;
          opacity: 0.7;
        }
      }

      .popup__separator {
        @include size(100%, 1px);
        background-color: rgba($violet, 0.5);
      }
    }
  }
}
</style>