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
      <div class="step border">
        <i class="bi bi-card-list" />
        <span class="border-top">填寫資料</span>
      </div>
      <i class="bi bi-caret-right" />
      <div class="stepAct border border-secondary">
        <i class="bi bi-credit-card" />
        <span class="border-top">確認付款</span>
      </div>
    </div>
    <div v-if="!isLoading">
      <div class="paySuccess pt-5" v-if="order.is_paid">
        <i class="bi bi-check-circle-fill display-1 fw-bold text-dark" />
        <h3 class="p-3">感謝您的訂購，現貨商品將於1-2天內為您寄出。請留意時間。</h3>
        <router-link to="/product" class="btn btn-outline-dark btn-lg mb-5 rotate">繼續購物</router-link>
      </div>
      <div class="pt-5">
        <div class="row">
          <div class="col-12 col-lg-7 mb-4">
            <div class="justify-content-center p-6 border">
              <div class="mb-3">
                <h3 class="border-bottom">訂單編號</h3>
                <div class="d-flex justify-content-between">
                  <span>{{ order.id }}</span>
                  <button type="button" class="btn btn-outline-secondary" @click="toCopy(order.id)">
                    <i class="bi bi-clipboard-check" />
                  </button>
                </div>
              </div>
              <div class="mb-3">
                <h3 class="border-bottom">收件人信箱</h3>
                <span>{{ order.user.email }}</span>
              </div>
              <div class="mb-3">
                <h3 class="border-bottom">收件人姓名</h3>
                <span>{{ order.user.name }}</span>
              </div>
              <div class="mb-3">
                <h3 class="border-bottom">收件人電話</h3>
                <span>{{ order.user.tel }}</span>
              </div>
              <div class="mb-3">
                <h3 class="border-bottom">收件人地址</h3>
                <span>{{ order.user.address }}</span>
              </div>
              <div class="mb-3">
                <h3 class="border-bottom">留言</h3>
                <span>{{ order.message }}</span>
              </div>
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
                  <tr v-for="item in order.products" :key="item.id">
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
                        <h6>NT${{ $filters.currency(item.final_total) }}</h6>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <span class="text-sm text-gray-400">下單時間:</span
              >{{ new Date(order.create_at * 1000).toLocaleString() }}
              <div v-if="order.is_paid">
                <span class="text-sm text-gray-400">付款時間:</span
                >{{ new Date(order.paid_date * 1000).toLocaleString() }}
              </div>
              <div class="py-4">
                <span class="text-sm text-gray-400 mr-4">總金額</span>
              </div>
              <p class="fs-2 fw-bolder">NT${{ $filters.currency(order.total) }}</p>
              <div v-if="order.is_paid === false">
                <button type="button" class="btn btn-dark w-100" @click="payOrder">確認付款</button>
              </div>
              <div v-else>
                <button type="button" class="btn btn-dark w-100" disabled>已付款</button>
              </div>
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
      order: {
        user: {},
        products: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  inject: ['$httpMessageState', 'emitter'],
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.order = res.data.order
        this.isLoading = false
      })
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.isLoading = true
      this.$http.post(url).then((res) => {
        this.$httpMessageState(res, '付款成功')
        this.isLoading = false
        this.getOrder()
      })
    },
    toCopy(orderId) {
      navigator.clipboard
        .writeText(orderId)
        .then(() => {
          this.$httpMessageState(
            {
              data: {
                success: true
              }
            },
            '複製訂單編號'
          )
        })
        .catch((err) => {
          this.$httpMessageState(err, '複製失敗')
        })
    }
  },
  created() {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/helpers/_CheckOut.scss';
</style>
