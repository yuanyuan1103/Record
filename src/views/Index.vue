<template>
  <Loading :active="isLoading"></Loading>
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
          <img
            src="https://images.unsplash.com/photo-1634650254521-b1596c5a2d37?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
            class="d-block"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <h2 class="textspac">時光在歌唱<br />黑膠唱片收藏的不僅僅是聲音</h2>
            <a href="#/product" class="custom-btn btn btn-outline-light rounded-pill px-5"> SHOP NOW </a>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            class="d-block"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <h2 class="textspac">近年被譽為<br />「黑膠唱片復興時代」</h2>
            <a href="#/product" class="custom-btn btn btn-outline-light rounded-pill px-5"> SHOP NOW </a>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1526327760257-75f515c74478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            class="d-block"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <h2 class="textspac">聽黑膠需要理由嗎？</h2>
            <a href="#/product" class="custom-btn btn btn-outline-light rounded-pill px-5"> SHOP NOW </a>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
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
        <div class="float-end px-5">
          <button type="button" class="btn btn-outline-secondary" @click.prevent="gotoProduct(product.id)">
            View More
          </button>
        </div>
      </div>
      <div class="col-lg-6 p-0 d-flex align-items-center">
        <img :src="product.imageUrl" class="card-img-top productTest d-flex align-items-center" />
      </div>
    </div>
  </div>
  <!-- music -->
  <div class="container title p-5">
    <h2>分類推薦</h2>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-sm-12 effect-lily p-0 pointers" v-for="item in categoryList" :key="item.value">
        <img :src="item.imgUrl" class="img-fluid" @click.prevent="gotoCategory(item.value)" />
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
        <div class="product">
          <div class="bgr position-absolute top-0 end-0" v-if="!(item.price == item.origin_price)">sale</div>
          <a href="#" @click.prevent="gotoProduct(item.id)"><i class="bi bi-search"></i></a>
          <img :src="item.imageUrl" class="card-img-top imgProduct" alt="..." />
        </div>
        <div class="proDetil p-2">
          <div class="proTitle fw-bolder">
            <p>{{ item.title }}</p>
            <span v-if="item.price == item.origin_price" class="fs-5">${{ currency(item.origin_price) }}</span>
            <span v-if="!(item.price == item.origin_price)" class="text-danger fs-5">${{ currency(item.price) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- FQA -->
  <div class="container title p-5">
    <h2>FAQ</h2>
  </div>
  <section id="info-utile" class="bg-white pb-5 h100">
    <div class="container">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
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
              class="accordion-button collapsed"
              type="button"
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
              class="accordion-button collapsed"
              type="button"
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
    <div class="intro-banner row m-5">
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
<style src="../assets/helpers/_Index.css" scoped></style>
<script>
import { categoryList } from '../methods/commonData';
import { currency } from '../methods/filters';
export default {
  data() {
    return {
      //分類列表 不取全部
      categoryList: categoryList.filter((e) => e.value != undefined),
      productRandom: [],
      isLoading: false,
      productIntroduce: {},
      act: false
    };
  },
  methods: {
    currency,
    gotoCategory(category) {
      this.$router.push({
        name: '產品清單',
        query: { category: `${category}` }
      });
    },
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
          this.productIntroduce = res.data.products
            .filter((x) => x.id !== this.id)
            .sort(() => Math.random() - 0.5)
            .splice(1, 1);

          // done
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err?.message);
        });
    },
    gotoProduct(id) {
      //跳轉至專屬於此產品id的頁面
      //給予空參數 取代原有的頁數或分類
      this.$router.push({ path: `/product/${id}`, params: {} });
    },
    handleScroll() {
      this.act = window.scrollY > 300 ? true : false;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.rendomProducts();
  }
};
</script>
