<script setup>
import { ref, watchEffect, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'
import { klona } from 'klona'
import { useCollectionStore } from '@/stores/collection.js'
import { useProductStore } from '@/stores/product.js'
import { useFiltersStore } from '@/stores/filters.js'
import { useProductsFetch } from '@/composables/useProductsFetch.js'
import { useCollectionSettings } from '@/composables/useCollectionSettings.js'
import { useSelectsPopup } from '@/composables/useSelectsPopup.js'
import { useFormSubmit } from '@/composables/useFormSubmit.js'
import { useCartService } from '@/composables/useCartService.js'
import { useAuthenticate } from '@/composables/useAuthenticate.js'
import { useSubscribe } from '@/composables/useSubscribe.js'
import { useGuards } from '@/composables/useGuards.js'
import ShopReminder from '@/components/ShopReminder.vue'
import ShopHeader from '@/components/ShopHeader.vue'
import ShopFooter from '@/components/ShopFooter.vue'
import UIDialog from '@/components/UI/UIDialog.vue'
import ShopNavigation from '@/components/ShopNavigation.vue'
import UITooltip from '@/components/UI/UITooltip.vue'
import UILoader from '@/components/UI/UILoader.vue'

//initializing

const { fetchData } = useProductsFetch()
const { setInitialCollection, setCollection } = useCollectionStore()

watchEffect(() => fetchData.value && setInitialCollection(klona(fetchData.value)))

//dialog

const isDialogVisible = ref(false)

function toggleDialog() {
  isDialogVisible.value = !isDialogVisible.value
}

//product

const { addToCart } = useCollectionStore()
const { isProductAdded } = toRefs(useProductStore())
const { setProductId } = useProductStore()

//filtering

const { collection } = toRefs(useCollectionStore())
const { chooseSection, clearFilters, setFilters } = useFiltersStore()
const { searchQuery, sortingValue, filters } = toRefs(useFiltersStore())
const { filteredCollection, cardsAmount, isMoreDisabled, clickMore } = useCollectionSettings()
const { isSelectsPopupOpen, toggleSelectsPopup, closeSelectsPopup } = useSelectsPopup()

//tooltip

const tooltip = ref()

//profile-, register- and login-data

const {
  user,
  setUserValues,
  form,
  setFormValues,
  resetForm,
  handleLogin,
  handleRegister,
  handleUpdateProfile,
  tooltipText,
  isTooltipOpen,
  resetTooltip,
  isAuth,
  setAuth,
  apiError,
  resetApiError,
  isLoading,
  setLoading
} = useFormSubmit()

watch(isTooltipOpen, () => {
  if (isTooltipOpen.value) {
    tooltip.value.openTooltip()
    resetTooltip()
  }
})

//cart

function showResult(text) {
  setLoading(false)
  tooltipText.value = text
  isTooltipOpen.value = true
}

const { makeOrder, cart, cartTotal, clearCart } = useCartService(setLoading, showResult)

//restart

const { isWatchPossible } = useAuthenticate(
  setAuth,
  setUserValues,
  setFormValues,
  setCollection,
  setFilters,
  setProductId
)

watch(
  [cart, isWatchPossible],
  () =>
    isWatchPossible.value && localStorage.setItem('collection', JSON.stringify(collection.value)),
  { deep: true }
)

watch(
  [searchQuery, filters, sortingValue, isWatchPossible],
  () =>
    isWatchPossible.value &&
    localStorage.setItem(
      'filters',
      JSON.stringify({
        sortingValue: sortingValue.value,
        searchQuery: searchQuery.value,
        filters: filters.value
      })
    ),
  { deep: true }
)

//logout

function logOut() {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 1000)
  localStorage.clear()
  setUserValues({ name: '', email: '', id: null })
  clearCart()
  clearFilters()
  isAuth.value = false
}

//subscription

const { subsInput, mailingInput, resetInputs, subscribe } = useSubscribe(showResult, setLoading)

//navigation

const route = useRoute()
useGuards()
</script>

<template>
  <div class="page">
    <ShopReminder v-if="route.meta.isProductPage || route.meta.isAboutPage" />
    <ShopHeader
      :is-auth="isAuth"
      v-model:searchQuery="searchQuery"
      @toggle="toggleDialog"
      @choose-section="chooseSection"
    />
    <RouterView
      :collection="collection"
      :cart="cart"
      :cart-total="cartTotal"
      :is-added="isProductAdded"
      @add="addToCart"
      @make-order="makeOrder"
      :filtered-collection="filteredCollection"
      :cards-amount="cardsAmount"
      :is-more-disabled="isMoreDisabled"
      :is-selects-popup-open="isSelectsPopupOpen"
      @toggle-selects-popup="toggleSelectsPopup"
      @close-selects-popup="closeSelectsPopup"
      @more="clickMore"
      :user="user"
      v-model:nameValue="form.name"
      v-model:emailValue="form.email"
      v-model:passwordValue="form.password"
      v-model:repeatedPasswordValue="form.repeatedPassword"
      @reset-form="resetForm"
      @set-form-values="setFormValues"
      @update-profile="handleUpdateProfile"
      @register="handleRegister"
      @login="handleLogin"
      :api-error="apiError"
      @reset-api-error="resetApiError"
      @log-out="logOut"
      :is-auth="isAuth"
      v-model:subs="subsInput"
      @reset-inputs="resetInputs"
      @subscribe="subscribe"
    />
    <ShopFooter @choose-section="chooseSection" @subscribe="subscribe" v-model="mailingInput" />
    <UIDialog :is-dialog-visible="isDialogVisible" @toggle="toggleDialog">
      <ShopNavigation
        :is-auth="isAuth"
        vertical
        @toggle="toggleDialog"
        @choose-section="chooseSection"
      />
    </UIDialog>
    <UITooltip ref="tooltip">{{ tooltipText }}</UITooltip>
    <Transition name="fade">
      <UILoader v-if="isLoading" />
    </Transition>
  </div>
</template>

<style lang="scss">
@import '@/styles/scss/mixins.scss';
@import '@/styles/scss/extensions.scss';
@import '@/styles/scss/variables.scss';
@import '@/styles/scss/fonts.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
}

.form-link {
  @include h5($dark-primary, right);
  margin-inline: auto;

  a {
    color: $primary;
    @extend %hoverOpacity;
  }
}

.input-invalid {
  color: coral !important;
}

.page {
  @include size(100%, auto);
  min-height: 100vh;
  @include flex(column, start, center, 0px);
  overflow: hidden;
  min-width: 280px;
}

.main {
  @include size(100%, auto);
  @include flex(column, start, center, 0px);
  flex-grow: 1;
}

.fade-enter-active {
  animation: 0.5s fade forwards ease;
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
</style>
