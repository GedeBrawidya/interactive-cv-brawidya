<script setup>
// Tidak perlu defineProps karena kita akan menggunakan slot
</script>

<template>
  <div class="mb-12 text-center">
    <h2 class="text-4xl font-bold text-white">
      <slot name="title"></slot>
    </h2>
    <p class="mt-2 text-lg text-gray-300">
      <slot name="subtitle"></slot>
    </p>
    <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded"></div>
  </div>
</template>