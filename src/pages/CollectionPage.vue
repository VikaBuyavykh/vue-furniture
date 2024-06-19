<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { usePageStore } from '@/stores/page'
import { useProductStore } from '@/stores/products'
import { useFormStore } from '@/stores/form'
import AppFilters from '@/components/AppFilters.vue'
import AppCard from '@/components/UI/AppCard.vue'
import AppButton from '@/components/UI/AppButton.vue'
import { storeToRefs } from 'pinia'

const page = usePageStore()
const product = useProductStore()
const form = useFormStore()
const { searchQuery } = storeToRefs(form)
const {
  priceFilterValue,
  designerFilterValue,
  typeFilterValue,
  products,
  sortingValue,
  currentSection,
  searchQueryRequest
} = storeToRefs(product)
const { isFiltersPopupVisible } = storeToRefs(page)

const addIndex = ref(3)
const numberOfPics = ref(3)
const isScreenXl = useMediaQuery('(min-width: 1201px)')

function showAllProducts() {
  currentSection.value = 'all'
}

function loadMore() {
  numberOfPics.value = numberOfPics.value + addIndex.value
}

function clickPopup() {
  isFiltersPopupVisible.value = !isFiltersPopupVisible.value
}

function closePopup() {
  isFiltersPopupVisible.value = false
}

function sort(arr) {
  if (sortingValue.value === 'low') {
    return arr.sort((a, b) => a.price - b.price)
  } else if (sortingValue.value === 'high') {
    return arr.sort((a, b) => b.price - a.price)
  } else {
    return arr
  }
}

function sectionFilter(arr) {
  if (currentSection.value === 'all') {
    return arr
  } else {
    return arr.filter((item) => item.group === currentSection.value)
  }
}

function searchQueryFilter(arr) {
  return arr.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQueryRequest.value) ||
      item.description.toLowerCase().includes(searchQueryRequest.value)
  )
}

function typeFilter(arr) {
  if (typeFilterValue.value.length === 0) {
    return arr
  } else {
    return arr.filter((item) =>
      item.types.find((item) => typeFilterValue.value.find((type) => type === item))
    )
  }
}

function priceFilter(arr) {
  if (priceFilterValue.value === '') {
    return arr
  } else {
    if (priceFilterValue.value === '0 - 100') {
      return arr.filter((item) => item.price >= 0 && item.price <= 100)
    } else if (priceFilterValue.value === '101 - 250') {
      return arr.filter((item) => item.price >= 101 && item.price <= 250)
    } else {
      return arr.filter((item) => item.price > 250)
    }
  }
}

function designerFilter(arr) {
  if (designerFilterValue.value.length === 0) {
    return arr
  } else {
    return arr.filter((item) => designerFilterValue.value.find((des) => des === item.designer))
  }
}

const sectionProducts = computed(() => sectionFilter(products.value))

const collection = computed(() => {
  return sort(typeFilter(designerFilter(priceFilter(searchQueryFilter(sectionProducts.value)))))
})

const allProducts = computed(() => {
  const arr = collection.value
  let x = 0
  const newArr = []
  arr.forEach((item) => {
    if (item.horizontal) {
      newArr.push({ id: item.id, startingCellNumber: x + 1, horizontal: true })
      x += 2
    } else {
      newArr.push({ id: item.id, startingCellNumber: x + 1 })
      x++
    }
  })
  newArr
    .filter((item) => item.startingCellNumber % 3 === 0 && item.horizontal)
    .forEach((item) => {
      const elem = arr.find((el) => el.id === item.id)
      const index = arr.indexOf(elem)
      arr.splice(index, 1)
      arr.splice(index - 1, 0, elem)
    })
  return arr
})

const productsToShow = computed(() => {
  let num = numberOfPics.value
  return allProducts.value.filter((item, index) => {
    if (item.horizontal) {
      num--
    }
    if (index < num) {
      return item
    }
  })
})

const isBtnDisabled = computed(() => productsToShow.value.length === allProducts.value.length)

watch(isScreenXl, () => {
  isScreenXl.value ? (addIndex.value = 3) : (addIndex.value = 2)
  const x = numberOfPics.value - (numberOfPics.value % addIndex.value)
  x > 0 ? (numberOfPics.value = x) : (numberOfPics.value = addIndex.value)
})

