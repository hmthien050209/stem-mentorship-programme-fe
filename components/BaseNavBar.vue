<template>
  <nav
    ref="nav"
    class="absolute top-0 left-0 z-10 flex h-32 w-screen items-center justify-end px-12 text-white motion-safe:transition-all motion-safe:duration-150 motion-safe:ease-out"
  >
    <NuxtLink to="/" class="px-6">Dự án</NuxtLink>
    <NuxtLink to="/#fourthSection" class="px-6">Khám phá</NuxtLink>
    <NuxtLink to="/about" class="px-6">Về chúng tôi</NuxtLink>
  </nav>
</template>

<style scoped lang="css">
  @reference "~/assets/css/main.css";

  a {
    @apply mx-4 font-bold;
    /* margin-left + margin-right = 1rem */
  }
</style>
