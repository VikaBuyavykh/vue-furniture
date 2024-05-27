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
  max-width: $xxl-screen-size;
  @include size(100%, auto);
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @include media_md {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, minmax(280px, max-content));
  }

  &__img {
    @include size(100%, 521px);
    @extend %pic;

    @include media_md {
      height: 450px;
    }

    @include media_sm {
      height: 355px;
    }
  }

  &__container {
    padding: 4.375rem 4.5rem;
    @include size(100%, auto);

    @include media_lg {
      width: 100%;
      padding: 2.25rem 1.5rem 2.875rem;
    }
  }
}
</style>
