<script setup>
defineProps({
  isDark: Boolean
})
</script>

<template>
  <div class="not-found" :class="{ 'not-found-dark': isDark }">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.not-found {
  margin-block-start: 16px;
  @include size(100%, auto);
  min-height: 200px;
  @include flex(column, center, center, 0px);
  border: 20px solid $light-gray;
  @include h4($dark-primary, center);

  &-dark {
    border-color: $white;
  }
}
</style>
