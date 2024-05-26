<script setup>
import AppButton from '@/components/UI/AppButton.vue'

function getInTouch() {
  document.querySelector('#invitation').scrollIntoView({ behavior: 'smooth', block: 'center' })
  document.querySelector('#email').focus()
}
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
        <app-button @click="getInTouch" class="history__btn history__btn_first"
          >Get in touch</app-button
        >
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
        <app-button @click="getInTouch" class="history__btn history__btn_second"
          >Get in touch</app-button
        >
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
    max-width: $xxl-screen-size;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 604px);

    @include media_md {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, max-content);
    }

    .history__text-box {
      padding: 4.5rem 6.5rem 3.375rem 5.25rem;
      @include flex(column, start, start, 1.5rem);

      @include media_xl {
        padding: 3rem 1.5rem 2.375rem;
      }

      @include media_md {
        gap: 0.75rem;
      }

      .history__title {
        @extend %h3;

        @include media_md {
          font-size: 1.25rem;
          line-height: 1.75rem;
          width: 80%;
        }
      }

      .history__paragraph {
        @extend %ordinary;
        color: $grey-violet;
        text-align: left;

        @include media_md {
          font-size: 0.875rem;
          line-height: 1.3125rem;
        }
      }

      .history__btn {
        margin-top: auto;
        transition: all 0.2s ease;

        @include media_md {
          &_first {
            margin-top: 3.25rem;
          }

          &_second {
            margin-block: 2.25rem 0.75rem;
          }
        }

        @include media_xs {
          align-self: stretch;
        }

        &:hover {
          background-color: rgba($violet, 0.2);
        }
      }
    }

    .history__img-box {
      @include size(100%, 100%);

      @include media_md {
        height: 358px;
      }

      .history__img {
        @include size(100%, 100%);
        @extend %pic;
      }
    }
  }
}
</style>
