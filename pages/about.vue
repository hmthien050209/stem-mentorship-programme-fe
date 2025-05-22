<script setup lang="ts">
  import { waapi } from 'animejs'

  useHead({
    title: 'Về chúng tôi',
  })

  const image = useImage()

  const ref1 = useTemplateRef('_2_1')
  const ref1Visible = useElementVisibility(ref1, {
    rootMargin: '-10%',
  })

  const ref2 = useTemplateRef('_2_2')
  const ref2Visible = useElementVisibility(ref2, {
    rootMargin: '-10%',
  })

  const ref3 = useTemplateRef('_2_3')
  const ref3Visible = useElementVisibility(ref3, {
    rootMargin: '-10%',
  })

  onMounted(() => {
    waapi.animate('#firstSection > div > *', defaultAnimation)

    watch(
      ref1Visible,
      (val) => {
        if (val && import.meta.client) {
          waapi.animate('#_2_1 > *', defaultAnimation)
        }
      },
      { once: true },
    )

    watch(
      ref2Visible,
      (val) => {
        if (val && import.meta.client) {
          waapi.animate('#_2_2 > *', defaultAnimation)
        }
      },
      { once: true },
    )

    watch(
      ref3Visible,
      (val) => {
        if (val && import.meta.client) {
          waapi.animate('#_2_3 > *', defaultAnimation)
        }
      },
      { once: true },
    )
  })
</script>

<template>
  <div class="relative w-screen">
    <NuxtPicture
      src="/img/about-us-background.svg"
      :img-attrs="{ class: 'h-full w-full object-cover absolute top-0 left-0', alt: 'background' }"
      :placeholder="image('/img/about-us-background.svg', { blur: 5 })"
      preload
    />
    <section id="firstSection" class="relative h-screen w-screen">
      <div class="absolute right-20 bottom-20 flex flex-col px-8 text-white">
        <h1 class="text-right">VỀ CHÚNG TÔI</h1>
        <div class="subtitle text-right">
          Thanh Sắc Việt là một dự án được xây dựng với trái tim hướng về cội nguồn, là chiếc cầu
          nối giữa âm thanh truyền thống và hơi thở hiện đại. Chúng tôi tin rằng âm nhạc dân tộc
          không chỉ là nghệ thuật, mà còn là linh hồn và ký ức văn hoá của dân tộc Việt Nam cần được
          gìn giữ, thấu hiểu và lan tỏa đến thế hệ trẻ hôm nay.
        </div>
      </div>
    </section>

    <section id="secondSection" class="flex w-screen items-center justify-center p-32">
      <div class="flex w-[820px] flex-col gap-60 text-center text-white">
        <div id="_2_1" ref="_2_1">
          <h1>SỨ MỆNH</h1>
          <div class="italic">
            Chúng tôi mong muốn đưa âm nhạc truyền thống Việt Nam đến gần hơn với giới trẻ, đặc biệt
            là học sinh, sinh viên từ 15 đến 25 tuổi – những người đang tìm kiếm bản sắc văn hoá và
            ý nghĩa trong từng nhịp sống hiện đại. Bằng cách tiếp cận sáng tạo, dễ hiểu và truyền
            cảm hứng, Thanh Sắc Việt không chỉ là một trang web – mà là một hành trình khám phá di
            sản.
          </div>
        </div>
        <div id="_2_2" ref="_2_2">
          <h1>TẦM NHÌN</h1>
          <div class="italic">
            Trở thành nền tảng hàng đầu cho giới trẻ Việt Nam tìm hiểu, yêu mến và lan toả âm nhạc
            truyền thống – nơi những giá trị xưa cũ được kể lại bằng một ngôn ngữ trẻ trung, sáng
            tạo và chân thành.
          </div>
        </div>
        <div id="_2_3" ref="_2_3">
          <div>
            <span class="font-playfair text-[105px] leading-none"
              ><span class="font-playfair text-[80px]">ĐỒNG HÀNH</span> <br />
              <span class="font-playfair h-full align-middle text-[60px]">CÙNG </span>GIỚI TRẺ</span
            >
          </div>
          <div class="italic">
            Chúng tôi hiểu rằng di sản chỉ có thể sống mãi khi có người kể tiếp. Thanh Sắc Việt mong
            muốn đồng hành cùng bạn trên hành trình khám phá bản sắc Việt, để từ đó, mỗi người trẻ
            có thể góp tiếng nói của mình vào bản hoà ca của dân tộc.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  #firstSection > div > *,
  #_2_1 > *,
  #_2_2 > *,
  #_2_3 > * {
    opacity: 0;
  }
</style>
