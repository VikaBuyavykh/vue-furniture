<script setup>
import { provide, ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppPopup from '@/components/AppPopup.vue'

const isMainPageSmallScreenSized = ref(false)
const isAboutPage = ref(false)
const isListingPage = ref(false)
const isPopupVisible = ref(false)

function setIsMainPageSmallScreenSized(value) {
  isMainPageSmallScreenSized.value = value
}

function setIsAboutPage(value) {
  isAboutPage.value = value
}

function setIsListingPage(value) {
  isListingPage.value = value
}

function setIsPopupVisible(value) {
  isPopupVisible.value = value
}

provide('app', {
  setIsAboutPage,
  setIsListingPage,
  setIsPopupVisible,
  setIsMainPageSmallScreenSized
})
</script>

<template>
  <div class="page">
    <app-header
      :isAboutPage="isAboutPage"
      :isListingPage="isListingPage"
      :isMainPageSmallScreenSized="isMainPageSmallScreenSized"
    ></app-header>
    <router-view></router-view>
    <app-footer :isListingPage="isListingPage"></app-footer>
    <Transition name="fade">
      <app-popup
        v-if="isPopupVisible"
        :isMainPageSmallScreenSized="isMainPageSmallScreenSized"
      ></app-popup>
    </Transition>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}

.fade-enter-active {
  animation: 0.6s fade forwards ease-in-out;
}

.fade-leave-active {
  animation: 0.5s fade reverse ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.page {
  @include size(100%, auto);
  @include flex(column, start, center, 0px);
  overflow: hidden;
  min-width: 280px;
}

.main {
  @include size(100%, auto);
  @include flex(column, start, center, 0px);
}
</style>
