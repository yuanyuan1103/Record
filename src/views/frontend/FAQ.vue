<template>
  <div class="position-relative">
    <div style="overflow: hidden">
      <div class="faqbanner"></div>
    </div>
    <h2 class="position-absolute h2 fw-bold faqbanner-text">常見問題</h2>
  </div>
  <section id="info-utile" class="bg-white py-5 h100">
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
              <ul>
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
              <ul>
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
          <h2 class="accordion-header" id="headingThree">
            <button
              type="button"
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              何謂七天鑑賞期?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              依消保法第19條第1項特種買賣(通訊與訪問交易)規定:消費者得於收到商品七日內無條件退貨,不需負擔任何費用或對價。
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              type="button"
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              運費如何計算?
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">只要您在本站購買500(包含)以上，即可享有免運費優惠喔!</div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSix">
            <button
              type="button"
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              客服服務
            </button>
          </h2>
          <div
            id="collapseSix"
            class="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">如購買過程及收到商品有任何問題，歡迎聯繫我們， 我們會盡快回覆您。</div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSeven">
            <button
              type="button"
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              售後服務
            </button>
          </h2>
          <div
            id="collapseSeven"
            class="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">為保障買家權益， 所有商品皆享有30日的售後服務。</div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingEight">
            <button
              type="button"
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              交貨快速
            </button>
          </h2>
          <div
            id="collapseEight"
            class="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              在商品庫存充足下，我們允諾下單三天內會出貨，如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/helpers/_FAQ.scss';
</style>
