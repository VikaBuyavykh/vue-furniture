<script setup>
import AppInvitationContent from '@/components/UI/AppInvitationContent.vue'
</script>

<template>
  <section class="listing-invitation">
    <img
      class="listing-invitation__img"
      src="@/images/history-2.jpg"
      alt="The decorated room's photo"
    />
    <div class="listing-invitation__container">
      <app-invitation-content listing></app-invitation-content>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.listing-invitation {
  @include size(100%, auto);
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  &__img {
    @include size(100%, 521px);
    @extend %pic;
  }

  &__container {
    padding: 70px;
    @include size(85%, auto);
  }
}
</style>
