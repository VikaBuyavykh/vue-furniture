import { computed, ref } from 'vue'
import { useWindowSize } from '@/composables/useWindowSize.js'
import { useCollectionFilter } from '@/composables/useCollectionFilter.js'
import {
  LARGE_SCREEN_INITIAL_CARDS_AMOUNT,
  SMALL_SCREEN_INITIAL_CARDS_AMOUNT,
  LARGE_SCREEN_CARDS_AMOUNT_IN_A_ROW,
  SMALL_SCREEN_CARDS_AMOUNT_IN_A_ROW
} from '@/utils/constants.js'

export function useCollectionSettings() {
  const { filteredCollection } = useCollectionFilter()
  const { width } = useWindowSize()

  const clickMoreCounter = ref(0)

  const amountInARow = computed(() =>
    width.value <= 1000 ? SMALL_SCREEN_CARDS_AMOUNT_IN_A_ROW : LARGE_SCREEN_CARDS_AMOUNT_IN_A_ROW
  )

  const cardsAmount = computed(
    () =>
      (width.value <= 1000
        ? SMALL_SCREEN_INITIAL_CARDS_AMOUNT
        : LARGE_SCREEN_INITIAL_CARDS_AMOUNT) +
      clickMoreCounter.value * amountInARow.value
  )

  const isMoreDisabled = computed(
    () => filteredCollection.value && filteredCollection.value.length <= cardsAmount.value
  )

  function clickMore() {
    clickMoreCounter.value++
  }

  return {
    filteredCollection,
    cardsAmount,
    isMoreDisabled,
    clickMore
  }
}
