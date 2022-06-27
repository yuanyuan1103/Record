<template>
  <Loading :active="isLoading"></Loading>
  <div class="box"></div>
  <div class="container-fluid h100">
    <div class="checkCart pt-5">
      <div class="step border">
        <i class="bi bi-bag-check"></i>
        <span class="border-top">確認清單</span>
      </div>
      <i class="bi bi-caret-right"></i>
      <div class="step border">
        <i class="bi bi-card-list"></i>
        <span class="border-top">填寫資料</span>
      </div>
      <i class="bi bi-caret-right"></i>
      <div class="stepAct border border-secondary">
        <i class="bi bi-credit-card"></i>
        <span class="border-top">確認付款</span>
      </div>
    </div>
    <div class="pt-5">
      <div class="row px-5">
        <div class="col-12 col-lg-7 mb-4">
          <div class="justify-content-center p-6 border">
            <div class="mb-3">
              <h3 class="border-bottom">訂單編號</h3>
              <span>{{ order.id }}</span>
            </div>
            <div class="mb-3">
              <h3 class="border-bottom">Email :</h3>
              <span>{{ order.user.email }}</span>
            </div>
            <div class="mb-3">
              <h3 class="border-bottom">收件人姓名 :</h3>
              <span>{{ order.user.name }}</span>
            </div>
            <div class="mb-3">
              <h3 class="border-bottom">收件人電話 :</h3>
              <span>{{ order.user.tel }}</span>
            </div>
            <div class="mb-3">
              <h3 class="border-bottom">收件人地址 :</h3>
              <span>{{ order.user.address }}</span>
            </div>
            <div class="mb-3">
              <h3 class="border-bottom">留言 :</h3>
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
                      <div class="h3">{{ item.title }}</div>
                      <div class="">
                        <h5>數量:{{ item.qty }}</h5>
                        <h5>NT${{ $filters.currency(item.final_total) }}</h5>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
<style src="../assets/helpers/_CheckOut.css" scoped></style>
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
          console.log(this.order);
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
    }
  },
  created() {
    //取得路由id
    this.orderId = this.$route.params.orderId;
    console.log(this.orderId);
    //透過getOrder取得對應的訂單資料
    this.getOrder();
  }
};
</script>
