<template>
  <div class="footer py-3 sticky-top">
    <div class="container row center">
      <div class="footerIcon col-lg-4 col-sm-8 mb-2 lh-sm p-3">
        <img
          width="140"
          style="height: fit-content"
          src="https://cdn2.iconfinder.com/data/icons/party-new-years/128/Party_Newyears_Vinyl_Cassete-512.png"
          alt="Record"
        />
        <div class="text-center space">
          <h1 class="fw-bolder">Record</h1>
          <p>紀錄回憶的聲音</p>
        </div>
      </div>
      <div class="contact col-lg-4 col-sm-8 lh-sm p-3">
        <h2 class="fs-2 mb-2 text-muted fw-bolder">關於本站</h2>
        <div class="d-flex flex-column space">
          <router-link to="/about" class="px-0 nav-link iconFont"
            ><i class="bi bi-caret-right-fill"></i>About</router-link
          >
          <router-link to="/product" class="px-0 nav-link iconFont"
            ><i class="bi bi-caret-right-fill"></i>Records</router-link
          >
          <router-link to="/faq" class="px-0 nav-link iconFont"><i class="bi bi-caret-right-fill"></i>FAQ</router-link>
          <router-link to="/ordertrack" class="px-0 nav-link iconFont"
            ><i class="bi bi-caret-right-fill"></i>Order</router-link
          >
          <a target="_blank" class="px-0 nav-link iconFont" href="https://github.com/yuanyuan1103/Record"
            ><i class="bi bi-caret-right-fill"></i>Github</a
          >
        </div>
      </div>
      <div class="footerAbout col-lg-4 col-sm-8 lh-sm p-3">
        <h2 class="fs-2 mb-2 text-muted fw-bolder">聯絡方式</h2>
        <p class="pt-2 space"><i class="bi bi-geo-alt-fill pe-1"></i>地球上某個角落</p>
        <div class="d-flex">
          <i class="bi bi-clock-fill pe-1"></i>
          <p>
            <span class="space">週一至週五</span> 13:30 - 21:50<br /><span class="space">週六</span> 10:00 - 21:50<br /><span
              class="space"
              >週日</span
            >
            10:00 - 18:00
          </p>
        </div>
        <p class="space"><i class="bi bi-envelope-fill pe-1"></i>pijhs70401@gmail.com</p>
        <p class="space"><i class="bi bi-telephone-fill pe-1"></i>(09)-8765-4321</p>
      </div>
      <p class="space text-center pt-3">
        © 2022. All Rights Reserved. | <router-link to="/login" class="iconFont">管理員登入</router-link>
      </p>
    </div>
  </div>
</template>
<style src="../assets/helpers/_Footer.css"></style>
