import { computed, toRefs } from 'vue'
import { useFiltersStore } from '@/stores/filters.js'
import { useCollectionStore } from '@/stores/collection.js'

export function useCollectionFilter() {
  const { collection } = toRefs(useCollectionStore())
  const { filters, sortingValue, searchQuery } = toRefs(useFiltersStore())

  const typeFilterValue = computed(() => filters.value[0].value)
  const priceFilterValue = computed(() => filters.value[1].value)
  const designerFilterValue = computed(() => filters.value[2].value)

  function typeFilter(item) {
    return typeFilterValue.value.length !== 0
      ? typeFilterValue.value.join(', ').includes(item['product type'])
      : true
  }

  function priceFilter(item) {
    return !priceFilterValue.value
      ? true
      : priceFilterValue.value === '0 - 100'
        ? item.price <= 100
        : priceFilterValue.value === '101 - 250'
          ? item.price <= 250 && item.price > 100
          : item.price > 250
  }

  function designerFilter(item) {
    return designerFilterValue.value.length !== 0
      ? designerFilterValue.value.join(', ').includes(item['designer'])
      : true
  }

  function searchFilter(item) {
    return searchQuery.value === ''
      ? item
      : item.title.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase())
  }

  function sort(arr) {
    return sortingValue.value === 'initial'
      ? arr.sort((a, b) => a.id - b.id)
      : sortingValue.value === 'higher'
        ? arr.sort((a, b) => a.price - b.price)
        : arr.sort((a, b) => b.price - a.price)
  }

  function filter(arr) {
    return arr.filter(
      (item) => typeFilter(item) && priceFilter(item) && designerFilter(item) && searchFilter(item)
    )
  }

  const filteredCollection = computed(() => collection.value && filter(sort(collection.value)))

  return {
    filteredCollection
  }
}
