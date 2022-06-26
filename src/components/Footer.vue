<template>
  <div class="footer py-3 sticky-top">
    <div class="container-fluid row center">
      <div class="footerIcon col-lg-4 col-sm-8 mb-2 lh-sm p-3">
        <h2 class="border-bottom fs-2 mb-2">Link</h2>
        <a href=""><i class="bi bi-github"></i></a>
        <a href=""><i class="bi bi-facebook"></i></a>
        <a href=""><i class="bi bi-instagram"></i></a>
        <router-link to="/login" class="d-inline"><i class="bi bi-person-circle"></i></router-link>
      </div>
      <div class="contact col-lg-4 col-sm-8 lh-sm p-3">
        <h2 class="border-bottom fs-2 mb-2">Contact us</h2>
        <p class="fs-5">Email : pijhs70401@gmail</p>
      </div>
      <div class="footerAbout col-lg-4 col-sm-8 lh-sm p-3">
        <h2 class="border-bottom fs-2 mb-2">About</h2>
        <p class="fs-5">本網站僅供個人作品使用，不提供商業用途</p>
        <p class="fs-5">資料來源 : unsplash</p>
      </div>
    </div>
    <p class="text-center fs-5 pt-5">© 2022. All Rights Reserved.</p>
  </div>
</template>
<style src="../assets/helpers/_Footer.css"></style>
