<template>
  <div>
    <p>Trạng thái đồng bộ: {{ status }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const status = ref('Đang chờ đồng bộ...');
  // Có thể dùng IPC để cập nhật trạng thái từ main process
</script>
