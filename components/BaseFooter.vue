<script setup lang="ts">
  const router = useRouter()
  const showSources = computed(() => {
    return router.currentRoute.value.path.startsWith('/info')
  })
</script>

<template>
  <footer class="flex w-screen flex-col gap-8 bg-black p-8 text-base leading-relaxed text-white">
    <NuxtLink
      v-if="showSources"
      to="https://docs.google.com/document/d/11-QqKFfCbovumQ_8KdG7h_gxgOadcPYNjXEmM3Df5zI/edit?usp=sharing"
      class="font-bold underline"
      >TRÍCH DẪN VÀ THAM KHẢO
    </NuxtLink>
    <div class="grid w-full grid-cols-3 grid-rows-1">
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
          >hoangminhthien05022009@gmail.com
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
