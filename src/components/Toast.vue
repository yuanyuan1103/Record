<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
    <div class="toast-header bg-dark text-white">
      <span :class="`bg-${message.style}`" class="p-2 rounded me-2 d-inline-block"></span>
      <strong class="me-auto">{{ message.title }}</strong>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body" v-if="message.content">
      {{ message.content }}
    </div>
  </div>
</template>
<script>
import Toast from 'bootstrap/js/dist/toast'
export default {
  name: 'Toast',
  props: ['message'],
  mounted() {
    const toastEl = this.$refs.toast
    const toast = new Toast(toastEl, {
      delay: 1000
    })
    toast.show()
  }
}
</script>
