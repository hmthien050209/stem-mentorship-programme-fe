<script setup lang="ts">
  const image = useImage()
  const background = image('/img/first-section-background.png', { format: 'webp', fit: 'cover' })
</script>

<template>
  <div
    class="flex h-screen w-screen items-center justify-center bg-cover text-white"
    :style="`background-image: url(${background})`"
  >
    This page is under construction. Hang tight!
  </div>
</template>
