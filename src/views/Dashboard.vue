<template>
  <Navbar></Navbar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages />
    <router-view />
  </div>
</template>

<script>
// 加入在components下的Navbar元件
import Navbar from '../components/Navbar.vue';
import ToastMessages from '@/components/ToastMessages.vue';
import $httpMessageState from '@/methods/pushMessageState';
//加入emitter
import emitter from '@/methods/emitter';
export default {
  components: {
    Navbar,
    ToastMessages
  },
  provide() {
    return {
      emitter,
      $httpMessageState
    };
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    console.log(token);
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login');
      }
    });
  }
};
</script>
