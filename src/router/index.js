import { createRouter, createWebHashHistory } from 'vue-router';
const HomeView = () => import('../views/HomeView.vue');
const IndexView = () => import('../views/Index.vue');
const LoginView = () => import('../views/Login.vue');
const AboutView = () => import('../views/AboutView.vue');
const DashboardView = () => import('../views/Dashboard.vue');
const UserProductView = () => import('../views/UserCart.vue');
const ProductsView = () => import('../views/Products.vue');
const OrdersView = () => import('../views/Orders.vue');
const CouponsView = () => import('../views/Coupons.vue');
const FavoriteView = () => import('../views/Favorite.vue');
const ProductDetil = () => import('../views/ProductDetil.vue');
const OrderTrack = () => import('../views/OrderTrack.vue');
const CheckCart = () => import('../views/CheckCart.vue');
const CheckInfo = () => import('../views/CheckInfo.vue');
const CheckOut = () => import('../views/CheckOut.vue');
const FAQ = () => import('../views/FQA.vue');
const UserOrder = () => import('../views/UserOrder.vue');

const routes = [
  {
    path: '/',
    name: '首頁',
    component: HomeView,
    children: [
      {
        path: '',
        name: '首頁',
        component: IndexView
      },
      {
        path: 'about',
        name: '關於',
        component: AboutView
      },
      {
        path: 'faq',
        name: '問與答',
        component: FAQ
      },
      {
        path: 'product',
        name: '產品清單',
        component: UserProductView
      },
      {
        path: 'product/:orderId',
        name: '產品詳細',
        component: ProductDetil
      },
      {
        path: 'ordertrack',
        name: '訂單查詢',
        component: OrderTrack
      },
      {
        path: 'ordertrack/:orderId',
        name: '訂單狀態',
        component: UserOrder
      },
      {
        path: 'favorite',
        name: '最愛',
        component: FavoriteView
      },
      {
        path: 'cart',
        name: '購物車',
        component: CheckCart
      },
      {
        path: 'checkinfo',
        name: '訂單資訊',
        component: CheckInfo
      },
      {
        path: 'checkout/:orderId',
        name: '結帳',
        component: CheckOut
      }
    ]
  },
  {
    path: '/login',
    name: '登入',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: '後台儀表板',
    component: DashboardView,
    children: [
      {
        path: 'products',
        name: '產品列表',
        component: ProductsView
      },
      {
        path: 'orders',
        name: '訂單列表',
        component: OrdersView
      },
      {
        path: 'coupons',
        name: '優惠券',
        component: CouponsView
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
});

router.beforeEach((to, from, next) => {
  window.document.title = `${to.name} - Record`;
  next();
});

export default router;
