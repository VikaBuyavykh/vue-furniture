<script setup>
import navigationLinks from '@/utils/navigationLinks.js'

const props = defineProps({
  vertical: {
    type: Boolean
  },
  isAuth: Boolean
})

const emit = defineEmits(['toggle', 'chooseSection'])

function handleClick() {
  if (props.vertical) {
    emit('toggle')
  }
}
</script>

<template>
  <nav class="navigation" :class="{ 'navigation-vertical': vertical }">
    <RouterLink
      class="navigation--item"
      v-for="item in navigationLinks"
      :key="item.name"
      :to="{ name: item.link }"
      @click="
        () => {
          handleClick()
          $emit('chooseSection', item.name)
        }
      "
      >{{ item.name }}</RouterLink
    >
    <div v-if="vertical" class="navigation--separator"></div>
    <RouterLink v-if="vertical" class="navigation--item" :to="{ name: 'cart' }" @click="handleClick"
      >Cart</RouterLink
    >
    <RouterLink
      v-if="isAuth && vertical"
      class="navigation--item"
      :to="{ name: 'profile' }"
      @click="handleClick"
      >Profile</RouterLink
    >
  </nav>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

.navigation {
  @include size(100%, auto);
  padding-block: 20px;
  @include flex(row, center, center, 44px);

  &-vertical {
    @include flex(column, center, end, 20px);
  }

  &--item {
    @include medium(#726e8d, center);
    text-decoration: none;
    text-wrap: nowrap;
    @extend %hoverOpacity;
  }

  &--separator {
    @include size(100%, 1px);
    background-color: $border-gray;
  }
}
</style>
