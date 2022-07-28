<template>
  <div>
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-end pt-4">
        <li class="page-item" :class="{ disabled: pages.current_page == 1 }">
          <a class="page-link" @click.prevent="updatePage(pages.current_page - 1)">
            <i :class="pages.current_page == 1 ? 'bi-caret-left-fill' : 'bi-caret-left'" class="bi"></i>
          </a>
        </li>
        <li
          v-for="page in pages.total_pages"
          :key="page"
          class="page-item"
          :class="{ active: pages.current_page == page }"
        >
          <a class="page-link" href="#" @click.prevent="updatePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: pages.current_page == pages.total_pages }">
          <a class="page-link" href="#" @click.prevent="updatePage(pages.current_page + 1)">
            <span aria-hidden="true"
              ><i
                :class="pages.current_page == pages.total_pages ? 'bi-caret-right-fill' : 'bi-caret-right'"
                class="bi"
              ></i
            ></span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    pages: {
      type: Object,
      default: () => ({
        total_pages: 1,
        current_page: 1,
        has_pre: false,
        has_next: false
      })
    }
  },
  methods: {
    updatePage(page) {
      this.$emit('emit-pages', page)
    }
  }
}
</script>
