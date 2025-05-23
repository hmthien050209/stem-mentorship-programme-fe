<script setup lang="ts">
  import { breakpointsTailwind } from '@vueuse/core'

  useHead({
    titleTemplate: (page) => {
      return page ? `${page} | Thanh Sắc Việt` : 'Thanh Sắc Việt'
    },
    htmlAttrs: {
      lang: 'vi',
    },
    link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }],
  })

  const breakpoints = useBreakpoints(breakpointsTailwind, { ssrWidth: 1024 })
  const isSmallerThanLg = breakpoints.smaller('lg')
</script>

<template>
  <div class="relative">
    <SuitableScreen v-if="isSmallerThanLg" />

    <NuxtLayout v-else>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  .dissolve-enter-active,
  .dissolve-leave-active {
    transition:
      opacity 0.3s,
      transform 0.3s;
  }

  .dissolve-enter-from,
  .dissolve-leave-to {
    opacity: 0;
    transform: scale(0.98);
  }
</style>
