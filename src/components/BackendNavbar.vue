<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #000">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/img/record.png" alt="LOGO" width="30" height="30" />
        Record
      </a>
      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/dashboard/products" class="nav-link">產品列表</router-link>
          <router-link to="/dashboard/orders" class="nav-link">訂單列表</router-link>
          <router-link to="/dashboard/coupons" class="nav-link">優惠券</router-link>
          <a href="#" @click.prevent="logout" class="nav-link">登出</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>
