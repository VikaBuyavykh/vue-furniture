<script setup>
import socials from '@/utils/socials.js'
</script>

<template>
  <div class="socials">
    <a
      v-for="(item, index) in socials"
      :key="index"
      :href="item.link"
      target="_blank"
      class="socials--item"
    >
      <img class="socials--item-icon" :src="item.img" :alt="item.svg" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.socials {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  list-style-type: none;

  @include media_sm {
    grid-template-columns: repeat(3, 1fr);
  }

  &--item {
    @include size(24px, 24px);
    cursor: pointer;
    @extend %hoverOpacity;
  }
}
</style>
