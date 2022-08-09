<template>
  <Loading :active="isLoading" />
  <div class="box"></div>
  <div class="container-fluid h100">
    <div class="checkCart pt-5">
      <div class="stepAct border">
        <i class="bi bi-bag-check"></i>
        <span class="border-top">確認清單</span>
      </div>
      <i class="bi bi-caret-right-fill"></i>
      <div class="step border border-secondary">
        <i class="bi bi-card-list"></i>
        <span class="border-top">填寫資料</span>
      </div>
      <i class="bi bi-caret-right"></i>
      <div class="step border border-secondary">
        <i class="bi bi-credit-card"></i>
        <span class="border-top">確認付款</span>
      </div>
    </div>
    <div class="pt-5">
      <div class="row" v-if="cart.carts">
        <div class="col-12 col-lg-8 mb-4">
          <div class="border">
            <div class="container-fluid mt-4" v-if="cart.carts.length">
              <table class="table table-hover align-middle align-middle">
                <thead>
                  <tr class="align-middle text-sm text-gray-400">
                    <th scope="col">品項</th>
                    <th scope="col" class="d-none d-md-table-cell" width="24%">數量</th>
                    <th scope="col" class="d-none d-md-table-cell text-center">總計</th>
                    <th scope="col" class="d-none d-md-table-cell text-center">刪除</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td class="d-flex align-items-center flex-column flex-sm-row">
                      <div class="d-md-none p-2">
                        <button
                          type="button"
                          class="btn d-md-block mx-auto btnClose"
                          :disabled="status.loadingItem === item.id"
                          @click.prevent="removeCartItem(item.id)"
                        >
                          <i class="bi bi-x-circle h4"></i>
                        </button>
                      </div>
                      <img
                        class="productImg"
                        :src="item.product.imageUrl"
                        :alt="item.product.title"
                        :title="item.product.title"
                      />
                      <div class="ms-3 text-start py-4">
                        <div class="h5">{{ item.product.title }}</div>
                        <div v-if="item.product.origin_price != item.product.price" class="h5">
                          <span class="text-decoration-line-through text-muted h6"
                            >NT${{ $filters.currency(item.product.origin_price) }}</span
                          ><br />NT${{ $filters.currency(item.product.price) }}
                        </div>
                        <div v-if="item.product.origin_price == item.product.price" class="h5">
                          NT${{ $filters.currency(item.product.price) }}
                        </div>
                        <div class="d-md-none">
                          <div class="input-group">
                            <button
                              type="button"
                              class="btn btn-outline-dark"
                              @click.prevent="updateCart(item, item.qty - 1)"
                              :disabled="item.qty == 1"
                            >
                              <i class="bi bi-dash"></i>
                            </button>
                            <input
                              type="number"
                              min="1"
                              v-model.number="item.qty"
                              class="form-control form-control-sm text-center border-dark bg-transparent"
                              readonly
                            />
                            <button
                              type="button"
                              class="btn btn-outline-dark"
                              @click.prevent="updateCart(item, item.qty + 1)"
                              :disabled="item.qty == 10"
                            >
                              <i class="bi bi-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="d-none d-md-table-cell text-end align-middle">
                      <div class="input-group">
                        <button
                          type="button"
                          class="btn btn-outline-dark"
                          @click.prevent="updateCart(item, item.qty - 1)"
                          :disabled="item.qty == 1"
                        >
                          <i class="bi bi-dash"></i>
                        </button>
                        <input
                          type="number"
                          min="1"
                          v-model.number="item.qty"
                          class="form-control form-control-sm text-center border-dark bg-transparent"
                          readonly
                        />
                        <button
                          type="button"
                          class="btn btn-outline-dark"
                          @click.prevent="updateCart(item, item.qty + 1)"
                          :disabled="item.qty == 10"
                        >
                          <i class="bi bi-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td class="d-none d-md-table-cell text-end h5 py-5">NT${{ $filters.currency(item.total) }}</td>
                    <td class="d-none d-md-table-cell text-end">
                      <button
                        type="button"
                        class="btn d-md-block mx-auto btnClose"
                        :disabled="status.loadingItem === item.id"
                        @click.prevent="removeCartItem(item.id)"
                      >
                        <i class="bi bi-x-circle h4"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="container-fluid mt-4" v-else>
              <div class="text-center">
                <i class="bi bi-cart4 display-1 fw-bold text-dark"></i>
                <h3 class="p-3">目前購物車還沒有商品唷</h3>
                <router-link to="/product" class="btn btn-outline-dark btn-lg mb-5">選購商品</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 mb-4">
          <div class="border p-6">
            <div class="">
              <span class="text-sm text-gray-400 mr-4">商品總計</span
              ><span class="fs-4">NT${{ $filters.currency(cart.total) }}</span>
            </div>
            <div class="py-4"><span class="text-sm text-gray-400 mr-4">運費</span><span class="fs-4">NT$0</span></div>
            <div class="border-top py-4">
              <span class="text-sm text-gray-400 mr-4"></span>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="coupon_code" />
                <button type="button" class="btn btn-outline-secondary" @click.prevent="addCouponCode">
                  套用優惠碼
                </button>
              </div>
            </div>
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
            <button
              type="button"
              class="btn btn-dark w-100"
              @click.prevent="gotocheckinfo"
              :disabled="!cart.carts.length"
            >
              填寫資料
            </button>
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
      isLoading: false,
      cart: {},
      status: {
        loadingItem: ''
      },
      coupon_code: ''
    }
  },
  inject: ['$httpMessageState', 'emitter'],
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.cart = response.data.data
        this.isLoading = false
      })
    },
    removeCartItem(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      this.$http.delete(url).then((response) => {
        this.$httpMessageState(response, '移除購物車品項')
        this.status.loadingItem = ''
        this.emitter.emit('update-cart', id)
        this.getCart()
        this.isLoading = false
      })
    },
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.isLoading = true
      this.$http.post(url, { data: coupon }).then((response) => {
        this.$httpMessageState(response, '加入優惠券')
        this.getCart()
        this.isLoading = false
      })
    },
    updateCart(item, qty) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      this.status.loadingItem = item.id
      const cart = {
        product_id: item.product_id,
        qty
      }
      this.$http.put(url, { data: cart }).then((response) => {
        this.$httpMessageState(response, '更新購物車')
        this.status.loadingItem = ''
        this.getCart()
      })
    },
    gotocheckinfo() {
      this.$router.push('/checkinfo')
    }
  },
  created() {
    this.getCart()
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/helpers/_CheckCart.scss';
</style>
