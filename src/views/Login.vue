<template>
  <Loading :active="isLoading" />
  <div class="loginBg d-flex justify-content-center align-items-center">
    <div class="rounded loginBgcolor d-flex justify-content-center align-items-center">
      <div class="loginWidth">
        <h2 class="h2 text-center">管理者後台</h2>
        <form class="justify-content-center" @submit.prevent="signIn">
          <div class="mb-3 mt-3">
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="帳號"
              required
              autofocus
              v-model="user.username"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="密碼"
              required
              v-model="user.password"
            />
          </div>
          <button type="submit" class="btn btn-secondary w-100 mb-3">登入</button>
        </form>
        <button type="button" class="btn btn-dark w-100" @click="home">返回</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.isLoading = true
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.isLoading = false
          const { token, expired } = res.data
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
          this.$router.push('/dashboard/products')
        }
      })
    },
    home() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/helpers/_Login.scss';
</style>
