import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ProductListingPage from '@/pages/ProductListingPage.vue'
import ShoppingBasket from '@/pages/ShoppingBasket.vue'

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
      path: '/product',
      name: 'product',
      component: ProductListingPage
    },
    {
      path: '/basket',
      name: 'basket',
      component: ShoppingBasket
    }
  ]
})

export default router
