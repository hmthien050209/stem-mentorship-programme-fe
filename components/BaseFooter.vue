<script setup lang="ts">
  const now = useNow()
</script>

<template>
  <footer class="flex h-16 w-screen items-center justify-center bg-black text-sm text-white">
    Copyright &#169; {{ now.getFullYear() }}. All rights reserved.
  </footer>
</template>
