<template>
  <div>
    <button @click="selectFolder">Chọn thư mục</button>
    <p v-if="selectedFolder">Thư mục: {{ selectedFolder }}</p>
    <button @click="startSync" :disabled="!selectedFolder">Đồng bộ</button>
  </div>
</template>

<script lang="ts" setup>
  declare global {
    interface Window {
      api: any;
    }
  }

  const selectedFolder = ref<string | null>(null);

  const selectFolder = async () => {
    const folder = await window.api.selectFolder();
    if (folder) selectedFolder.value = folder;
  };

  const startSync = async () => {
    if (selectedFolder.value) {
      const result = await window.api.syncFolder(selectedFolder.value);
      alert(result); // Hiển thị trạng thái
    }
  };
</script>
