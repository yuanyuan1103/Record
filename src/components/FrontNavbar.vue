<template>
  <!-- navbar desktop-header -->
  <nav class="desktop header navbar navbar-expand-lg navbar-dark fixed-top" :class="{ colorNav: act }">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Records</a>
      <div class="mainMeun">
        <button
          class="navbar-toggler"
          type="button"
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
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/product" class="nav-link">Records</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/faq" class="nav-link">FAQ</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/ordertrack" class="nav-link">Order</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="otherMeun">
        <router-link to="/userboard/favorite" class="nav-link"
          ><i class="bi bi-heart"></i
          ><span class="position-absolute badge rounded-pill bg-danger textS" v-if="favorite.length"
            >{{ favorite.length ? favorite.length : '' }}<span class="visually-hidden">unread messages</span></span
          ></router-link
        >
        <router-link to="/userboard/cart" class="position-relative nav-link">
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
      <button class="navbar-toggler" type="button" @click.prevent="showOffcanvasMenu()">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-start main-panel open"
        tabindex="-1"
        :class="showMenu ? 'show' : ''"
        :style="{ visibility: showMenu ? 'visible' : 'hidden' }"
      >
        <div class="offcanvas-header">
          <button type="button" class="btn-close text-reset" @click.prevent="showOffcanvasMenu()">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div class="offcanvas-body">
          <ul class="list-unstyled">
            <li class="nav-item">
              <router-link to="/" class="nav-link" aria-current="page" @click.prevent="showOffcanvasMenu()"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" @click.prevent="showOffcanvasMenu()">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/product" class="nav-link" @click.prevent="showOffcanvasMenu()">Records</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/faq" class="nav-link" @click.prevent="showOffcanvasMenu()">FAQ</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/ordertrack" class="nav-link" @click.prevent="showOffcanvasMenu()">Order</router-link>
            </li>
          </ul>
        </div>
      </div>
      <a class="navbar-brand" href="#">Records</a>
      <div class="otherMeun">
        <router-link to="/userboard/favorite" class="nav-link"
          ><i class="bi bi-heart"></i
          ><span class="position-absolute badge rounded-pill bg-danger textS" v-if="favorite.length"
            >{{ favorite.length ? favorite.length : '' }}<span class="visually-hidden">unread messages</span></span
          ></router-link
        >
        <router-link to="/userboard/cart" class="position-relative nav-link">
          <i class="bi bi-cart3"></i>
          <span class="position-absolute badge rounded-pill bg-danger textS" v-if="cart"
            >{{ cart ? cart : '' }}<span class="visually-hidden">unread messages</span></span
          >
        </router-link>
      </div>
    </div>
  </nav>
</template>
<style src="../assets/helpers/_FrontNaver.css" scoped></style>

<script>
import saveFavorite from '@/methods/saveFavorite';

export default {
  data() {
    return {
      act: false,
      showMenu: false,
      favorite: saveFavorite.getFavorite() || [],
      cart: {}
    };
  },
  created() {
    // this.emitter.on('update-favorite', (data) => {
    //   console.log('favorite', data);
    // });
    window.addEventListener('scroll', this.handleScroll);
    this.getCart();
  },
  inject: ['emitter'],
  methods: {
    handleScroll() {
      this.act = window.scrollY > 80 ? true : false;
    },
    showOffcanvasMenu() {
      this.showMenu ? (this.showMenu = false) : (this.showMenu = true);
    },
    updateFavorite() {
      this.favorite = saveFavorite.getFavorite();
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((response) => {
        this.cart = response.data.data.carts.length;
        // console.log('this.cart', this.cart);
      });
    }
  },
  mounted() {
    this.emitter.on('update-favorite', this.updateFavorite);
    this.emitter.on('update-cart', this.getCart);
  }
};
</script>
