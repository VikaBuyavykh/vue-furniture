<script setup>
import { provide, ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const isAboutPage = ref(false)
const isListingPage = ref(false)

function setIsAboutPage(value) {
  isAboutPage.value = value
}

function setIsListingPage(value) {
  isListingPage.value = value
}

provide('app', { setIsAboutPage, setIsListingPage })
</script>

<template>
  <div class="page">
    <app-header :isAboutPage="isAboutPage" :isListingPage="isListingPage"></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
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
