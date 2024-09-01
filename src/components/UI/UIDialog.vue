<script setup>
import { computed } from 'vue'

defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true
  }
})

defineEmits(['toggle'])

const closeIcon = computed(() => {
  return new URL(`/src/images/icons/close.svg#svg`, import.meta.url).href
})
</script>

<template>
  <Transition name="fade">
    <div @click="$emit('toggle')" class="dialog" v-if="isDialogVisible">
      <div @click.stop class="dialog--content">
        <svg
          @click="$emit('toggle')"
          class="dialog--close"
          alt="Icon of close button"
          viewBox="0 0 32 32"
          fill="none"
        >
          <use :href="closeIcon" />
        </svg>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.dialog {
  position: fixed;
  inset: 0;
  background-color: rgba(black, 0.5);
  @include flex(row, end, center, 0);
  z-index: 2;

  &--content {
    @include size(50%, 100%);
    padding: 10%;
    @include flex(column, center, end, 20px);
    background-color: $light-gray;
    position: relative;

    @include media_lg {
      width: 60%;
    }

    @include media_sm {
      width: 70%;
    }
  }

  &--close {
    position: absolute;
    top: 2%;
    left: 5%;
    @include size(20px, 20px);
    cursor: pointer;
    @extend %hoverOpacity;
  }
}
</style>
