<script setup>
import { onMounted, watch } from 'vue'
import axios from 'axios'
import { usePopupStore } from '@/stores/popup'
import { useProductStore } from '@/stores/products'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppPopup from '@/components/AppPopup.vue'
import { storeToRefs } from 'pinia'

const popup = usePopupStore()
const product = useProductStore()
const { currentProductId, initialAmount } = storeToRefs(product)

async function getProducts() {
  try {
    const { data } = await axios.get('https://e7067c4f8e5566a0.mokky.dev/products')
    product.products = data
  } catch (error) {
    console.log(error)
  }
}

watch(currentProductId, () => {
  initialAmount.value = 1
})

onMounted(() => {
  getProducts()
})
</script>

<template>
  <div class="page">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
    <Transition name="fade">
      <app-popup v-if="popup.isPopupVisible"></app-popup>
    </Transition>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}

.fade-enter-active {
  animation: 0.6s fade forwards ease-in-out;
}

.fade-leave-active {
  animation: 0.5s fade reverse ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.page {
  @include size(100%, auto);
  @include flex(column, start, center, 0px);
  overflow: hidden;
  min-width: 280px;
}

.main {
  @include size(100%, auto);
  @include flex(column, start, center, 0px);
}
</style>
