<template>
  <div class="footer py-3">
    <div class="container row center" style="gap: 1rem">
      <div class="footerIcon col-lg-4 col-sm-8 mb-2 lh-sm">
        <img src="../assets/vinyl_icon.png" alt="Record" />
        <div class="text-center space">
          <h1 class="fw-bolder">Record</h1>
          <p>紀錄回憶的聲音</p>
        </div>
      </div>
      <div class="footerAbout col-lg-4 col-sm-8 lh-sm p-3">
        <h2 class="fs-2 mb-2 text-muted fw-bolder">聯絡方式</h2>
        <p class="pt-2 space"><i class="bi bi-geo-alt-fill pe-1"></i>地球上某個角落</p>
        <div class="d-flex">
          <i class="bi bi-clock-fill pe-1"></i>
          <p class="space">週一至週五 13:30 - 21:50<br />週六 10:00 - 21:50<br />週日 10:00 - 18:00</p>
        </div>
        <p class="space">
          <i class="bi bi-envelope-fill pe-1"></i><a class="linked" :href="'mailto:' + email">{{ email }}</a>
        </p>
        <p class="space">
          <i class="bi bi-telephone-fill pe-1"></i><a class="linked" :href="'tel:' + tel">{{ tel }}</a>
        </p>
      </div>
      <div class="contact col-lg-3 col-sm-8 lh-sm p-3">
        <h2 class="fs-2 mb-2 text-muted fw-bolder">關於本站</h2>
        <div class="d-flex flex-column space">
          <router-link to="/about" class="px-0 nav-link iconFont"
            ><i class="bi bi-caret-right-fill"></i>關於我們</router-link
          >
          <router-link to="/product" class="px-0 nav-link iconFont"
            ><i class="bi bi-caret-right-fill"></i>唱片專區</router-link
          >
          <router-link to="/faq" class="px-0 nav-link iconFont"
            ><i class="bi bi-caret-right-fill"></i>常見問答</router-link
          >
          <router-link to="/ordertrack" class="px-0 nav-link iconFont"
            ><i class="bi bi-caret-right-fill"></i>訂單查詢</router-link
          >
          <a target="_blank" class="px-0 nav-link iconFont" href="https://github.com/yuanyuan1103/Record"
            ><i class="bi bi-caret-right-fill"></i>Github</a
          >
        </div>
      </div>
      <div class="space text-center">
        <p>僅個人練習使用．不做商業用途 | <router-link to="/login" class="iconFont">管理員登入</router-link></p>
        <p>© 2022. YuanYuan All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tel: '(09)-8765-4321',
      email: 'pijhs70401@gmail.com'
    }
  }
}
</script>

<style scoped lang="scss">
@import './../assets/helpers/_Footer.scss';
</style>
