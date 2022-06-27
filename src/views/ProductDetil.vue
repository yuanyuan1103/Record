<template>
  <Loading :active="isLoading"></Loading>
  <div class="position-relative bg-cover">
    <div class="collectbanner bg-mask-60">
      <h2 class="position-absolute text-hv-center h2 fw-bold text-white-50 pageBanner-text">{{ product.title }}</h2>
    </div>
  </div>
  <div class="container">
    <!-- 麵包 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb p-3">
        <li class="breadcrumb-item"><router-link to="/product">Recorods</router-link></li>
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="updateCategory(product.category)">{{ product.category }}</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-12 col-md-6 d-flex align-items-center p-3">
        <img style="aspect-ratio: 4/3" :src="product.imageUrl" class="card-img-top" :alt="product.title" />
      </div>
      <div class="col-12 col-md-6 p-3 d-flex flex-column justify-content-center">
        <div class="proTitle border-bottom mb-3">
          <h1 class="fw-bolder">{{ product.title }}</h1>
          <button type="button" @click.stop="toggleFavorite(product)" class="btn btn-favorite colorHeart">
            <i class="bi" :class="favorite.includes(product.id) ? 'bi-heart-fill' : 'bi-heart'"></i>
          </button>
        </div>

        <div classs="d-flex align-items-center">
          <span class="bg-secondary text-light rounded px-2">{{ product.category }}</span>
          <h2 v-if="!product.price" class="text-danger fs-5 fw-bolder pt-3">${{ currency(product.origin_price) }}</h2>
          <h2 class="text-danger fs-5 fw-bolder pt-3">${{ currency(product.origin_price) }}</h2>
          <span v-if="!(product.price == product.origin_price)" class="text-decoration-line-through text-muted pt-3"
            >${{ currency(product.price) }}
          </span>
          <h3 class="pt-3">{{ product.description }}</h3>
          <h3 class="pt-3">{{ product.content }}</h3>
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
    <ul class="nav nav-tabs pt-5" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          購買須知
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          退換貨須知
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact"
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
        ></button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active pt-4" id="home" role="tabpanel" aria-labelledby="home-tab">
        <ul>
          <li>組合包為整組販賣，不拆售</li>
          <li>如選取「改尺寸（請備註尺寸）」規格，請務必在訂單備註欄中註明商品名稱及對應的欲客製尺寸</li>
          <li>飾品圖檔顏色會因每台電腦設定差異而略有不同，以實際商品顏色為準，敬請見諒</li>
          <li>尺寸皆以公分（cm）為測量單位，因測量方式不同，正負 1-2 公分的誤差為合理範圍</li>
          <li>若有禮物包裝需求，請於訂單中備註，我們將會協助進行免費包裝</li>
        </ul>
      </div>
      <div class="tab-pane fade pt-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <ul>
          <li>10 天鑑賞期時間判定基準：如 9/1 號收到商品，則請 9/10（含）前申請退換貨，依此類推</li>
          <li>
            商品鑑賞期不等於試用期，退回時請保持商品與包裝完整，如因外力撞擊等意外因素，造成了飾品刮傷受損，請恕無法接受退換貨
          </li>
          <li>如商品超過鑑賞期欲辦理退換貨者，恕不受理</li>
        </ul>
      </div>
      <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
    </div>
    <h1 class="pt-5 border-bottom">為您推薦</h1>
    <div class="row">
      <div class="col-12 col-sm-6 col-lg-3 p-3" v-for="item in productRandom" :key="item.id">
        <div class="product">
          <div class="bgr position-absolute top-0 end-0" v-if="!(item.price == item.origin_price)">sale</div>
          <a href="#" @click.prevent="gotoProduct(item.id)"><i class="bi bi-search"></i></a>
          <img style="aspect-ratio: 4/3" :src="item.imageUrl" class="card-img-top" alt="..." />
        </div>
        <div class="proDetil p-2">
          <div class="proTitle fw-bolder">
            <h3>{{ item.title }}</h3>
            <span v-if="item.price == item.origin_price" class="fs-5">${{ currency(item.origin_price) }}</span>
            <span v-if="!(item.price == item.origin_price)" class="text-danger fs-5">${{ currency(item.price) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="../assets/helpers/_ProductDetil.css" scoped></style>
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
        // console.log('orderId', orderId);
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
          // console.log(response);
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
              success: true,
              message: `已將 ${product.title} 移除收藏`
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
              success: true,
              message: `已將 ${product.title} 加入收藏`
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
