<template>
  <div class="position-relative bg-cover">
    <div class="collectbanner bg-mask-60">
      <h2 class="position-absolute text-hv-center h2 fw-bold text-white-50 pageBanner-text">查看訂單狀態</h2>
    </div>
  </div>
  <div class="orderTrack">
    <div class="container">
      <div class="orderInput">
        <span class="icon"><i class="bi bi-search"></i></span>
        <input type="search" id="search" placeholder="訂單編號" v-model="order" />
        <button class="btn btn-outline-secondary" type="button" @click.prevent="gotoOrder">
          <i class="bi bi-search-heart"></i>
        </button>
      </div>
      <h3 class="pt-4"><i class="bi bi-music-note-beamed"></i>重要提醒</h3>
      <div class="card">
        <div class="card-body">
          <ul class="card-text">
            <li>付款方式限 信用卡 付款。</li>
            <li>大部分商品體積較大，因此不適用超商取貨，只提供 宅配到府。</li>
            <li>無庫存商品調貨時間請參考「商品平均調貨時間」。</li>
            <li>目前無提供海外服務。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="../assets/helpers/_OrderTrack.css" scoped></style>
<script>
export default {
  data() {
    return {
      order: ''
    };
  },
  inject: [],
  methods: {
    gotoOrder() {
      console.log(this.order);
      this.$router.push(`/ordertrack/${this.order}`);
      //ordertrack/:orderId
    }
  }
};
</script>
