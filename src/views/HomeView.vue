<template>
  <Loading :active="isLoading" />
  <FrontNavbar />
  <ToastMessages />
  <router-view />
  <Footer />
  <div class="position-fixed end-0 bottom-0 scroll-top-btn pe-4 pb-4" v-if="isShowed">
    <button type="button" class="btn btn-secondary rounded-circle shadow btn-lg" @click="scrollToTop">
      <i class="bi bi-caret-up-fill"></i>
    </button>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import FrontNavbar from '../components/FrontNavbar.vue';
import ToastMessages from '@/components/ToastMessages.vue';
import $httpMessageState from '@/methods/pushMessageState';
import Footer from '../components/Footer.vue';
import { currency } from '../methods/filters';

export default {
  data() {
    return {
      isShowed: false,
      isLoading: false
    };
  },
  components: {
    ToastMessages,
    FrontNavbar,
    Footer
  },
  provide() {
    return {
      currency,
      emitter,
      $httpMessageState
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      const rootElement = document.documentElement;
      const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
      if (rootElement.scrollTop / scrollTotal > 0.1) {
        this.isShowed = true;
      } else {
        this.isShowed = false;
      }
    }
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    document.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
