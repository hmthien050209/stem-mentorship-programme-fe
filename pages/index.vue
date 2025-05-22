<script setup lang="ts">
  import { waapi } from 'animejs'

  const router = useRouter()

  // Second section animation
  const secondSection = useTemplateRef('secondSection')
  const secondSectionVisible = useElementVisibility(secondSection, {
    rootMargin: '-25%',
  })

  // Third section animation
  const thirdFirst = useTemplateRef('thirdFirst')
  const _thirdFirstVisible = useElementVisibility(thirdFirst, {
    rootMargin: '-25%',
  })
  const thirdFirstVisible = refThrottled(_thirdFirstVisible, 1000)

  const thirdSecond = useTemplateRef('thirdSecond')
  const thirdSecondVisible = useElementVisibility(thirdSecond, {
    rootMargin: '-25%',
  })

  // Fourth section animation
  const fourthSection = useTemplateRef('fourthSection')
  const fourthSectionVisible = useElementVisibility(fourthSection)

  onMounted(() => {
    // First section animation
    waapi.animate('#_1_1 > *', defaultAnimation)

    watch(
      secondSectionVisible,
      (val) => {
        if (val) {
          waapi.animate('#secondSection > *', defaultAnimation)
        }
      },
      { once: true },
    )

    watch(
      thirdSecondVisible,
      (val) => {
        if (val) {
          waapi.animate('#_3_2 > *', defaultAnimation)
        }
      },
      { once: true },
    )

    watch(
      fourthSectionVisible,
      (val) => {
        if (val) {
          waapi.animate('#fourthSection > *', defaultAnimation)
        }
      },
      { once: true },
    )
  })

  useRuntimeHook('page:finish', () => {
    if (router.currentRoute.value.hash === '#fourthSection') {
      fourthSection.value?.scrollIntoView()
    }
  })
</script>

<template>
  <div class="w-full text-white">
    <section
      id="firstSection"
      ref="firstSection"
      class="relative h-screen w-screen overflow-hidden"
    >
      <NuxtPicture
        src="/img/first-section-background.png"
        :img-attrs="{
          class: 'h-full w-full object-cover',
          alt: 'background',
        }"
        placeholder
        preload
      />
      <div id="_1_1" class="absolute bottom-32 left-24 flex w-3/4 flex-col leading-relaxed">
        <h1>THANH SẮC VIỆT</h1>
        <div class="subtitle">
          "Một không gian số khám phá văn hóa Việt Nam qua lăng kính hiện đại <br />
          – nhịp cầu nối giữa quá khứ và hiện tại, nơi những âm vang ngàn đời của dân tộc được chắt
          lọc và lan toả”
        </div>
      </div>
      <div id="_1_2" class="absolute bottom-0 left-0 flex h-32 w-full items-center justify-center">
        <LazyScrollDown />
      </div>
    </section>

    <section
      id="secondSection"
      ref="secondSection"
      class="flex h-screen w-screen flex-col bg-gradient-to-l from-[#B21414] via-[#4C0909] to-[#100D08] p-16"
    >
      <div class="flex flex-row">
        <h1>GIỚI THIỆU</h1>
        <div class="m-8 flex-1 border-b-3 border-b-white" />
      </div>

      <div class="subtitle">
        Với tâm huyết và sự trân trọng dành cho di sản, “Thanh Sắc Việt” không chỉ là một website để
        giới thiệu về âm nhạc truyền thống Việt Nam, mà còn là một hành trình khám phá những câu
        chuyện, những cảm xúc đã thấm đẫm trong từng tiếng đàn, lời ca, hơi thở của đất trời quê
        hương.
      </div>

      <div class="mt-24 grid h-full grid-cols-2 grid-rows-1 gap-8">
        <div class="box">
          <LazyNuxtImg src="/img/target.svg" class="w-20" alt="target icon" />
          <h3>MỤC TIÊU DÀI HẠN</h3>
          <div class="text-center">
            Mang âm nhạc dân tộc đến gần hơn với thế hệ trẻ qua cách tiếp cận hiện đại và truyền cảm
            hứng
          </div>
        </div>
        <div class="box">
          <LazyNuxtImg src="/img/people.svg" class="w-20" alt="people icon" />
          <h3>ĐỐI TƯỢNG</h3>
          <div class="text-center">
            Học sinh - sinh viên (15 - 25 tuổi) mong muốn tìm hiểu hơn về văn hoá và truyền thống
            Việt Nam
          </div>
        </div>
      </div>
    </section>

    <section
      id="thirdSection"
      ref="thirdSection"
      class="flex h-[1535px] w-screen flex-col bg-[url('/img/third-section-background.svg')] bg-cover"
    >
      <ClientOnly>
        <LazyIndexCharts id="_3_1" ref="thirdFirst" :visible="thirdFirstVisible" />
      </ClientOnly>
      <div
        id="_3_2"
        ref="thirdSecond"
        class="z-10 flex w-full flex-1 flex-col items-center justify-center gap-12 bg-gradient-to-r from-[#B21414] via-[#4C0909] to-[#100D08] p-8"
      >
        <div class="italic">
          Khảo sát thực hiện trong năm 2025 với 90 học sinh, sinh viên từ 15–25 tuổi ở ba khu vực:
          Bắc, Trung và Nam.
        </div>
        <div class="grid grid-cols-3 grid-rows-1 gap-16">
          <div class="flex flex-col items-center justify-center gap-4">
            <span>Khoảng</span>
            <h1>~23%</h1>
            <span>Người quan tâm đến <span class="font-bold">Âm nhạc</span></span>
          </div>
          <div class="flex flex-col items-center justify-center gap-4">
            <span><span class="font-bold">Âm nhạc</span> có tỉ lệ</span>
            <h1>~70%</h1>
            <span>Câu trả lời sai</span>
          </div>
          <div class="flex flex-col items-center justify-center gap-4">
            <span>Khoảng</span>
            <h1>>25%</h1>
            <span>Người muốn tìm hiểu về <span class="font-bold">Âm nhạc</span></span>
          </div>
        </div>
        <span class="italic">
          => Âm nhạc là lĩnh vực được quan tâm và có nhu cầu tìm hiểu cao nhất, nhưng lại tồn tại
          nhiều lỗ hổng về hiểu biết <br />
          <span class="font-bold"
            >=> “Thanh Sắc Việt” ra đời với mong muốn góp phần bảo tồn, khơi gợi sự quan tâm và tình
            yêu đối với di sản âm nhạc dân tộc thông qua một nền tảng hiện đại, sáng tạo và gần gũi
            với giới trẻ.</span
          >
        </span>
      </div>
    </section>

    <section
      id="fourthSection"
      ref="fourthSection"
      class="flex h-screen w-screen flex-col items-center bg-[url('/img/fourth-section-background.svg')] bg-cover py-12"
    >
      <div class="grid w-full grid-cols-3">
        <div class="mr-8 flex-1 border-b-3 border-b-white" />
        <h1 class="text-center text-7xl">KHÁM PHÁ</h1>
        <div class="ml-8 flex-1 border-b-3 border-b-white" />
      </div>
    </section>
  </div>
</template>

<style scoped>
  @reference '~/assets/css/main.css';

  .box {
    @apply flex flex-col items-center justify-center gap-4 bg-white p-8 text-black;
  }

  #_1_1 > *,
  #secondSection > *,
  #_3_2 > *,
  #fourthSection > * {
    @apply opacity-0;
  }
</style>
