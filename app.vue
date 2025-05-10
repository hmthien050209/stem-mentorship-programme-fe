<script setup lang="ts">
  import { breakpointsTailwind } from '@vueuse/core'

  useHead({
    titleTemplate: (page) => {
      return page ? `${page} | Thanh Sắc Việt` : 'Thanh Sắc Việt'
    },
  })

  const breakpoints = useBreakpoints(breakpointsTailwind)
  const mdAndSmaller = breakpoints.smallerOrEqual('md')
</script>

<template>
  <SuitableScreen v-if="mdAndSmaller" />
  <NuxtLayout v-else>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.15s ease-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
