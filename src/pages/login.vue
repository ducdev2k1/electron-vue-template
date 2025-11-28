<template>
  <div class="flex h-screen items-center justify-center bg-gray-100">
    <div class="rounded-lg bg-white p-8 shadow-md">
      <h1 class="mb-6 text-center text-2xl font-bold text-gray-800">Login</h1>
      <button
        @click="handleLogin"
        class="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Login with Webmail
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const handleLogin = async () => {
    try {
      // @ts-ignore
      await window.api.login();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
</script>
