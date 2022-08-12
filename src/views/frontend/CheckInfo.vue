<template>
  <Loading :active="isLoading" />
  <div class="box"></div>
  <div class="container h100">
    <div class="checkCart pt-5">
      <div class="step border">
        <i class="bi bi-bag-check" />
        <span class="border-top">確認清單</span>
      </div>
      <i class="bi bi-caret-right" />
      <div class="stepAct border border-secondary">
        <i class="bi bi-card-list" />
        <span class="border-top">填寫資料</span>
      </div>
      <i class="bi bi-caret-right-fill" />
      <div class="step border border-secondary">
        <i class="bi bi-credit-card" />
        <span class="border-top">確認付款</span>
      </div>
    </div>
    <div class="pt-5">
      <div class="row">
        <div class="col-12 col-lg-7 mb-4">
          <div class="justify-content-center p-6 border">
            <Form @submit="createOrder" v-slot="{ errors }">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                  v-model="form.user.email"
                ></Field>
                <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">收件人姓名</label>
                <Field
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model="form.user.name"
                ></Field>
                <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="tel" class="form-label">收件人電話</label>
                <Field
                  id="tel"
                  name="電話"
                  type="tel"
                  class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入電話"
                  rules="required"
                  v-model="form.user.tel"
                ></Field>
                <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">收件人地址</label>
                <Field
                  id="address"
                  name="地址"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址"
                  rules="required"
                  v-model="form.user.address"
                ></Field>
                <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">留言</label>
                <textarea
                  name=""
                  id="message"
                  class="form-control"
                  cols="30"
                  rows="10"
                  v-model="form.message"
                ></textarea>
              </div>
              <button
                type="submit"
                class="btn btn-dark w-100"
                :disabled="
                  form.user.email &&
                  form.user.name &&
                  form.user.tel &&
                  form.user.address &&
                  Object.keys(errors).length !== 0
                "
              >
                送出訂單
              </button>
            </Form>
          </div>
        </div>
        <div class="col-12 col-lg-5 mb-4">
          <div class="border p-6">
            <table class="table align-middle align-middle">
              <thead>
                <tr class="align-middle text-sm text-gray-400">
                  <th scope="col">品項</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart.carts" :key="item.id">
                  <td class="d-flex flex-column flex-sm-row">
                    <img
                      class="productImg"
                      :src="item.product.imageUrl"
                      :alt="item.product.title"
                      :title="item.product.title"
                    />
                    <div class="text-start py-4">
                      <div class="h5">{{ item.product.title }}</div>
                      <h6>數量:{{ item.qty }}</h6>
                      <h6>NT${{ $filters.currency(item.total) }}</h6>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <span class="text-sm text-gray-400 mr-4">商品總計</span
              ><span class="fs-4">NT${{ $filters.currency(cart.total) }}</span>
            </div>
            <div class="py-4"><span class="text-sm text-gray-400 mr-4">運費</span><span class="fs-4">NT$0</span></div>
            <div class="border-top py-4">
              <span class="text-sm text-gray-400 mr-4">總金額</span>
            </div>
            <div v-if="cart.final_total == cart.total">
              <p class="fs-2 fw-bolder">NT${{ $filters.currency(cart.total) }}</p>
            </div>
            <div v-if="cart.final_total !== cart.total">
              <span class="text-decoration-line-through text-muted fs-5">NT${{ $filters.currency(cart.total) }}</span>
              <p class="fs-2 fw-bolder">NT${{ $filters.currency(cart.final_total) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      isEmpty: true
    }
  },
  inject: ['$httpMessageState', 'emitter'],
  methods: {
    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.isLoading = true
      this.$http.post(url, { data: order }).then((response) => {
        this.emitter.emit('update-cart')
        this.$router.push(`/checkout/${response.data.orderId}`)
        this.isLoading = false
        this.$httpMessageState(response, '建立訂單')
      })
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.cart = response.data.data
        this.isLoading = false
      })
    }
  },
  created() {
    this.getCart()
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/helpers/_CheckInfo.scss';
</style>
