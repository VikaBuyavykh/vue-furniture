<script setup>
import AppEmailInput from '@/components/UI/AppEmailInput.vue'
import sections from '@/utils/sections'
import socials from '@/utils/socials'

defineProps({
  isListingPage: Boolean
})
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__links-box">
        <div v-if="isListingPage" class="footer__address-and-socials">
          <div class="footer__address-group">
            <h2 class="footer__logo">Avion</h2>
            <address class="footer__address">
              <ul>
                <li>21 New York Street</li>
                <li>New York City</li>
                <li>United States of America</li>
                <li>432 34</li>
              </ul>
            </address>
          </div>
          <div class="footer__socials-group">
            <h3 class="footer__socials-title">Social links</h3>
            <ul class="footer__socials">
              <li v-for="item in socials" :key="item.img" class="footer__socials-item">
                <a :href="item.link">
                  <img :src="item.img" :alt="item.alt" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ul class="footer__cols">
          <li v-for="section in sections" :key="section.section" class="footer__col">
            <h5 class="footer__col-title">{{ section.section }}</h5>
            <ul class="footer__col-links">
              <li class="footer__links-item" v-for="item in section.list" :key="item.name">
                <router-link class="footer__link" :to="item.link">{{ item.name }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
        <div v-if="!isListingPage" class="footer__input-group">
          <label class="footer__label" for="email">Join our mailing list</label>
          <app-email-input theme="dark" class="footer__input"></app-email-input>
        </div>
      </div>
      <div class="footer__copyright-box">
        <p class="footer__copyright">Copyright 2022 Avion LTD</p>
        <ul v-if="!isListingPage" class="footer__socials">
          <li v-for="item in socials" :key="item.img" class="footer__socials-item">
            <a class="footer__socials-link" :href="item.link">
              <img class="footer__link-img" :src="item.img" :alt="item.alt" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.footer__socials {
  @include flex(row, end, center, 1.5rem);
  list-style-type: none;

  @include media_sm {
    display: none;
  }

  .footer__socials-item {
    @include size(1.5rem, 1.5rem);
    transition: all 0.2s ease;

    &:hover {
      opacity: 0.6;
      transform: scale(0.9);
    }
  }
}

.footer {
  @include size(100%, auto);
  background-color: $medium-blue;

  &__content {
    @extend %sizing;
    @include flex(column, start, stretch, 0px);

    .footer__links-box {
      padding-block: 58px 48px;
      @include size(100%, auto);
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      @include media_md {
        grid-template-columns: 1fr;
        gap: 40px;
        padding-block: 2.5rem 1rem;
      }

      .footer__address-and-socials {
        @include size(100%, auto);
        display: grid;
        grid-template-columns: max-content auto;
        gap: 65px;

        .footer__address-group {
          @include size(100%, auto);
          @include flex(column, start, start, 1rem);

          .footer__logo {
            @extend %h1;
          }

          .footer__address {
            @extend %footer-link;
            font-style: normal;

            ul {
              list-style-type: none;
              @include flex(column, start, start, 0.75rem);
            }
          }
        }

        .footer__socials-group {
          @include size(100%, auto);
          @include flex(column, start, start, 22px);

          .footer__socials-title {
            @extend %footer-col-title;
          }
        }
      }

      .footer__cols {
        list-style-type: none;
        @include size(100%, auto);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;

        @include media_sm {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 40px;
        }

        .footer__col {
          @include size(100%, auto);
          @include flex(column, start, start, 12px);

          &-title {
            @extend %footer-col-title;
          }

          &-links {
            list-style-type: none;
            @include size(100%, auto);
            @include flex(column, start, start, 12px);

            .footer__link {
              text-decoration: none;
              @extend %footer-link;
              transition: all 0.2s ease;

              &:hover {
                opacity: 0.5;
                text-decoration: underline;
              }
            }
          }
        }
      }

      .footer__input-group {
        @include size(100%, auto);
        @include flex(column, start, start, 12px);

        .footer__label {
          @extend %footer-col-title;
        }

        .footer__input {
          width: 100%;
        }
      }
    }

    .footer__copyright-box {
      @include size(100%, auto);
      padding-block: 25px;
      border-top: 1px solid $primary;
      @include flex(row, space-between, center, 15px);

      @include media_sm {
        justify-content: center;
      }

      .footer__copyright {
        @extend %footer-link;
      }
    }
  }
}
</style>
