<script setup lang="ts">
  import { Chart } from 'chart.js'

  type Data = {
    name: string
    value: number
  }

  const data: Data[] = [
    {
      name: 'Lễ hội',
      value: 22,
    },
    {
      name: 'Âm nhạc',
      value: 20,
    },
    {
      name: 'Mỹ thuật',
      value: 17,
    },
    {
      name: 'Kiến trúc',
      value: 28,
    },
    {
      name: 'Ẩm thực',
      value: 13,
    },
  ]

  onMounted(() => {
    registerChartJs()
    const ctx = document.getElementById('vietNamCultureInterestRateChart') as HTMLCanvasElement
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: data.map((item) => item.name),
        datasets: [
          {
            label: 'Tỉ lệ (%)',
            data: data.map((item) => item.value),
          },
        ],
      },
      options: {
        plugins: {
          title: {
            text: 'BIỂU ĐỒ THỂ HIỆN MỨC ĐỘ QUAN TÂM ĐẾN VĂN HOÁ VIỆT NAM',
            font: {
              size: 14,
            },
          },
        },
      },
    })
  })
</script>

<template>
  <div class="h-full w-full">
    <canvas id="vietNamCultureInterestRateChart" />
  </div>
</template>
