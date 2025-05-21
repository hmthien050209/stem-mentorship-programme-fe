<template>
  <footer
    class="grid w-screen grid-cols-3 grid-rows-1 bg-black p-8 text-base leading-relaxed text-white"
  >
    <div class="col-span-1 flex flex-col">
      <div class="text-lg font-bold">Liên kết nhanh</div>
      <NuxtLink to="/">Dự án</NuxtLink>
      <NuxtLink to="/#fourthSection">Khám phá</NuxtLink>
      <NuxtLink to="/about">Về chúng tôi</NuxtLink>
    </div>
    <div class="col-span-2 flex flex-col">
      <div class="text-lg font-bold">Liên hệ</div>
      <NuxtLink href="mailto:khuenguyendovan@gmail.com">khuenguyendovan@gmail.com</NuxtLink>
      <NuxtLink href="mailto:hoangminhthien05022009@gmail.com"
        >hoangminhthien05022009@gmail.com</NuxtLink
      >
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
