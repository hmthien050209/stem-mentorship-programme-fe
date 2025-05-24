<script setup lang="ts">
  useHead({
    title: 'Đờn ca tài tử',
  })

  const image = useImage()
  const lastSectionImageUrl = image('/img/don-ca-tai-tu-last-section-background.svg', {
    fit: 'cover',
  })
</script>

<template>
  <div class="w-full bg-[#100D08] text-white">
    <section class="relative h-screen w-screen">
      <NuxtImg
        src="/img/don-ca-tai-tu-background.svg"
        fit="cover"
        class="h-full w-full object-cover"
        alt="background"
        :placeholder="
          image('/img/don-ca-tai-tu-background.svg', {
            blur: 20,
            format: 'webp',
            width: 205,
            height: 128,
          })
        "
        preload
      />

      <div
        class="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center text-right"
      >
        <div class="font-playfair relative h-[570px] w-[700px] text-[155px]">
          <span class="absolute top-0 left-0 text-[150px]"
            ><span class="text-[300px]">Đ</span>ỜN CA</span
          >
          <div class="absolute right-0 bottom-0">TÀI TỬ</div>
        </div>
        <div class="title mt-18 font-bold italic">
          “Thanh âm mộc mạc vang vọng từ đất phương Nam”
        </div>
      </div>
    </section>

    <section class="relative flex h-[540px] items-center justify-center">
      <div
        class="absolute top-0 left-0 h-full w-full bg-gradient-to-l from-[#FBBB35] to-[#100D08] to-[96%] opacity-50"
      />
      <div class="z-10 grid w-[85%] grid-cols-1 grid-rows-2 gap-10">
        <div class="justify-begin flex w-full flex-row items-center gap-10">
          <LazyNuxtImg src="/img/position.svg" class="h-32 w-32" alt="position icon" />
          <div class="flex flex-col gap-2">
            <div class="text-3xl font-bold">GIỚI THIỆU CHUNG</div>
            <p>
              Đờn ca tài tử Nam Bộ xuất phát từ Trung Bộ và chịu ảnh hưởng từ Nhã nhạc cung đình Huế
              vào cuối thế kỷ 19. Sau khi Kinh đô Huế bị thất thủ vào năm 1885, nhiều người di cư về
              phía Nam đã kết hợp nhã nhạc cung đình Huế với các yếu tố dân ca phía Nam để tạo ra
              đờn ca tài tử.
            </p>
          </div>
        </div>
        <div class="justify-begin flex w-full flex-row items-center gap-10">
          <LazyNuxtImg src="/img/unesco.svg" class="h-32 w-32" alt="unesco icon" />
          <div class="flex flex-col gap-2">
            <div class="text-3xl font-bold">DI SẢN VĂN HOÁ PHI VẬT THỂ ĐẠI DIỆN CỦA NHÂN LOẠI</div>
            <p>Được UNESCO công nhận năm 2003</p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative">
      <NuxtImg
        src="/img/don-ca-tai-tu-instruments.svg"
        fit="cover"
        class="h-full w-full object-cover"
        alt="the instruments of don ca tai tu"
        :placeholder="
          image('/img/don-ca-tai-tu-instruments.svg', {
            blur: 20,
            format: 'webp',
            width: 96 * 2,
            height: 71 * 2,
          })
        "
        preload
      />
      <div class="absolute top-10 left-0 w-full">
        <div class="grid w-full grid-cols-3">
          <div class="mr-8 flex-1 border-b-3 border-b-white" />
          <div class="flex-1">
            <h1 class="text-center text-7xl">ĐỜN & CA</h1>
          </div>
          <div class="ml-8 flex-1 border-b-3 border-b-white" />
        </div>
      </div>
    </section>

    <section>
      <NuxtImg
        src="/img/don-ca-tai-tu-more-info.svg"
        fit="cover"
        class="h-full w-full object-cover"
        alt="more info"
        :placeholder="
          image('/img/don-ca-tai-tu-more-info.svg', {
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
              Pha trộn nhịp điệu nhanh - chậm, kết hợp đa dạng âm thanh từ các loại đàn.
            </div>
          </div>
          <div class="box">
            <LazyNuxtImg src="/img/pen.svg" class="w-20" alt="people icon" />
            <h3>CÂU TỪ</h3>
            <div class="text-center">
              Mộc mạc, đơn giản, thường theo thể thơ lục bát nhằm phản ánh đời sống, tình cảm đôi
              lứa và tình yêu quê hương.
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 grid-rows-2 gap-12">
          <iframe
            class="aspect-video w-full"
            src="https://www.youtube.com/embed/POcpYUpEN_0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
          <div>
            <p class="text-3xl font-bold">DẠ CỔ HOÀI LANG</p>
            <p class="text-justify">
              Đầu thế kỷ XX, ông Cao Văn Lầu (còn gọi là Sáu Lầu) đã sáng tác bài Dạ cổ hoài lang
              (Vọng cổ), là một trong những bài hát nổi tiếng và phổ biến nhất của Đờn ca tài tử.
              Bài hát gồm có 20 câu với nội dung nói lên lòng chung thủy và tâm trạng người phụ nữ
              chờ mong, trông ngóng tin chồng với hai chữ "bình an".
            </p>
          </div>
          <div>
            <p class="text-right text-3xl font-bold">BÌNH BÁN VẮN</p>
            <p class="text-justify">
              Bình bán vắn là một trong những bài nhỏ thuộc họ Bắc trong ca nhạc tài tử miền Nam,
              xuất xứ từ ca nhạc Huế. Bình bán vắn tức là bản nhạc ngắn, câu chữ, nhịp thức cũng đều
              rút ngắn (nằm ở cung Bắc tức hơi Bắc).
            </p>
          </div>
          <iframe
            class="aspect-video w-full"
            src="https://www.youtube.com/embed/kPzGmd3JB3E"
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
