<script setup lang="ts">
  const firstSection = useTemplateRef<HTMLElement>('firstSection')
  const isFirstSectionVisible = useElementVisibility(firstSection)
  const navBarStore = useNavBarStore()

  watchEffect(() => {
    navBarStore.isHighlighted = !isFirstSectionVisible.value
  })

  const query = groq`*[_type == 'information'][0..6] | order(_createdAt desc){title, slug{current}, image{asset->{url}}}`
  const { data: posts, refresh: _refresh } = await useLazySanityQuery<PostInfo[]>(query)
</script>

<template>
  <div class="w-screen">
    <section ref="firstSection" class="relative h-screen w-screen overflow-hidden">
      <NuxtImg
        class="h-full w-full object-cover"
        fit="cover"
        src="/img/background.png"
        alt="background"
        format="webp"
        preload
      />
      <div class="absolute bottom-32 left-24 flex w-3/4 flex-col leading-relaxed">
        <h1 class="font-playfair text-[110px] text-white">THANH SẮC VIỆT</h1>
        <div class="subtitle text-white">
          "Một không gian số khám phá văn hóa Việt Nam qua lăng kính hiện đại <br />
          – nhịp cầu nối giữa quá khứ và hiện tại, nơi những âm vang ngàn đời của dân tộc được chắt
          lọc và lan toả”
        </div>
      </div>
      <div class="absolute bottom-0 left-0 flex h-32 w-full items-center justify-center">
        <LazyScrollDown />
      </div>
    </section>

    <section>
      <h1>Data loading testing section</h1>
      <ul>
        <li v-for="post in posts" :key="post.slug.current" class="w-48 rounded-md bg-slate-300">
          <LazyNuxtImg
            :src="post.image.asset.url"
            class="h-32 w-48 rounded-md"
            placeholder
            placeholder-class="blur-sm"
          />
          <div>{{ post.title }}</div>
        </li>
      </ul>
    </section>
  </div>
</template>
