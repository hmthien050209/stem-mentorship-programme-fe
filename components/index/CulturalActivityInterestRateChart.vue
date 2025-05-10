<script setup lang="ts">
  import { Chart } from 'chart.js'

  type Data = {
    name: string
    value: number
  }

  const data: Data[] = [
    {
      name: 'Không/ít quan tâm đến các hoạt động về văn hoá',
      value: 25,
    },
    {
      name: 'Quan tâm ở mức trung bình, có biết đến nhưng ít tham gia',
      value: 60,
    },
    {
      name: 'Rất quan tâm, thường xuyên tìm hiểu và tham gia',
      value: 15,
    },
  ]

  onMounted(() => {
    registerChartJs()
    const ctx = document.getElementById('culturalActivityInterestRateChart') as HTMLCanvasElement
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
            text: 'BIỂU ĐỒ THỂ HIỆN MỨC ĐỘ QUAN TÂM ĐẾN CÁC LOẠI VĂN HOÁ',
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
    <canvas id="culturalActivityInterestRateChart" />
  </div>
</template>
