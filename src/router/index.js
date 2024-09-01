import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      alias: '/main',
      name: 'main',
      component: MainPage,
      meta: {
        isMainPage: true
      },
      props: { collection: true }
    },
    {
      path: '/product/:productId',
      name: 'product',
      component: () => import('@/pages/ProductPage.vue'),
      meta: {
        isProductPage: true
      },
      props: { isAdded: true, collection: true }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/pages/CartPage.vue'),
      meta: {
        isCartPage: true
      },
      props: { cart: true, cartTotal: true, isAuth: true }
    },
    {
      path: '/collection',
      name: 'collection',
      component: () => import('@/pages/CollectionPage.vue'),
      meta: {
        isCollectionPage: true
      },
      props: {
        filteredCollection: true,
        ardsAmount: true,
        isMoreDisabled: true,
        isSelectsPopupOpen: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/AboutPage.vue'),
      meta: {
        isAboutPage: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/pages/ProfilePage.vue'),
      meta: {
        isProfilePage: true
      },
      props: {
        user: true,
        apiError: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/LoginPage.vue'),
      meta: {
        isLoginPage: true,
        apiError: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/RegisterPage.vue'),
      meta: {
        isRegisterPage: true
      },
      props: {
        apiError: true
      }
    }
  ]
})

export default router
