<script setup>
import { ref } from 'vue'

const tooltip = ref()

function openTooltip() {
  tooltip.value.showModal()
  setTimeout(() => tooltip.value.close(), 2000)
}

function closeTooltip() {
  tooltip.value.close()
}

defineExpose({
  openTooltip
})
</script>

<template>
  <dialog ref="tooltip" class="tooltip" @click="closeTooltip">
    <div @click.stop class="tooltip--wrapper">
      <p class="tooltip--text"><slot></slot></p>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.tooltip {
  @include size(500px, fit-content);
  padding: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  background-color: rgba($violet, 0.5);
  @extend %resetInputsAndBtns;
  transition:
    display 0.7s allow-discrete,
    overlay 0.5s allow-discrete,
    opacity 0.5s ease;
  opacity: 0;

  &[open] {
    opacity: 1;

    @starting-style {
      opacity: 0;
    }
  }

  &::backdrop {
    backdrop-filter: blur(5px);
  }

  &--wrapper {
    padding: 56px 48px;

    @include media_md {
      padding: 48px 32px;
    }
  }

  &--text {
    @include h3($white, center);

    @include media_md {
      @include h4($white, center);
    }
  }
}
</style>
