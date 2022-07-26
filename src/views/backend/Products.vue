<template>
  <Loading :active="isLoading" />
  <div class="text-end">
    <button type="button" class="btn btn-primary" @click="openModal(true)">增加一個產品</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ currency(item.origin_price) }}
        </td>
        <td class="text-right">
          {{ currency(item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <!-- 將v-for內的item帶入 -->
            <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="openDelProductModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- 分頁資訊 -->
  <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  <!-- 把tempProduct傳進product 內層使用:product接收-->
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>

  <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct" />
</template>

<script>
//將寫好的ProductModal載入
import ProductModal from '@/components/ProductModal.vue';
import DelModal from '@/components/DelModal.vue';
import Pagination from '@/components/Pagination.vue';
import { currency } from '@/methods/filters';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      //外層的tempProduct透過props傳進product
      tempProduct: {},
      //判斷是否為新增的狀態
      isNew: false,
      //判斷是否要有過場動畫
      isLoading: false
    };
  },
  //區域註冊
  components: {
    ProductModal,
    DelModal,
    Pagination
  },
  //只要使用inject就可使用 且不需要import
  inject: ['$httpMessageState', 'emitter'],
  methods: {
    currency,
    getProducts(page = 1) {
      //跟文件對應的api路徑
      // const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      //因讀取資料 故使用過場效果
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        //若已讀取完成 則將讀取效果關閉
        this.isLoading = false;
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    //開啟modal
    openModal(isNew, item) {
      //假設是新增 isNew為true 將空的product帶入
      if (isNew) {
        this.tempProduct = {};
      } else {
        //假設為isNew為false 則將原本的item帶入空的product
        this.tempProduct = { ...item };
      }
      //將狀態存入
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    //編輯更新product
    updateProduct(item) {
      this.isLoading = true;
      this.tempProduct = item;
      //若為新增則執行以下
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      //新增使用的方法 post
      let httpMethod = 'post';
      // 為非新增的狀態 也就是編輯
      if (!this.isNew) {
        //跟文件對應的api路徑 用item的id取得資料
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        //編輯使用的方法 put
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        this.isLoading = false;
        productComponent.hideModal();
        //加入吐司
        this.$httpMessageState(response, '修改產品成功');
        this.isLoading = false;
      });
    },
    // 開啟刪除 Modal
    openDelProductModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    //刪除資料
    delProduct() {
      this.isLoading = true;
      //取得api路徑
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      //實作刪除
      this.$http.delete(url).then((response) => {
        this.isLoading = false;
        //關閉刪除 Modal
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        //重新取得產品資料
        this.getProducts();
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>
