<template>
  <Loading :active="isLoading" />
  <div class="position-relative bg-cover">
    <div class="favoritebanner">
      <h2 class="position-absolute h2 fw-bold favoritebanner-text">喜愛清單</h2>
    </div>
  </div>
  <div class="container mt-4 h100" v-if="favoriteProduct.length">
    <table class="table table-striped table-hover align-middle">
      <thead>
        <tr class="text-center align-middle bgcolor">
          <th scope="col" class="d-none d-sm-block border-bottom-0"></th>
          <th scope="col">名稱</th>
          <th scope="col">金額</th>
          <th scope="col">加入購物車</th>
          <th scope="col">刪除</th>
        </tr>
      </thead>
      <tbody class="align-middle text-center">
        <tr class="align-middle" v-for="item in favoriteProduct" :key="item.id">
          <td class="align-middle d-none d-sm-block">
            <img class="productImg" :src="item.imageUrl" :alt="item.title" :title="item.title" />
          </td>
          <td class="align-middle h4 fw-bold">{{ item.title }}</td>
          <td class="align-middle">
            <p v-if="item.price == item.origin_price" class="fs-5 m-0 fw-bold">${{ currency(item.origin_price) }}</p>
            <p v-if="!(item.price == item.origin_price)" class="text-danger fw-bold m-0 fs-5">
              ${{ currency(item.price) }}
            </p>
            <p v-if="!(item.price == item.origin_price)" class="text-decoration-line-through m-0 text-muted fs-6">
              ${{ currency(item.origin_price) }}
            </p>
          </td>
          <td class="align-middle">
            <button type="button" class="btn d-md-block mx-auto btnShop" @click.prevent="addToCart(item.id, 1)">
              <i class="bi bi-cart-plus-fill h4"></i>
            </button>
          </td>
          <td class="align-middle">
            <button type="button" class="btn d-md-block mx-auto btnShop" @click.prevent="removeFavorite(item)">
              <i class="bi bi-trash h4"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="container-fluid d-flex justify-content-center align-items-center h100" v-else>
    <div class="text-center">
      <i class="bi bi-bag-heart display-1 fw-bold text-dark"></i>
      <h3 class="p-3">目前喜愛清單還沒有商品唷</h3>
      <router-link to="/product" class="btn btn-outline-dark btn-lg mb-5">來去逛逛</router-link>
    </div>
  </div>
</template>

<script>
import saveFavorite from '@/methods/saveFavorite'
import { currency } from '@/methods/filters'

export default {
  data() {
    return {
      favorite: saveFavorite.getFavorite() || [],
      favoriteProduct: [],
      isLoading: false,
      status: {
        loadingItem: ''
      }
    }
  },
  inject: ['$httpMessageState', 'emitter'],
  methods: {
    currency,
    getFavoriteProduct() {
      this.isLoading = true
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((response) => {
          this.isLoading = false
          this.favoriteProduct = response.data.products.filter((product) => this.favorite.includes(product.id))
        })
        .catch((error) => {
          this.isLoading = false
          this.$httpMessageState(error, '連線錯誤')
        })
    },
    removeFavorite(item) {
      this.isLoading = true
      this.favorite.splice(this.favorite.indexOf(item.id), 1)
      this.$httpMessageState(
        {
          data: {
            success: true
          }
        },
        `已將 ${item.title} 移除喜愛清單`
      )
      saveFavorite.saveFavorite(this.favorite)
      this.emitter.emit('update-favorite')
      this.isLoading = false
      this.getFavoriteProduct()
    },
    updateFavorite() {
      this.favorite = saveFavorite.getFavorite()
    },
    addToCart(id, qty) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const data = {
        product_id: id,
        qty
      }
      this.status.loadingItem = id
      this.$http
        .post(api, { data })
        .then((response) => {
          this.status.loadingItem = ''
          this.qty = 1
          this.emitter.emit('update-cart', id)
          this.$httpMessageState(response, ` ${response.data.data.product.title}加入購物車 `)
        })
        .catch((error) => {
          this.$httpMessageState(error, '連線錯誤')
        })
    }
  },
  created() {
    this.getFavoriteProduct()
  },
  mounted() {
    this.emitter.on('update-favorite', this.updateFavorite)
    this.getFavoriteProduct()
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/helpers/_Favorite.scss';
</style>
