<script setup>
import AppInvitationContent from '@/components/UI/AppInvitationContent.vue'
import benefits from '@/utils/benefits'
</script>

<template>
  <section class="invitation" id="invitation">
    <app-invitation-content>
      <ul class="invitation__benefits">
        <li v-for="item in benefits" :key="item" class="invitation__benefit">
          <img class="invitation__benefit-icon" src="/checkmark-filled.svg" alt="Checkmark icon" />
          {{ item }}
        </li>
      </ul>
    </app-invitation-content>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.invitation {
  @include size(100%, auto);
  padding-block: 97px 86px;
  background-image: url('@/images/invitation.jpg');
  @extend %bgi;

  @include media_md {
    padding-block: 1.5rem 2rem;
  }

  .invitation__benefits {
    margin-block: 1.875rem 2.5rem;
    list-style-type: none;
    @include flex(row, center, center, 2.25rem);

    @include media_md {
      flex-direction: column;
      align-items: start;
      gap: 0.5rem;
      margin-block: 1.25rem 1.75rem;
    }

    .invitation__benefit {
      @include flex(row, start, center, 0.25rem);
      @extend %body-medium;
      color: white;

      &-icon {
        @include size(1rem, 1rem);
      }
    }
  }
}
</style>
