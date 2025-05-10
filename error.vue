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
</script>

<template>
  <div class="relative flex h-screen w-screen items-center justify-center">
    <NuxtImg
      class="absolute top-0 left-0 h-full w-full object-cover"
      fit="cover"
      preload
      src="/img/first-section-background.png"
      format="webp"
      alt="background"
    />
    <div class="z-10 w-2/3 text-white">
      <h1>{{ error?.statusCode }}</h1>
      <div>{{ error?.message }}</div>
      <button class="cursor-pointer hover:underline" @click="handleError">
        Quay trở về trang chính
      </button>
    </div>
  </div>
</template>
