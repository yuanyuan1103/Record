<template>
  <div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 1050">
    <Toast v-for="(message, key) in messages" :key="key" :message="message" />
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue'
export default {
  components: { Toast },
  data() {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  }
}
</script>
