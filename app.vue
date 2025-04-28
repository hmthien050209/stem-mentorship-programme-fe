<script setup lang="ts">
  useHead({
    titleTemplate: (page) => {
      return page ? `${page} | Thanh Sắc Việt` : 'Thanh Sắc Việt'
    },
  })
</script>

<template>
  <NuxtLayout>
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
