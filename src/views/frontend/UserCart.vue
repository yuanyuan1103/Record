<template>
  <Loading :active="isLoading" />
  <div class="cart">
    <div class="box"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-3 p-3 categoryList">
          <div class="list-group list-group-flush flex-md-column flex-row align-items-end">
            <button
              type="button"
              class="listCategory"
              v-for="item in categoryList"
              :key="item.value"
              @click.prevent="replaceUrlQuery('category', item.value)"
              :class="{ listCategoryActive: item.value === this.category }"
            >
              <span class="writingMode"
                ><i :class="item.value === this.category ? 'bi-music-note-list' : ''" class="bi"></i
                >{{ item.label }}</span
              >
            </button>
          </div>
        </div>
        <div class="col-10 col-md-9 productList">
          <div class="form-floating mb-2">
            <input v-model="search" type="text" class="form-control" id="search" placeholder="search" />
            <label for="search">search</label>
          </div>
          <div class="row justify-content-center" style="min-height: 70vh">
            <div v-for="item in slicePage" :key="item.id" class="col-10 col-md-6 col-lg-4">
              <div class="product">
                <a href="#" @click.prevent="getProduct(item.id)"><i class="bi bi-search"></i></a>
                <img class="card-img-top imgProduct" :src="item.imageUrl" :alt="item.title" :title="item.title" />
              </div>
              <p class="pt-2 fs-5 textover">{{ item.title }}</p>
              <div class="proDetil pb-3">
                <div class="proBtn">
                  <button
                    type="button"
                    @click="addToCart(item.id, 1)"
                    class="btn colorCart me-2"
                    :disabled="this.status.loadingItem === item.id"
                  >
                    <i class="bi bi-cart"></i>
                  </button>
                  <button type="button" @click.stop="toggleFavorite(item)" class="btn btn-favorite colorHeart">
                    <i class="bi" :class="favorite.includes(item.id) ? 'bi-heart-fill' : 'bi-heart'"></i>
                  </button>
                </div>
                <div class="proTitle">
                  <span v-if="!(item.price == item.origin_price)" class="text-decoration-line-through text-muted fs-6"
                    >${{ currency(item.origin_price) }}</span
                  >
                  <span v-if="item.price == item.origin_price" class="text-light fs-6">.</span>
                  <span class="fs-4">${{ currency(item.price) }}</span>
                </div>
              </div>
            </div>
            <div class="col-10 col-md-6 col-lg-4" />
            <div class="col-10 col-md-6 col-lg-4" />
          </div>
        </div>
        <!-- 分頁資訊 -->
        <Pagination
          :pages="{ total_pages: totalPages, current_page: this.page }"
          @emit-pages="(newPage) => replaceUrlQuery('page', newPage)"
        ></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { categoryList } from '@/methods/commonData';
import Pagination from '@/components/Pagination.vue';
import saveFavorite from '@/methods/saveFavorite';
import { currency } from '@/methods/filters';
export default {
  data() {
    return {
      // 分類列表
      categoryList: categoryList,
      // 產品列表
      products: [],
      // 目前頁數
      page: 1,
      // 存取搜尋字串
      search: '',
      // 點擊分類列表將分類存入 用來取得分類區分
      category: '',

      // 取得分頁 設定初始值
      // pagination: {
      //   total_pages: 1,
      //   current_page: 1,
      //   has_pre: false,
      //   has_next: false
      // }
      pageSize: 6,
      favorite: saveFavorite.getFavorite() || [],
      isLoading: false,
      status: {
        loadingItem: '' //對應品項id
      },
      hover: false
    };
  },
  //區域註冊
  components: {
    Pagination
  },
  //只要使用inject就可使用 且不需要import
  inject: ['$httpMessageState', 'emitter'],
  methods: {
    currency,
    getProducts() {
      this.isLoading = true;

      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (!res.data.success) throw new Error(res.data.message);

          // update list
          this.products = res.data.products;

          // done
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err?.message);
        });
    },
    updateData(type, value) {
      this[type] = value;
    },
    replaceUrlQuery(type, value) {
      let query = { ...this.$route.query };
      query[type] = value;
      if (type == 'category') {
        query.page = 1;
      }

      // const query = { ...this.$route.query, [type]: value };
      this.$router.replace({ query });
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
    getProduct(id) {
      //跳轉至專屬於此產品id的頁面
      //給予空參數 取代原有的頁數或分類
      this.$router.push({ path: `/product/${id}`, params: {} });
    },
    addToCart(id, qty) {
      this.isLoading = true;
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
          this.isLoading = false;
          this.status.loadingItem = '';
          this.qty = 1;
          this.emitter.emit('update-cart', id);
          this.$httpMessageState(response, '加入購物車');
        })
        .catch((error) => {
          this.$httpMessageState(error, '連線錯誤');
          this.isLoading = false;
        });
    }
  },
  created() {
    this.getProducts();
  },
  watch: {
    '$route.query': {
      immediate: true,
      handler(param) {
        const { page, search, category } = param;

        this.page = parseInt(page, 10) || 1;
        this.search = search;
        this.category = category;
      }
    }
  },
  computed: {
    filterProducts() {
      let result = this.products;

      // search
      if (this.search) {
        result = result.filter((item) => item.title.match(this.search));
      }

      // category
      if (this.category) {
        result = result.filter((item) => item.category === this.category);
      }

      return result;
    },
    slicePage() {
      let result = this.filterProducts;

      // page
      const offset = this.pageSize * (this.page - 1);
      const end = offset + this.pageSize;
      result = result.slice(offset, end);

      return result;
    },
    totalPages() {
      const listLength = this.filterProducts.length;

      return Math.ceil(listLength / this.pageSize);
    }
  }
};
</script>

<style src="../../assets/helpers/_UserCart.css" scoped></style>
