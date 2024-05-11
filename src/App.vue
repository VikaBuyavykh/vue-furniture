<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppCover from '@/components/AppCover.vue'
import AppFeatures from '@/components/AppFeatures.vue'
import AppProducts from '@/components/AppProducts.vue'
import AppIntro from '@/components/AppIntro.vue'
import AppInvitation from '@/components/AppInvitation.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="page">
    <app-header></app-header>
    <main class="main">
      <app-cover></app-cover>
      <app-features></app-features>
      <app-products></app-products>
      <app-intro></app-intro>
      <app-invitation></app-invitation>
    </main>
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
