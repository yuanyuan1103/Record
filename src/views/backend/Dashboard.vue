<template>
  <BackendNavbar />
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages />
    <router-view />
  </div>
</template>

<script>
import BackendNavbar from '@/components/BackendNavbar.vue'
import ToastMessages from '@/components/ToastMessages.vue'
import $httpMessageState from '@/methods/pushMessageState'

import emitter from '@/methods/emitter'
export default {
  components: {
    BackendNavbar,
    ToastMessages
  },
  provide() {
    return {
      emitter,
      $httpMessageState
    }
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  }
}
</script>
