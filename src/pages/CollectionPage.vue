<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { usePageStore } from '@/stores/page'
import { useProductStore } from '@/stores/products'
import AppCard from '@/components/UI/AppCard.vue'
import AppButton from '@/components/UI/AppButton.vue'
import { storeToRefs } from 'pinia'
import filters from '@/utils/filters'

const page = usePageStore()
const product = useProductStore()
const { priceFilterValue, designerFilterValue, typeFilterValue, products } = storeToRefs(product)

const addIndex = ref(3)
const numberOfPics = ref(3)
const isScreenXl = useMediaQuery('(min-width: 1201px)')

function loadMore() {
  numberOfPics.value = numberOfPics.value + addIndex.value
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

const collection = computed(() => {
  return priceFilter(products.value)
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
})
</script>

<template>
  <main class="collection">
    <section class="collection__cover">
      <h2 class="collection__cover-title">All products</h2>
    </section>
    <section class="collection__content">
      <form class="collection__filters">
        <fieldset class="collection__filter">
          <h5 class="collection__filter-title">{{ filters[0].title }}</h5>
          <div class="collection__filter-box">
            <label v-for="item in filters[0].values" :key="item" class="collection__label">
              <input
                class="visually-hidden"
                :type="filters[0].type"
                :name="filters[0].name"
                :value="item"
                v-model="typeFilterValue"
              />
              <span></span>
              {{ item }}
            </label>
          </div>
        </fieldset>
        <fieldset class="collection__filter">
          <h5 class="collection__filter-title">{{ filters[1].title }}</h5>
          <div class="collection__filter-box">
            <label v-for="item in filters[1].values" :key="item" class="collection__label">
              <input
                class="visually-hidden"
                :type="filters[1].type"
                :name="filters[1].name"
                :value="item"
                v-model="priceFilterValue"
              />
              <span></span>
              {{ item }}
            </label>
          </div>
        </fieldset>
        <fieldset class="collection__filter">
          <h5 class="collection__filter-title">{{ filters[2].title }}</h5>
          <div class="collection__filter-box">
            <label v-for="item in filters[2].values" :key="item" class="collection__label">
              <input
                class="visually-hidden"
                :type="filters[2].type"
                :name="filters[2].name"
                :value="item"
                v-model="designerFilterValue"
              />
              <span></span>
              {{ item }}
            </label>
          </div>
        </fieldset>
      </form>
      <form class="collection__selects">
        <select class="collection__select" name="filters" id="filters">
          <option value="">Filters &#9207;</option>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </select>
        <select class="collection__select" name="sorting" id="sorting">
          <option disabled value="">Sorting &#9207;</option>
          <option value="k">k</option>
          <option value="l">l</option>
          <option value="m">m</option>
          <option value="n">n</option>
        </select>
      </form>
      <div class="collection__list-box">
        <ul class="collection__list">
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
        </ul>
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

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
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
      }

      select {
        @extend %resetInputsAndBtns;
        padding-block: 1rem;
        background-color: $light-grey;
        @extend %body-medium;
        text-align: center;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    }

    .collection__filters {
      @include size(100%, auto);
      margin-top: 0.75rem;
      @include flex(column, start, start, 3rem);

      @include media_md {
        display: none;
      }

      .collection__filter {
        @include size(100%, auto);
        @include flex(column, start, start, 1.25rem);
        @extend %resetInputsAndBtns;

        &-title {
          @extend %h5;
        }

        &-box {
          @include size(100%, auto);
          @include flex(column, start, start, 0.75rem);

          .collection__label {
            @extend %body-medium;
            @include flex(row, start, center, 0.75rem);
            cursor: pointer;
            transition: all 0.2s ease;

            &:hover {
              opacity: 0.6;
              text-decoration: underline;
            }

            span {
              @include size(1rem, 1rem);
              border: 1px solid #dcdcdc;
              border-radius: 2px;
              transition: all 0.2s ease;
            }

            input[type='checkbox']:checked + span,
            input[type='radio']:checked + span {
              background-image: url('/stick.svg');
              @extend %bgi;
              border: none;
            }

            input[type='checkbox']:hover + span,
            input[type='radio']:hover + span {
              border-color: rgba($violet, 0.8);
            }
          }
        }
      }
    }

    .collection__list-box {
      @include size(100%, auto);
      @include flex(column, start, center, 2rem);

      @include media_md {
        gap: 2.75rem;
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
