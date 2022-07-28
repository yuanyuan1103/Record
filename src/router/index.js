import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '首頁',
    component: () => import('../views/frontend/HomeView.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/frontend/Index.vue')
      },
      {
        path: 'about',
        name: '關於',
        component: () => import('../views/frontend/AboutView.vue')
      },
      {
        path: 'faq',
        name: '問與答',
        component: () => import('../views/frontend/FAQ.vue')
      },
      {
        path: 'product',
        name: '產品清單',
        component: () => import('../views/frontend/UserCart.vue')
      },
      {
        path: 'product/:orderId',
        name: '產品詳細',
        component: () => import('../views/frontend/ProductDetil.vue')
      },
      {
        path: 'ordertrack',
        name: '訂單查詢',
        component: () => import('../views/frontend/OrderTrack.vue')
      },
      {
        path: 'ordertrack/:orderId',
        name: '訂單狀態',
        component: () => import('../views/frontend/UserOrder.vue')
      },
      {
        path: 'favorite',
        name: '最愛',
        component: () => import('../views/frontend/Favorite.vue')
      },
      {
        path: 'cart',
        name: '購物車',
        component: () => import('../views/frontend/CheckCart.vue')
      },
      {
        path: 'checkinfo',
        name: '訂單資訊',
        component: () => import('../views/frontend/CheckInfo.vue')
      },
      {
        path: 'checkout/:orderId',
        name: '結帳',
        component: () => import('../views/frontend/CheckOut.vue')
      }
    ]
  },
  {
    path: '/login',
    name: '登入',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: '後台儀表板',
    component: () => import('../views/backend/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: '產品列表',
        component: () => import('../views/backend/Products.vue')
      },
      {
        path: 'orders',
        name: '訂單列表',
        component: () => import('../views/backend/Orders.vue')
      },
      {
        path: 'coupons',
        name: '優惠券',
        component: () => import('../views/backend/Coupons.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = `${to.name} - Record`
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  next()
})

export default router
