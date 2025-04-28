<template>
  <nav
    id="baseNavBar"
    class="fixed top-0 left-0 z-10 flex h-24 w-screen items-center justify-center transition-all duration-150 ease-out"
  >
    <NuxtLink to="/">Dự án</NuxtLink>
    <NuxtLink to="/explore">Khám phá</NuxtLink>
    <NuxtLink to="/about">Về chúng tôi</NuxtLink>
  </nav>
</template>

<style scoped lang="css">
  @reference "~/assets/css/main.css";

  nav {
    @apply bg-transparent text-white;
  }

  a {
    @apply mx-1.5;
  }
</style>
