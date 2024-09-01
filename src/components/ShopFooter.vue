<script setup>
import { useRoute } from 'vue-router'
import { useFiltersStore } from '@/stores/filters.js'
import links from '@/utils/footerLinks.js'
import ShopSocials from '@/components/ShopSocials.vue'
import UIEmailInput from '@/components/UI/UIEmailInput.vue'

const emit = defineEmits(['chooseSection', 'subscribe'])

const mailingInput = defineModel()

const route = useRoute()

const { clearFilters } = useFiltersStore()

function handleClick(title, section) {
  if (title === 'Categories') {
    emit('chooseSection', section)
  } else if (title === 'Menu') {
    //hardcode: planning to inprove it further
    clearFilters()
  }
}
</script>

<template>
  <footer class="footer">
    <div class="footer--content">
      <div class="footer--main-box" :class="{ 'footer--main-box-prod': route.meta.isProductPage }">
        <ul class="footer--columns" :class="{ 'footer--columns-prod': route.meta.isProductPage }">
          <li v-if="route.meta.isProductPage" class="footer--column">
            <h2 class="footer--title">Avion</h2>
            <p
              v-for="(item, index) in [
                '21 New York Street',
                'New York City',
                'United States of America',
                '432 34'
              ]"
              :key="index"
              class="footer--adress"
            >
              {{ item }}
            </p>
          </li>
          <li v-if="route.meta.isProductPage" class="footer--column footer--column-socials">
            <h5 class="footer--column-title">Social links</h5>
            <ShopSocials />
          </li>
          <li
            v-for="section in links"
            :key="section.title"
            class="footer--column"
            :class="{
              'footer--column-optional': section.title === 'Categories' && route.meta.isProductPage
            }"
          >
            <h5 class="footer--column-title">{{ section.title }}</h5>
            <nav class="footer--links">
              <RouterLink
                v-for="{ link, linkTitle } in section.links"
                :key="linkTitle"
                class="footer--link"
                :to="{ name: link }"
                @click="handleClick(section.title, linkTitle)"
                >{{ linkTitle }}</RouterLink
              >
            </nav>
          </li>
          <li v-if="!route.meta.isProductPage" class="footer--column footer--column-for-input">
            <h5 class="footer--column-title">Join our mailing list</h5>
            <UIEmailInput
              formName="footer"
              @subscribe="$emit('subscribe', $event)"
              v-model:subs="mailingInput"
              theme="contrast-dark"
            />
          </li>
        </ul>
      </div>
      <div class="footer--info-box" :class="{ 'footer--info-box-prod': route.meta.isProductPage }">
        <p class="footer--text">Copyright 2022 Avion LTD</p>
        <ShopSocials class="footer--socials" v-if="!route.meta.isProductPage" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.footer {
  @include size(100%, auto);
  margin-block-start: auto;
  background-color: $dark-primary;

  &--content {
    @extend %sizing;
    @include flex(column, start, stretch, 0);
  }

  &--main-box {
    @include size(100%, auto);
    margin-block: 58px 48px;

    @include media_md {
      margin-block: 40px 16px;
    }

    &-prod {
      margin-block: 50px 40px;

      @include media_md {
        margin-top: 40px;
      }
    }
  }

  &--columns {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
    list-style-type: none;

    @include media_lg {
      grid-template: repeat(2, minmax(min-content, max-content)) / repeat(3, 1fr);
      row-gap: 44px;
    }

    @include media_sm {
      grid-template: repeat(3, minmax(min-content, max-content)) / repeat(2, 1fr);
    }

    &-prod {
      @include media_sm {
        grid-template-rows: repeat(2, minmax(min-content, max-content));
      }
    }
  }

  &--column {
    @include flex(column, start, start, 12px);

    &-optional {
      @include media_sm {
        display: none;
      }
    }

    &-socials {
      grid-column: 2 / span 2;

      @include media_sm {
        margin-top: 18px;
        grid-column: 2 / 3;
        gap: 26px;
      }
    }

    &-for {
      &-input {
        grid-column: 4 / span 3;

        @include media_lg {
          grid-row: 2 / 3;
          grid-column: 1 / span 3;
        }

        @include media_sm {
          grid-row: 3 / 4;
          grid-column: 1 / span 2;
        }
      }
    }

    &-title {
      @include h5($white, left);
    }
  }

  &--title {
    @include h1($white, left);
  }

  &--adress {
    @include small($white, left);
  }

  &--links {
    @include flex(column, start, start, 9px);
  }

  &--link {
    text-decoration: none;
    @include small($white, left);
    @extend %hoverOpacity;
  }

  &--info-box {
    @include size(100%, auto);
    padding-block: 22px;
    @include flex(row, space-between, center, 16px);
    border-block-start: 1px solid $primary;

    @include media_sm {
      justify-content: center;
      padding-block: 15px;
    }

    &-prod {
      padding-block: 15px;
    }
  }

  &--text {
    @include small($white, left);
  }

  &--socials {
    @include media_sm {
      display: none;
    }
  }
}
</style>
