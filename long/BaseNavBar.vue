<template>
  <nav
    id="baseNavBar"
    class="fixed top-0 left-0 z-10 flex h-16 w-screen items-center justify-center motion-safe:transition-all motion-safe:duration-150 motion-safe:ease-out bg-black/70 text-white"
  >
    <NuxtLink to="/" class="px-6">Dự án</NuxtLink>
    <NuxtLink to="/explore" class="px-6">Khám phá</NuxtLink>
    <NuxtLink to="/about" class="px-6">Về chúng tôi</NuxtLink>
  </nav>
</template>

<style scoped lang="css">
@reference "~/assets/css/main.css";

nav {
}

a {
  @apply mx-4; /* margin-left + margin-right = 1rem */
}
</style>
