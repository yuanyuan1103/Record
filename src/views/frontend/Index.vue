<template>
  <Loading :active="isLoading" />
  <!-- banner -->
  <div class="banner">
    <!-- 輪播 Carousel -->
    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="require('./../../assets/img/banner_1.jpg')" class="d-block" alt="RecordBanner" />
          <div class="carousel-caption d-md-block">
            <h2 class="textspac">時光在歌唱<br />黑膠唱片收藏的不僅僅是聲音</h2>
            <router-link to="/product" class="custom-btn btn btn-outline-light rounded-pill px-5">來去逛逛</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img :src="require('./../../assets/img/banner_2.jpg')" class="d-block" alt="RecordBanner" />
          <div class="carousel-caption d-md-block" style="text-align: left">
            <h2 class="textspac">近年被譽為<br />「黑膠唱片復興時代」</h2>
            <router-link to="/product" class="custom-btn btn btn-outline-light rounded-pill px-5">來去逛逛</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img :src="require('./../../assets/img/banner_3.jpg')" class="d-block" alt="RecordBanner" />
          <div class="carousel-caption d-md-block">
            <h2 class="textspac">聽黑膠需要理由嗎？</h2>
            <router-link to="/product" class="custom-btn btn btn-outline-light rounded-pill px-5">來去逛逛</router-link>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="carousel-control-prev"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        type="button"
        class="carousel-control-next"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <!-- introduce -->
  <div class="container title p-5">
    <h2>本月推薦</h2>
  </div>
  <div class="container">
    <div class="row animated" v-for="product in productIntroduce" :key="product.value" :class="{ fadeIn: act }">
      <div class="col-lg-6 align-self-center">
        <div class="mx-auto px-5">
          <p style="font-size: 20px">{{ product.title }}</p>
        </div>
        <div class="introduce mx-auto px-5">
          <p style="font-size: 15px; white-space: pre-line">{{ product.description }}</p>
        </div>
        <div class="float-end px-5 pb-5">
          <button type="button" class="btn btn-outline-secondary" @click="gotoProduct(product.id)">查看更多</button>
        </div>
      </div>
      <div class="col-lg-6 p-0 d-flex align-items-center">
        <img
          class="card-img-top productRecommend d-flex align-items-center"
          :src="product.imageUrl"
          :alt="product.title"
          :title="product.title"
        />
      </div>
    </div>
  </div>
  <!-- category -->
  <div class="container title p-5">
    <h2>分類推薦</h2>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-sm-12 effect-lily p-0 pointers" v-for="item in categoryList" :key="item.value">
        <img
          class="img-fluid"
          :src="item.imgUrl"
          :alt="item.label"
          :title="item.label"
          @click.prevent="gotoCategory(item.value)"
        />
        <div class="detil" @click.prevent="gotoCategory(item.value)">
          <h2>{{ item.value }}</h2>
          <span>View more</span>
        </div>
      </div>
    </div>
  </div>
  <!-- recommend -->
  <div class="container title p-5">
    <h2>精選推薦</h2>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6 col-lg-3 p-3" v-for="item in productRandom" :key="item.id">
        <div class="product" @click="gotoProduct(item.id)">
          <div class="imgProduct">
            <div class="bgr position-absolute top-0 end-0" v-if="!(item.price == item.origin_price)">sale</div>
            <img class="card-img-top imgProduct" :src="item.imageUrl" :alt="item.title" :title="item.title" />
          </div>
          <div class="proDetil p-2">
            <p class="textover fw-bolder">{{ item.title }}</p>
            <div class="proTitle fw-bolder">
              <span v-if="item.price == item.origin_price" class="fs-5">${{ currency(item.origin_price) }}</span>
              <span v-else class="text-danger fs-5">${{ currency(item.price) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- FQA -->
  <div class="container title p-5">
    <h2>常見問答</h2>
  </div>
  <section id="info-utile" class="bg-white pb-5 h100">
    <div class="container">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              type="button"
              class="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              如何付款呢？
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="ms-5">
                <li>信用卡</li>
                <li>ATM轉帳匯款</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              type="button"
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              購物流程
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="ms-5">
                <li>Step1。選購您喜愛的商品您可以透過網頁引導或搜尋的方式找到您要的商品再點選加入購物車。</li>
                <li>Step2。繼續購物/訂單結帳 。</li>
                <li>Step3。確認購買清單。</li>
                <li>Step4。前往結帳。</li>
                <li>Step5。完成購物。</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              type="button"
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              運費如何計算?
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">只要您在本站購買500(包含)以上，即可享有免運費優惠喔!</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- coupon -->
  <div class="coupon">
    <div class="coupon-banner row m-5">
      <div class="col-lg-6 col-sm-12 align-items-center flex-sm-column d-flex justify-content-center">
        <div class="ticket m-3">
          <span>優惠碼</span>
          <span class="mx-3 ticket-dash"></span>
          <span>open2022</span>
        </div>
      </div>
      <div class="ticketContent col-lg-6 col-sm-12 p-3 d-lg-flex flex-sm-column justify-content-center">
        <h2>歡慶開幕</h2>
        <br />
        <p>結帳時<br />輸入優惠碼立即取得優惠價格</p>
      </div>
    </div>
  </div>
</template>

<script>
import { categoryList } from '@/methods/commonData'
import { currency } from '@/methods/filters'
export default {
  data() {
    return {
      categoryList: categoryList.filter((e) => e.value !== undefined),
      productRandom: [],
      isLoading: false,
      productIntroduce: {},
      act: false
    }
  },
  methods: {
    currency,
    gotoCategory(category) {
      this.$router.push({
        name: '產品清單',
        query: { category: `${category}` }
      })
    },
    rendomProducts() {
      this.isLoading = true

      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          this.productRandom = res.data.products
            .filter((x) => x.id !== this.id)
            .sort(() => Math.random() - 0.5)
            .splice(1, 4)
          this.productIntroduce = res.data.products
            .filter((x) => x.id !== this.id)
            .sort(() => Math.random() - 0.5)
            .splice(1, 1)

          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線錯誤')
        })
    },
    gotoProduct(id) {
      this.$router.push({ path: `/product/${id}`, params: {} })
    },
    handleScroll() {
      this.act = window.scrollY > 300
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
    this.rendomProducts()
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/helpers/_Index.scss';
</style>
