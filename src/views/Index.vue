<template>
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
            <h2>時光在歌唱<br />黑膠唱片收藏的不僅僅是聲音</h2>
            <a href="#/products" class="custom-btn btn btn-outline-light rounded-pill px-5"> SHOP NOW </a>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            class="d-block"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <h2>近年被譽為<br />「黑膠唱片復興時代」</h2>
            <a href="#/products" class="custom-btn btn btn-outline-light rounded-pill px-5"> SHOP NOW </a>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1526327760257-75f515c74478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            class="d-block"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <h2>聽黑膠需要理由嗎？</h2>
            <a href="#/products" class="custom-btn btn btn-outline-light rounded-pill px-5"> SHOP NOW </a>
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
  <div class="container title p-5" id="introduce">
    <h2>黑膠唱片?</h2>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 align-self-center">
        <div class="introduce mx-auto p-5">
          習慣又稱電木唱片，指轉速每分鐘78轉、聲槽寬度0.10—0.16毫米、聲槽密度每厘米30—50條的留聲機唱片。<br />黑膠唱片是一般人對過往使用唱盤機播放的唱片的稱呼。這種唱片是一種黑色圓盤形的膠片。
        </div>
      </div>
      <div class="col-lg-6 p-0">
        <img
          class="img-fluid"
          src="https://images.unsplash.com/photo-1536849249744-44e01e7a089d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074"
          alt=""
        />
      </div>
    </div>
    <div class="row flex-lg-row flex-sm-column-reverse">
      <div class="col-lg-6 p-0">
        <img
          class="img-fluid"
          src="https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974"
          alt=""
        />
      </div>
      <div class="col-lg-6 text-center align-self-center">
        <div class="introduce mx-auto p-5">
          直徑常見10英寸和12英寸兩種規格，前者大量用於錄製流行音樂，錄音時間較短，一面一般只能容納一首歌曲；後者一面錄音時間也僅有約5分鐘，通常用於錄製交響樂，此尺寸成為日後立體聲LP的標準規格。
        </div>
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
        <img :src="item.imgUrl" class="img-fluid" />
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
    <div class="row p-0 justify-content-center">
      <div class="card col-lg-4 col-sm-8">
        <img
          src="https://images.unsplash.com/photo-1602848596718-45693ff58c78?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875"
          class="card-img-top"
          alt="..."
        />
        <div class="infoShop d-flex justify-content-between align-items-center">
          <a class="d-block w-50 p-3" href=""><i class="bi bi-basket-fill"></i>加入購物</a>
          <a class="d-block w-50 p-3" href=""><i class="bi bi-file-earmark-text-fill"></i>詳細資訊</a>
        </div>
      </div>
      <div class="card col-lg-4 col-sm-8">
        <img
          src="https://images.unsplash.com/photo-1602848597941-0d3d3a2c1241?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875"
          class="card-img-top"
          alt="..."
        />
        <div class="infoShop d-flex justify-content-between align-items-center">
          <a class="d-block w-50 p-3" href=""><i class="bi bi-basket-fill"></i>加入購物</a>
          <a class="d-block w-50 p-3" href=""><i class="bi bi-file-earmark-text-fill"></i>詳細資訊</a>
        </div>
      </div>
      <div class="card col-lg-4 col-sm-8">
        <img
          src="https://images.unsplash.com/photo-1620831450720-de4a2a539e61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880"
          class="card-img-top"
          alt="..."
        />
        <div class="infoShop d-flex justify-content-between align-items-center">
          <a class="d-block w-50 p-3" href=""><i class="bi bi-basket-fill"></i>加入購物</a>
          <a class="d-block w-50 p-3" href=""><i class="bi bi-file-earmark-text-fill"></i>詳細資訊</a>
        </div>
      </div>
    </div>
  </div>
  <!-- FQA -->
  <div class="container title p-5">
    <h2>FQA</h2>
  </div>
  <div class="container accordion pb-3" id="accordionExample">
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
          <p>1.信用卡</p>
          <p>2.ATM轉帳匯款</p>
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
          <p>Step1選購您喜愛的商品您可以透過網頁引導或搜尋的方式找到您要的商品再點選加入購物車。</p>
          <p>Step2繼續購物/訂單結帳 。</p>
          <p>Step3確認購買清單。</p>
          <p>Step4前往結帳。</p>
          <p>Step5完成購物。</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          運費如何計算?
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">只要您在本站購買500(包含)以上，即可享有免運費優惠喔!</div>
      </div>
    </div>
  </div>
  <!-- coupon -->
  <div class="coupon">
    <div class="intro-banner row m-5">
      <div class="col-lg-6 col-sm-12 align-items-center flex-sm-column d-flex justify-content-center">
        <div class="ticket m-3">
          <span>優惠碼</span>
          <span class="mx-3 ticket-dash"></span>
          <span>text</span>
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

export default {
  data() {
    return {
      //分類列表 不取全部
      categoryList: categoryList.filter((e) => e.value != undefined)
    };
  },
  methods: {
    gotoCategory(category) {
      this.$router.push({
        name: '產品清單',
        query: { category: `${category}` }
      });
      //http://localhost:8080/#/product?category=%E5%8E%9F%E8%81%B2%E5%B8%B6&page=1
    }
  },
  created() {
    console.log(this.categoryList);
  }
};
</script>
