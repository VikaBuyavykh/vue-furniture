import { useRouter } from 'vue-router'

export function useGuards() {
  const router = useRouter()

  router.beforeEach((to) => {
    if (
      !router
        .getRoutes()
        .map((item) => item.name)
        .some((item) => item === to.name)
    ) {
      return { name: 'main' }
    }
  })

  router.beforeEach((to) => {
    if (
      to.name === 'product' &&
      localStorage.getItem('selectedProductId') !== to.params.productId
    ) {
      return { name: 'collection' }
    }
  })

  router.beforeEach((to) => {
    if (
      ['login', 'register'].some((item) => item === to.name) &&
      localStorage.getItem('authenticated')
    ) {
      return router.go(-1)
    }
  })

  router.beforeEach((to) => {
    if (to.name === 'profile' && !localStorage.getItem('authenticated')) {
      return { name: 'login' }
    }
  })
}
