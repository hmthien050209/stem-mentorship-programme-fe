<script setup lang="ts">
  useHead({
    title: 'Nhã nhạc cung đình Huế',
  })

  const image = useImage()
  const lastSectionImageUrl = image('/img/nha-nhac-cung-dinh-last-section-background.svg', {
    fit: 'cover',
  })
</script>

<template>
  <div class="w-full bg-[#100D08] text-white">
    <section class="relative h-screen w-screen">
      <NuxtImg
        src="/img/nha-nhac-cung-dinh-background.svg"
        fit="cover"
        class="h-full w-full object-cover"
        alt="background"
        :placeholder="
          image('/img/nha-nhac-cung-dinh-background.svg', {
            blur: 20,
            format: 'webp',
            width: 205,
            height: 128,
          })
        "
        preload
      />

      <div class="absolute top-32 left-24 text-left">
        <span class="font-playfair text-[135px] leading-none">
          <span class="text-[260px]">N</span><span class="text-[120px]">HÃ NHẠC</span> <br />
          CUNG ĐÌNH
        </span>
        <div class="title font-bold italic">“Tinh hoa âm nhạc cung đình giữa lòng di sản Huế”</div>
      </div>
    </section>

    <section class="relative flex h-[540px] items-center justify-center">
      <div
        class="absolute top-0 left-0 h-full w-full bg-gradient-to-l from-[#7030A0] to-[#100D08] to-[96%] opacity-50"
      />
      <div class="z-10 grid w-[85%] grid-cols-1 grid-rows-2 gap-10">
        <div class="justify-begin flex w-full flex-row items-center gap-10">
          <LazyNuxtImg src="/img/position.svg" class="h-32 w-32" alt="position icon" />
          <div class="flex flex-col gap-2">
            <div class="text-3xl font-bold">GIỚI THIỆU CHUNG</div>
            <p>
              Dân ca quan họ một loại hình âm nhạc đặc trưng của khu vực châu thổ sông Hồng, hình
              thành và phát triển từ vùng văn hoá Kinh Bắc (Bắc Ninh, Bắc Giang, cùng một số nơi như
              Lạng Sơn, Hưng Yên và Hà Nội).
            </p>
          </div>
        </div>
        <div class="justify-begin flex w-full flex-row items-center gap-10">
          <LazyNuxtImg src="/img/unesco.svg" class="h-32 w-32" alt="unesco icon" />
          <div class="flex flex-col gap-2">
            <div class="text-3xl font-bold">DI SẢN VĂN HOÁ PHI VẬT THỂ ĐẠI DIỆN CỦA NHÂN LOẠI</div>
            <p>Được UNESCO công nhận năm 2009</p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative">
      <NuxtImg
        src="/img/nha-nhac-cung-dinh-instruments.svg"
        fit="cover"
        class="h-full w-full object-cover"
        alt="the instruments of nha nhac cung dinh"
        :placeholder="
          image('/img/nha-nhac-cung-dinh-instruments.svg', {
            blur: 20,
            format: 'webp',
            width: 144,
            height: 113,
          })
        "
        preload
      />
      <div class="absolute top-10 left-0 w-full">
        <div class="grid w-full grid-cols-3">
          <div class="mr-8 flex-1 border-b-3 border-b-white" />
          <div class="flex-1">
            <h1 class="text-center text-7xl">NHẠC CỤ</h1>
          </div>
          <div class="ml-8 flex-1 border-b-3 border-b-white" />
        </div>
      </div>
    </section>

    <section>
      <NuxtImg
        src="/img/nha-nhac-cung-dinh-more-info.svg"
        fit="cover"
        class="h-full w-full object-cover"
        alt="more info"
        :placeholder="
          image('/img/nha-nhac-cung-dinh-more-info.svg', {
            blur: 20,
            format: 'webp',
            width: 96 * 2,
            height: 83 * 2,
          })
        "
        preload
      />
    </section>

    <section
      :style="`background-image: url(${lastSectionImageUrl});`"
      class="flex flex-col bg-cover"
    >
      <div class="grid w-full grid-cols-3 pt-16">
        <div class="mr-8 flex-1 border-b-3 border-b-white" />
        <h1 class="text-center text-8xl">ĐẶC ĐIỂM</h1>
        <div class="ml-8 flex-1 border-b-3 border-b-white" />
      </div>
      <div class="p-16">
        <div class="mt-24 mb-32 grid h-96 grid-cols-2 grid-rows-1 gap-8">
          <div class="box">
            <LazyNuxtImg src="/img/hearts.svg" class="w-20" alt="target icon" />
            <h3>PHONG CÁCH</h3>
            <div class="text-center">
              Trang nghiêm, thanh tao nhưng cũng vô cùng tinh tế với giai điệu uyển chuyển, nhịp
              nhàng, kết hợp khéo léo giữa đa dạng nhạc cụ và giọng hát.
            </div>
          </div>
          <div class="box">
            <LazyNuxtImg src="/img/pen.svg" class="w-20" alt="people icon" />
            <h3>CÂU TỪ</h3>
            <div class="text-center">
              Mang tính bác học, thể hiện lễ nghi, triết lý sâu sắc thể hiện quan niệm vũ trụ quan –
              nhân sinh quan của triều đình phong kiến.
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 grid-rows-2 gap-12">
          <iframe
            class="aspect-video w-full"
            src="https://www.youtube.com/embed/zDwlw3MnhPo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
          <div>
            <p class="text-3xl font-bold">MÚA LỤC CÚNG HOA ĐĂNG</p>
            <p class="text-justify">
              "Lục cúng hoa đăng" có nguồn gốc từ một điệu múa dùng trong nghi lễ Phật giáo: Múa
              "Lục cúng" nghĩa là sáu lần cúng, được thể hiện qua sáu lần múa, mỗi lần múa dâng lên
              một thứ đồ cúng như: hương, hoa, đăng, trà, quả, thực. Về sau, dưới triều vua Minh
              Mạng, điệu múa này được đưa vào cung đình và dàn dựng thành múa "Lục cúng hoa đăng" để
              biểu diễn trong những ngày lễ Vạn thọ, Thánh thọ, Tiên thọ …
            </p>
          </div>
          <div>
            <p class="text-right text-3xl font-bold">PHÚ LỤC ĐỊCH</p>
            <p class="text-justify">
              Trích vở tuồng cổ "Hữu biến vô hình". Vở tuồng nói về việc dưới trần gian có nhiều yêu
              nghiệt quấy phá, coi thường luân thường đạo lý. Ngọc Hoàng bèn sai một vị thiên tướng
              xuống trần gian trừ yêu diệt ma, cứu độ chúng sinh. Dù gặp không ít khó khăn với vô
              vàn yêu ma chước quỷ của bọn thiên nghiệt, cuối cùng thiên tướng cũng hoàn thành sứ
              mệnh mà Ngọc Hoàng giao phó. Vở tuồng cổ nói về việc cái thiện luôn chiến thắng cái
              ác, dù cái ác luôn hiện hữu và biến tấu không lường.
            </p>
          </div>
          <iframe
            class="aspect-video w-full"
            src="https://www.youtube.com/embed/2Tzg_RTalcw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>

        <InfoMeaning />
      </div>
    </section>
  </div>
</template>

<style scoped>
  @reference '~/assets/css/main.css';

  .box {
    @apply flex flex-col items-center justify-center gap-4 bg-white p-8 text-black;
  }

  ul li {
    @apply list-disc;
  }
</style>
