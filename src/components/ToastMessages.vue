<template>
  <div class="toast-container position-fixed bottom-0 end-0 p-3 translate-middle" style="z-index: 1050">
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg" />
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue';
export default {
  components: { Toast },
  data() {
    return {
      messages: []
    };
  },
  inject: ['emitter'],
  mounted() {
    //此message為外部傳來的資訊
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message;
      //將資料丟進訊息列表
      this.messages.push({ style, title, content });
    });
  }
};
</script>
