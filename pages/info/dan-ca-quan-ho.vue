<script setup lang="ts">
  useHead({
    title: 'Dân ca Quan Họ',
  })

  const image = useImage()
  const lastSectionImageUrl = image('/img/dan-ca-quan-ho-last-section-background.svg', {
    fit: 'cover',
  })
</script>

<template>
  <div class="w-full bg-[#100D08] text-white">
    <section class="relative h-screen w-screen">
      <NuxtImg
        src="/img/dan-ca-quan-ho-background.svg"
        fit="cover"
        class="h-full w-full object-cover"
        alt="background"
        :placeholder="
          image('/img/dan-ca-quan-ho-background.svg', {
            blur: 20,
            format: 'webp',
            width: 205,
            height: 128,
          })
        "
        preload
      />

      <div class="absolute right-10 bottom-10 text-right">
        <div class="font-playfair relative h-[400px] w-[900px] text-[155px]">
          <div class="absolute top-0 right-10">DÂN CA</div>
          <span class="absolute bottom-0 left-0"><span class="text-[300px]">Q</span>UAN HỌ</span>
        </div>
        <div class="title font-bold italic">
          “Lời ca từ bến sông Kinh Bắc, vang vọng tình người tình quê”
        </div>
      </div>
    </section>

    <section class="relative flex h-[540px] items-center justify-center">
      <div
        class="absolute top-0 left-0 h-full w-full bg-gradient-to-l from-[#22882D] to-[#100D08] to-[96%] opacity-50"
      />
      <div class="z-10 grid w-[85%] grid-cols-1 grid-rows-2 gap-10">
        <div class="justify-begin flex w-full flex-row items-center gap-10">
          <LazyNuxtImg src="/img/position.svg" class="h-32 w-32" alt="position icon" />
          <div class="flex flex-col gap-2">
            <div class="text-3xl font-bold">GIỚI THIỆU CHUNG</div>
            <p>
              Nhã nhạc cung đình có nguồn gốc từ Trung Quốc, dưới thời Chu (thế kỉ VI – III TCN),
              sau đó loại hình âm nhạc này mới du nhập vào Việt Nam từ thời Lý, biến thể và phát
              triển qua các triều đại Trần, Lê, Tây Sơn, rực rỡ nhất thời Nguyễn và thành Nhã nhạc
              cung đình Huế sau này.
            </p>
          </div>
        </div>
        <div class="justify-begin flex w-full flex-row items-center gap-10">
          <LazyNuxtImg src="/img/unesco.svg" class="h-32 w-32" alt="unesco icon" />
          <div class="flex flex-col gap-2">
            <div class="text-3xl font-bold">DI SẢN PHI VẬT THỂ & TRUYỀN KHẨU CỦA NHÂN LOẠI</div>
            <p>Được UNESCO công nhận năm 2003</p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative">
      <NuxtImg
        src="/img/dan-ca-quan-ho-costume.svg"
        fit="cover"
        class="h-full w-full object-cover"
        alt="the costume of dan ca quan ho"
        :placeholder="
          image('/img/dan-ca-quan-ho-costume.svg', {
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
            <h1 class="text-center text-7xl">TRANG PHỤC</h1>
          </div>
          <div class="ml-8 flex-1 border-b-3 border-b-white" />
        </div>
      </div>
    </section>

    <section>
      <NuxtImg
        src="/img/dan-ca-quan-ho-more-info.svg"
        fit="cover"
        class="h-full w-full object-cover"
        alt="more info"
        :placeholder="
          image('/img/dan-ca-quan-ho-more-info.svg', {
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
              Trữ tình, tinh tế, ca từ sâu sắc nhằm phản ánh tâm hồn và tình cảm người dân Kinh Bắc.
            </div>
          </div>
          <div class="box">
            <LazyNuxtImg src="/img/pen.svg" class="w-20" alt="people icon" />
            <h3>CÂU TỪ</h3>
            <div class="text-center">
              Thể hiện tình yêu đôi lứa, lòng hiếu khách, đạo lý truyền thống qua những lời ca trau
              chuốt, ẩn dụ, phong phú.
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 grid-rows-2 gap-12">
          <iframe
            class="aspect-video w-full"
            src="https://www.youtube.com/embed/zxmtDUd04L8?si=lKoCLYdW-AoN-kfo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
          <div>
            <p class="text-3xl font-bold">NGỒI TỰA MẠN THUYỀN</p>
            <p class="text-justify">
              Dòng sông Tương xa xưa ở vùng Kinh Bắc, gắn với mối tình của đôi trai gái Trương Chi
              và Mỵ Nương “Người thì thật xấu, hát thì thật hay”. Trên những khúc sông của Tương
              Giang thơ mộng ấy đã từng là nơi hội tụ cho các chàng trai, cô gái vùng quan họ gặp gỡ
              và ca hát trong những ngày hội xuân.
            </p>
          </div>
          <div>
            <p class="text-right text-3xl font-bold">LÝ GIAO DUYÊN</p>
            <p class="text-justify">
              Giao duyên thoạt đầu là sự dò ý gợi tình của 2 người nam nữ. Giai điệu trữ tình quyến
              luyến. Trong bài Lý giao duyên Bắc bộ có câu hát “Cái ngãi đá vàng ta quyết (mà) yêu
              nhau”. Ngãi là nghĩa. Cái nghĩa chung tình. Vì miền Nam hay nói và viết chữ “nghĩa”
              thành ra “ngãi”.
            </p>
          </div>
          <iframe
            class="aspect-video w-full"
            src="https://www.youtube.com/embed/BCa80cvImyw?si=_3h0VmsnFV6UpQDW"
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
