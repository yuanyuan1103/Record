<template>
  <Loading :active="isLoading"></Loading>
  <div class="loginBg d-flex justify-content-center align-items-center">
    <div class="rounded loginBgcolor d-flex justify-content-center align-items-center">
      <div class="loginWidth">
        <h2 class="h2 text-center">Login</h2>
        <form class="justify-content-center" @submit.prevent="signIn">
          <div class="mb-3 mt-3">
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
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
              placeholder="Password"
              required
              v-model="user.password"
            />
          </div>
          <button type="submit" class="btn btn-secondary w-100 mb-3">Sign in</button>
        </form>
        <button type="submit" class="btn btn-dark w-100" @click="home">Home</button>
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
        username: 'pijhs70401@gmail.com',
        password: 'ngomfn@1103'
      }
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.isLoading = true;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
          this.$router.push('/dashboard/products');
        }
      });
    },
    home() {
      this.$router.push('/');
    }
  }
};
</script>

<style>
.loginBg {
  background: url('https://images.unsplash.com/photo-1626814204422-9f97352a32c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80');
  background-size: cover;
  background-position: 60%;
  height: calc(100vh);
}
.loginBgcolor {
  width: 780px;
  max-width: 80%;
  background: #fef2f2a3;
  height: 60%;
  box-shadow: 0px 0px 5px 0px #474747;
}
.loginWidth {
  width: 80%;
  margin: 0 auto;
}
</style>
