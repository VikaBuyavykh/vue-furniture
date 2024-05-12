<script setup>
import AppButton from '@/components/UI/AppButton.vue'
</script>

<template>
  <section class="history">
    <ul class="history__container">
      <li class="history__text-box">
        <h3 class="history__title">
          From a studio in London to a global brand with over 400 outlets
        </h3>
        <p class="history__paragraph">
          When we started Avion, the idea was simple. Make high quality furniture affordable and
          available for the mass market.<br /><br />Handmade, and lovingly crafted furniture and
          homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for
          the London interior design community.
        </p>
        <app-button class="history__btn">Get in touch</app-button>
      </li>
      <li class="history__img-box">
        <img
          class="history__img"
          src="@/images/history-1.jpg"
          alt="The illustration of a decorated room"
        />
      </li>
      <li class="history__img-box">
        <img
          class="history__img"
          src="@/images/history-2.jpg"
          alt="The illustration of a decorated room"
        />
      </li>
      <li class="history__text-box">
        <h3 class="history__title">
          Our service isn’t just personal, it’s actually hyper personally exquisite
        </h3>
        <p class="history__paragraph">
          When we started Avion, the idea was simple. Make high quality furniture affordable and
          available for the mass market.<br /><br />Handmade, and lovingly crafted furniture and
          homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for
          the London interior design community.
        </p>
        <app-button class="history__btn">Get in touch</app-button>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.history {
  @include size(100%, auto);

  &__container {
    list-style-type: none;
    @include size(100%, auto);
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 603px);

    .history__text-box {
      padding: 72px 100px 54px 84px;
      @include flex(column, start, start, 25px);

      .history__title {
        @extend %h3;
      }

      .history__paragraph {
        @extend %ordinary;
        color: $grey-violet;
        text-align: left;
      }

      .history__btn {
        margin-top: auto;
      }
    }

    .history__img-box {
      @include size(100%, 100%);

      .history__img {
        @include size(100%, 100%);
        @extend %pic;
      }
    }
  }
}
</style>
