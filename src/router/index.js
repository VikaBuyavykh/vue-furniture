import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ProductListingPage from '@/pages/ProductListingPage.vue'
import BasketPage from '@/pages/BasketPage.vue'
import CollectionPage from '@/pages/CollectionPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/products/:id',
      name: 'product',
      component: ProductListingPage
    },
    {
      path: '/basket',
      name: 'basket',
      component: BasketPage
    },
    {
      path: '/collection',
      name: 'collection',
      component: CollectionPage
    }
  ]
})

export default router
