<script setup lang="ts">
  import type { NuxtError } from '#app'

  useHead({
    title: 'Error | Thanh Sắc Việt',
  })

  defineProps({
    error: {
      type: Object as () => NuxtError,
      default: undefined,
    },
  })

  const handleError = () => clearError({ redirect: '/' })

  const image = useImage()
  const backgroundUrl = image('/img/first-section-background.png', {
    format: 'webp',
    fit: 'cover',
  })
</script>

<template>
  <div
    class="flex h-screen w-screen items-center justify-center bg-cover"
    :style="`background-image: url(${backgroundUrl})`"
  >
    <div class="w-2/3 text-white">
      <h1>{{ error?.statusCode }}</h1>
      <div>{{ error?.message }}</div>
      <button class="cursor-pointer hover:underline" @click="handleError">
        Quay trở về trang chính
      </button>
    </div>
  </div>
</template>