onMounted(() => {
  page.isCollectionPage = true
  isScreenXl.value ? (numberOfPics.value = 9) : (numberOfPics.value = 6)
  isScreenXl.value ? (addIndex.value = 3) : (addIndex.value = 2)
})

onUnmounted(() => {
  page.isCollectionPage = false
  currentSection.value = 'all'
  searchQuery.value = ''
  searchQueryRequest.value = ''
})
</script>

<template>
  <main class="collection" @click="closePopup">
    <section class="collection__cover">
      <h2 @click="showAllProducts" class="collection__cover-title">All products</h2>
    </section>
    <section class="collection__content">
      <app-filters :main="true"></app-filters>
      <form class="collection__selects">
        <button @click.stop="clickPopup" class="collection__filters-btn" type="button">
          Filters &#9207;
        </button>
        <div @click.stop v-if="isFiltersPopupVisible" class="collection__filters-popup">
          <app-filters :main="false"></app-filters>
        </div>
        <select class="collection__select" name="sorting" id="sorting" v-model="sortingValue">
          <option disabled value="">Sorting &#9207;</option>
          <option value="low">From low prices</option>
          <option value="high">From high prices</option>
        </select>
      </form>
      <div class="collection__list-box">
        <p class="collection__no-prod-text" v-if="sectionProducts.length === 0 && currentSection">
          There is no products in this section. Choose another one or click "All products" to see
          the whole collection
        </p>
        <p
          class="collection__no-prod-text"
          v-if="productsToShow.length === 0 && sectionProducts.length !== 0"
        >
          There is no products matching your request. You might change the request parameters
        </p>
        <transition-group name="flip-list" tag="ul" class="collection__list" v-bind:css="false">
          <app-card
            v-for="item in productsToShow"
            :key="item.id"
            :id="item.id"
            :img="item.img"
            :alt="item.alt"
            :name="item.name"
            :price="item.price"
            :horizontal="item.horizontal"
            place="collection"
          ></app-card>
        </transition-group>
        <app-button v-if="!isBtnDisabled" @click="loadMore" class="collection__btn"
          >Load more</app-button
        >
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/mixinsAndExtensions.scss';

.flip-list-move {
  transition: transform 1s ease;
}

.collection {
  @include size(100%, auto);
  @include flex(column, start, stretch, 0px);

  &__cover {
    @include size(100%, 209px);
    background-image: url('@/images/products.jpg');
    @extend %bgi;
    padding-block: 2.25rem;
    @include flex(row, start, end, 0px);

    @include media_md {
      height: 146px;
      padding-block: 2rem;
    }

    &-title {
      @extend %sizing;
      @extend %h1;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        transform: translateY(-2px);
        color: $violet;
      }

      @include media_md {
        text-align: center;
      }
    }
  }

  &__content {
    @extend %sizing;
    padding-block: 2.25rem;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 0.5rem;

    @include media_md {
      grid-template-columns: 1fr;
      gap: 3rem;
      padding-block: 1.25rem 1.5rem;
    }

    .collection__selects {
      display: none;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      @include media_md {
        display: grid;
        position: relative;
      }

      .collection__filters-popup {
        width: calc(50% - 0.5rem);
        height: fit-content;
        padding: 1.5rem;
        background-color: $light-grey;
        position: absolute;
        top: 105%;
        left: 0;
        display: none;
        z-index: 10;

        @include media_md {
          display: flex;
        }
      }

      .collection__filters-btn,
      select {
        @extend %resetInputsAndBtns;
        padding-block: 1rem;
        background-color: $light-grey;
        @extend %body-medium;
        text-align: center;
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    }

    .collection__list-box {
      @include size(100%, auto);
      @include flex(column, start, center, 2rem);

      @include media_md {
        gap: 2.75rem;
      }

      .collection__no-prod-text {
        @extend %body-small;
        text-align: center;
      }

      .collection__list {
        @include size(100%, auto);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(auto-fit, 1fr);
        grid-auto-flow: dense;
        gap: 2.25rem 1.25rem;

        @include media_xl {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(auto-fit, 1fr);
        }

        @include media_md {
          gap: 1.25rem 1.25rem;
        }
      }

      .collection__btn {
        transition: all 0.2s ease;

        &:hover {
          background-color: rgba($violet, 0.2);
        }

        @include media_xs {
          align-self: stretch;
        }
      }
    }
  }
}
</style>
