<template>
  <FrontNavbar />
  <ToastMessages />
  <router-view />
  <Footer />
</template>

<script>
import emitter from '@/methods/emitter';
import FrontNavbar from '../components/FrontNavbar.vue';
import ToastMessages from '@/components/ToastMessages.vue';
import $httpMessageState from '@/methods/pushMessageState';
import Footer from '../components/Footer.vue';
import { currency } from '../methods/filters';

export default {
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
  }
};
</script>
