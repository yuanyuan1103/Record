<template>
  <div class="position-relative bg-cover">
    <div style="overflow: hidden">
      <div class="orderBanner"></div>
    </div>
    <h2 class="position-absolute text-hv-center h2 fw-bold orderBanner-text">查看訂單狀態</h2>
  </div>
  <div class="orderTrack">
    <div class="container">
      <div class="orderInput">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            name="order"
            v-bind:class="{ 'is-invalid': orderError }"
            v-model="order"
            placeholder="請輸入訂單編號"
          />
          <div class="input-group-prepend">
            <button type="button" class="btn btn-outline-secondary" @click.prevent="gotoOrder" :disabled="orderError">
              <i class="bi bi-search-heart">查詢</i>
            </button>
          </div>
          <div class="invalid-feedback">
            {{ orderErrMsg }}
          </div>
        </div>
      </div>
      <h3 class="py-4 orderInput">重要提醒</h3>
      <div class="card orderInput">
        <div class="card-body">
          <ul class="card-text">
            <li>訂單編號範例：-N778fIMygF_0rRl8LlH</li>
            <li>付款方式限 信用卡&ATM轉帳 付款。</li>
            <li>如購買過程及收到商品有任何問題，歡迎聯繫我們， 我們會盡快回覆您。</li>
            <li>在商品庫存充足下，我們允諾下單三天內會出貨，如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。</li>
            <li>目前無提供海外服務。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: '',
      orderError: false,
      orderErrMsg: ''
    };
  },
  inject: [],
  methods: {
    gotoOrder() {
      this.$router.push(`/ordertrack/${this.order}`);
    }
  },
  watch: {
    order() {
      var inclde = /[A-Za-z0-9lu4e00-lugfa5]+$/;

      if (!inclde.test(this.order)) {
        this.orderError = true;
        this.orderErrMsg = '訂單未包含中文字';
      } else if (this.order.length < 20) {
        this.orderError = true;
        this.orderErrMsg = '長度應為20的訂單編號';
      } else {
        this.orderError = false;
      }
    }
  }
};
</script>

<style src="../../assets/helpers/_OrderTrack.css" scoped></style>
