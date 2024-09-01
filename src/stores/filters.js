import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filters', () => {
  const filters = ref([
    {
      title: 'Product type',
      type: 'checkbox',
      name: 'type',
      values: ['Furniture', 'Ceramics', 'Light fittings', 'Tableware', 'Candles', 'Plant pots'],
      value: []
    },
    {
      title: 'Price',
      type: 'radio',
      name: 'price',
      values: ['0 - 100', '101 - 250', '250 +'],
      value: null
    },
    {
      title: 'Designer',
      type: 'checkbox',
      name: 'designer',
      values: ['Robert Smith', 'Liam Gallagher', 'Biggie Smalls', 'Thom Yorke'],
      value: []
    }
  ])

  const sortingValue = ref('initial')

  const searchQuery = ref('')

  function resetPriceFilter(item) {
    if (item === filters.value[1].value) {
      filters.value[1].value = null
    }
  }

  function chooseSection(section) {
    filters.value[0].value = []
    filters.value[0].value.push(section)
    filters.value[1].value = null
    filters.value[2].value = []
  }

  function clearFilters() {
    filters.value[0].value = []
    filters.value[1].value = null
    filters.value[2].value = []
    sortingValue.value = 'initial'
    searchQuery.value = ''
  }

  function setFilters(value) {
    filters.value = value.filters
    sortingValue.value = value.sortingValue
    searchQuery.value = value.searchQuery
  }

  return {
    filters,
    resetPriceFilter,
    sortingValue,
    chooseSection,
    searchQuery,
    clearFilters,
    setFilters
  }
})
