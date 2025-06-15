<template>
  <div class="bg-[#1e1e2f] text-white font-sans">
    <div class="flex min-h-screen">
      <Sidebar />
      <main class="flex-1 p-6 overflow-y-auto max-h-screen">
        <RouterView />
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import Sidebar from "./components/Sidebar/Sidebar.vue";
</script>
