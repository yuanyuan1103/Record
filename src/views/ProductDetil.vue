<template>
  <Loading :active="isLoading" />
  <div class="position-relative">
    <div style="overflow: hidden">
      <div
        class="collectbanner"
        :style="[product.imageUrl ? { backgroundImage: 'url(' + product.imageUrl + ')' } : {}]"
      ></div>
    </div>
    <h2 class="position-absolute text-hv-center h2 fw-bold pageBanner-text">{{ product.title }}</h2>
  </div>
  <div class="container" v-if="!isLoading">
    <!-- 麵包 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb p-3">
        <li class="breadcrumb-item">
          <router-link to="/product">Recorods</router-link>
        </li>
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="updateCategory(product.category)">{{ product.category }}</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-12 col-md-6 d-flex align-items-center p-3">
        <img :src="product.imageUrl" class="card-img-top imgProduct" :title="product.title" />
      </div>
      <div class="col-12 col-md-6 p-3 d-flex flex-column justify-content-center textspac">
        <div class="proTitle border-bottom mb-3">
          <h1 class="fw-bolder">{{ product.title }}</h1>
          <button type="button" @click.stop="toggleFavorite(product)" class="btn btn-favorite colorHeart">
            <i class="bi" :class="favorite.includes(product.id) ? 'bi-heart-fill' : 'bi-heart'"></i>
          </button>
        </div>
        <div classs="d-flex align-items-center">
          <span class="bg-secondary text-light rounded px-2">{{ product.category }}</span>
          <h2 v-if="!product.price" class="text-danger fs-5 fw-bolder pt-3">${{ currency(product.price) }}</h2>
          <h2 class="text-danger fs-5 fw-bolder pt-3">${{ currency(product.price) }}</h2>
          <span v-if="!(product.price == product.origin_price)" class="text-decoration-line-through text-muted pt-3"
            >${{ currency(product.origin_price) }}
          </span>
          <p class="pt-3 textspace">{{ product.description }}</p>
          <div class="input-group pt-3">
            <select class="form-select" v-model="qty">
              <option :value="qty" v-for="qty in 10" :key="qty">{{ qty }}</option>
            </select>
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="addToCart(product.id, qty)"
              :disabled="this.status.loadingItem === product.id"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <h2 class="pt-5 border-bottom">曲目</h2>
    <p class="pt-3 textspace text-muted textspac">{{ product.content }}</p>
    <nav>
      <div class="pt-4 nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="nav-link active"
          id="nav-first-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-first"
          type="button"
          role="tab"
          aria-controls="nav-first"
          aria-selected="true"
        >
          購買須知
        </button>
        <button
          class="nav-link"
          id="nav-second-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-second"
          type="button"
          role="tab"
          aria-controls="nav-second"
          aria-selected="false"
        >
          退換貨須知
        </button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="textspac pt-4 tab-pane fade show active"
        id="nav-first"
        role="tabpanel"
        aria-labelledby="nav-first-tab"
      >
        <ul>
          <li>現貨商品將於1-2天內為您寄出。(例假日除外)</li>
          <li>如調貨時程須 超過十日 以上，或是 商品缺貨 等其他問題，我們會以E-mail告知，請務必留意任何來信。</li>
          <li>訂單內若有預購商品，須待預購商品到貨後一併寄出，如欲分開寄送，請個別下單。</li>
        </ul>
      </div>
      <div class="textspac pt-4 tab-pane fade" id="nav-second" role="tabpanel" aria-labelledby="nav-second-tab">
        <ul>
          <li>
            黑膠唱片較容易因外在因素產生變化，「製作過程」或「拿取過程」也易有刮傷、不平等問題產生。由於本站售出的商品並皆是全新且未拆封的，故無法得知商品內部是否有瑕疵的狀況。
          </li>
          <li>
            黑膠出廠時，每間壓片廠沒辦法保證有百分之百的平整，若不平狀況晃動很大造成跳針或撥放聲音明顯不對，可以協助您換貨，但若不影響唱片撥放及聲音，是屬正常的。
          </li>
          <li>
            為避免黑膠瑕疵產生退換貨問題，本站可在出貨前先為您拆封檢查是否有嚴重「刮傷」、「不平」等狀況導致「無法播放」，請至「客服中心」留言告知訂單編號，以便我們為您安排。
          </li>
          <li>由於本站已有免運優惠，瑕疵商品如欲換貨，需自行負擔往返的運送費用。</li>
        </ul>
      </div>
    </div>
    <h2 class="pt-5 border-bottom">為您推薦</h2>
    <div class="row">
      <div class="col-12 col-sm-6 col-lg-3 p-3" v-for="item in productRandom" :key="item.id">
        <div class="product">
          <div class="bgr position-absolute top-0 end-0" v-if="!(item.price == item.origin_price)">sale</div>
          <a href="#" @click.prevent="gotoProduct(item.id)"><i class="bi bi-search"></i></a>
          <img :src="item.imageUrl" class="card-img-top imgProduct" :title="item.title" />
        </div>
        <div class="proDetil p-2">
          <div class="fw-bolder">
            <p class="textover">{{ item.title }}</p>
            <span v-if="item.price == item.origin_price" class="fs-5">${{ currency(item.origin_price) }}</span>
            <span v-if="!(item.price == item.origin_price)" class="text-danger fs-5">${{ currency(item.price) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { currency } from '../methods/filters';
import saveFavorite from '@/methods/saveFavorite';

export default {
  data() {
    return {
      product: {},
      id: '',
      favorite: saveFavorite.getFavorite() || [],
      isLoading: false,
      productRandom: [],
      qty: 1,
      status: {
        loadingItem: '' //對應品項id
      }
    };
  },
  inject: ['$httpMessageState', 'emitter'],
  watch: {
    '$route.params': {
      immediate: true,
      handler(params) {
        const { orderId } = params;
        this.id = orderId;
        this.getProduct();
        this.rendomProducts();
      }
    }
  },
  methods: {
    currency,
    rendomProducts() {
      this.isLoading = true;

      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (!res.data.success) throw new Error(res.data.message);

          this.productRandom = res.data.products
            .filter((x) => x.id !== this.id)
            .sort(() => Math.random() - 0.5)
            .splice(1, 4);

          // done
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err?.message);
        });
    },
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.product = response.data.product;
        }
      });
    },
    addToCart(id, qty) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const data = {
        product_id: id,
        qty
      };
      this.status.loadingItem = id;
      this.$http
        .post(api, { data })
        .then((response) => {
          if (!response.data.success) {
            this.$httpMessageState(response, '加入購物車');
            return;
          }
          this.status.loadingItem = '';
          this.qty = 1;
          this.$httpMessageState(response, '加入購物車');
          this.emitter.emit('update-cart', id);
        })
        .catch((error) => {
          this.$httpMessageState(error, '連線錯誤');
        });
    },
    toggleFavorite(product) {
      this.isLoading = true;
      if (this.favorite.includes(product.id)) {
        this.favorite.splice(this.favorite.indexOf(product.id), 1); //從最愛移除
        this.$httpMessageState(
          {
            data: {
              success: true
            }
          },
          '移除收藏'
        );
        this.isLoading = false;
      } else {
        this.favorite.push(product.id); //新增最愛
        this.$httpMessageState(
          {
            data: {
              success: true
            }
          },
          '加入收藏'
        );
        this.isLoading = false;
      }
      saveFavorite.saveFavorite(this.favorite);
      this.emitter.emit('update-favorite', this.favorite);
    },
    updateFavorite() {
      this.favorite = saveFavorite.getFavorite();
    },
    gotoProduct(id) {
      //跳轉至專屬於此產品id的頁面
      //給予空參數 取代原有的頁數或分類
      this.$router.push({ path: `/product/${id}`, params: {} });
    },
    updateCategory(category) {
      this.$router.push({
        name: '產品清單',
        query: { category: `${category}` }
      });
    }
  }
};
</script>

<style src="../assets/helpers/_ProductDetil.css" scoped></style>
