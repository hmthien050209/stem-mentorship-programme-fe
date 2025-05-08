<template>
  <nav
    ref="nav"
    class="fixed top-0 left-0 z-10 flex h-32 w-screen items-center justify-end px-12 text-white motion-safe:transition-all motion-safe:duration-150 motion-safe:ease-out"
  >
    <NuxtLink to="/" class="px-6">Dự án</NuxtLink>
    <NuxtLink to="/explore" class="px-6">Khám phá</NuxtLink>
    <NuxtLink to="/about" class="px-6">Về chúng tôi</NuxtLink>
  </nav>
</template>

<script setup lang="ts">
  const navBarStore = useNavBarStore()
  const nav = useTemplateRef<HTMLElement>('nav')

  onMounted(() => {
    navBarStore.navBarRef = nav.value
  })

  onUnmounted(() => {
    navBarStore.navBarRef = null
  })
</script>
<style scoped lang="css">
  @reference "~/assets/css/main.css";

  nav {
  }

  a {
    @apply mx-4 font-bold;
    /* margin-left + margin-right = 1rem */
  }
</style>
