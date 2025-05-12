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
