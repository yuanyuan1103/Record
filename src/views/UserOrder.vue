<template>
  <Loading :active="isLoading"></Loading>
  <div class="position-relative">
    <div style="overflow: hidden">
      <div class="orderBanner"></div>
    </div>
    <h2 class="position-absolute text-hv-center h2 fw-bold orderBanner-text">查看訂單狀態</h2>
  </div>
  <div class="h100 d-flex justify-content-center align-items-center" v-if="this.order == null">
    <div class="text-center">
      <i class="bi bi-bag-heart display-1 fw-bold text-dark"></i>
      <h3 class="p-3">請輸入正確的訂單編號或是再次逛逛商店下單</h3>
      <a href="#/product" class="btn btn-dark btn-lg mb-5">Shop Now</a>
    </div>
  </div>
  <div class="orderTrack container-fluid" v-else>
    <div class="pt-5">
      <div class="row">
        <div class="col-12 col-lg-7 mb-4">
          <div class="justify-content-center p-6 border">
            <div class="mb-3">
              <h3 class="border-bottom">訂單編號</h3>
              <div class="d-flex justify-content-between">
                <span>{{ order.id }}</span>
                <button type="button" class="btn btn-outline-secondary" @click="toCopy(order.id)">
                  <i class="bi bi-clipboard-check"></i>
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
                  <td class="d-flex align-items-center flex-column flex-sm-row">
                    <img class="productImg" :src="item.product.imageUrl" alt="" />
                    <div class="ms-3 text-start py-4">
                      <div class="h5">{{ item.product.title }}</div>
                      <h6>數量:{{ item.qty }}</h6>
                      <h6>NT${{ $filters.currency(item.final_total) }}</h6>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <span class="text-sm text-gray-400">下單時間:</span>{{ new Date(order.create_at * 1000).toLocaleString() }}
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
            <div v-if="order.is_paid === true">
              <button type="button" class="btn btn-dark w-100" disabled>已付款</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="../assets/helpers/_UserOrder.css" scoped></style>
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
      isLoading: false,
      searchOrderResult: ''
    };
  },
  inject: ['$httpMessageState', 'emitter'],
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.order;
          this.isLoading = false;
        }
      });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.isLoading = true;
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.$httpMessageState(res, '付款成功');
          this.isLoading = false;
          this.getOrder();
        }
      });
    },
    toCopy(data) {
      let elInput = document.createElement('input');
      elInput.value = data;
      elInput.select();
      document.execCommand('Copy');
      this.$httpMessageState(
        {
          data: {
            success: true
          }
        },
        '複製訂單編號'
      );
    }
  },
  created() {
    //取得路由id
    this.orderId = this.$route.params.orderId;
    //透過getOrder取得對應的訂單資料
    this.getOrder();
  }
};
</script>
