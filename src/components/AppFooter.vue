<script setup>
import AppEmailInput from '@/components/UI/AppEmailInput.vue'
import sections from '@/utils/sections'
import socials from '@/utils/socials'
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__links-box">
        <ul class="footer__cols">
          <li v-for="section in sections" :key="section.section" class="footer__col">
            <h5 class="footer__col-title">{{ section.section }}</h5>
            <ul class="footer__col-links">
              <li class="footer__links-item" v-for="item in section.list" :key="item.name">
                <a class="footer__link" :href="item.link">{{ item.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="footer__input-group">
          <label class="footer__label" for="email">Join our mailing list</label>
          <app-email-input theme="dark" class="footer__input"></app-email-input>
        </div>
      </div>
      <div class="footer__copyright-box">
        <p class="footer__copyright">Copyright 2022 Avion LTD</p>
        <ul class="footer__socials">
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

      .footer__cols {
        list-style-type: none;
        @include size(100%, auto);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;

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

      .footer__copyright {
        @extend %footer-link;
      }

      .footer__socials {
        @include flex(row, end, center, 1.5rem);
        list-style-type: none;

        .footer__socials-item {
          @include size(1.5rem, 1.5rem);
        }
      }
    }
  }
}
</style>
