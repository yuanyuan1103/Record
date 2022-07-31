<template>
  <!-- navbar desktop-header -->
  <nav class="desktop header navbar navbar-expand-lg navbar-dark fixed-top" :class="{ colorNav: act }">
    <div class="container">
      <router-link to="/" class="navbar-brand iconFont fs-3">Record</router-link>
      <div class="mainMeun">
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav navbar-nav-scroll">
            <li class="nav-item">
              <router-link to="/about" class="nav-link navbarFont">關於我們</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/product" class="nav-link navbarFont">唱片專區</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/faq" class="nav-link navbarFont">常見問答</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/ordertrack" class="nav-link navbarFont">訂單查詢</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="otherMeun">
        <router-link to="/favorite" class="nav-link"
          ><i class="bi bi-heart"></i
          ><span class="position-absolute badge rounded-pill bg-danger textS" v-if="favorite.length"
            >{{ favorite.length ? favorite.length : '' }}<span class="visually-hidden">unread messages</span></span
          ></router-link
        >
        <router-link to="/cart" class="position-relative nav-link">
          <i class="bi bi-cart3"></i>
          <span class="position-absolute badge rounded-pill bg-danger textS" v-if="cart"
            >{{ cart ? cart : '' }}<span class="visually-hidden">unread messages</span></span
          >
        </router-link>
      </div>
    </div>
  </nav>
  <!-- navbar mobile-header   -->
  <nav class="mobile header navbar navbar-expand-lg navbar-dark fixed-top" :class="{ colorNav: act }">
    <div class="container-fluid">
      <button type="button" class="navbar-toggler" @click.prevent="showOffcanvasMenu()">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-start main-panel open"
        tabindex="-1"
        :class="showMenu ? 'show' : ''"
        :style="{ visibility: showMenu ? 'visible' : 'hidden' }"
      >
        <div class="offcanvas-header">
          <button type="button" class="btn-close text-reset h2" @click.prevent="showOffcanvasMenu()">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div class="offcanvas-body">
          <ul class="list-unstyled">
            <li class="nav-item">
              <router-link to="/" class="nav-link" @click.prevent="showOffcanvasMenu()">Record</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" @click.prevent="showOffcanvasMenu()">關於我們</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/product" class="nav-link" @click.prevent="showOffcanvasMenu()">唱片專區</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/faq" class="nav-link" @click.prevent="showOffcanvasMenu()">常見問答</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/ordertrack" class="nav-link" @click.prevent="showOffcanvasMenu()">訂單查詢</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="otherMeun">
        <router-link to="/favorite" class="nav-link"
          ><i class="bi bi-heart"></i
          ><span class="position-absolute badge rounded-pill bg-danger textS" v-if="favorite.length"
            >{{ favorite.length ? favorite.length : '' }}<span class="visually-hidden">unread messages</span></span
          ></router-link
        >
        <router-link to="/cart" class="position-relative nav-link">
          <i class="bi bi-cart3"></i>
          <span class="position-absolute badge rounded-pill bg-danger textS" v-if="cart"
            >{{ cart ? cart : '' }}<span class="visually-hidden">unread messages</span></span
          >
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import saveFavorite from '@/methods/saveFavorite'

export default {
  data() {
    return {
      act: false,
      showMenu: false,
      favorite: saveFavorite.getFavorite() || [],
      cart: {}
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
    this.getCart()
  },
  inject: ['emitter'],
  methods: {
    handleScroll() {
      this.act = window.scrollY > 80
    },
    showOffcanvasMenu() {
      this.showMenu ? (this.showMenu = false) : (this.showMenu = true)
    },
    updateFavorite() {
      this.favorite = saveFavorite.getFavorite()
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then((response) => {
        this.cart = response.data.data.carts.length
      })
    }
  },
  mounted() {
    this.emitter.on('update-favorite', this.updateFavorite)
    this.emitter.on('update-cart', this.getCart)
  }
}
</script>

<style scoped lang="scss">
@import './../assets/helpers/_FrontNavbar.scss';
</style>
