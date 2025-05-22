<script setup lang="ts">
  import { Chart } from 'chart.js'

  const data: DemandData[] = [
    {
      name: 'Âm nhạc',
      value: 27,
    },
    {
      name: 'Lễ hội',
      value: 17,
    },
    {
      name: 'Ẩm thực',
      value: 12,
    },
    {
      name: 'Mỹ thuật',
      value: 20,
    },
    {
      name: 'Kiến trúc',
      value: 24,
    },
  ]

  onMounted(() => {
    registerChartJs()
    const ctx = document.getElementById('culturalResearchDemandChart') as HTMLCanvasElement

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map((item) => item.name),
        datasets: [
          {
            label: 'Tỉ lệ (%)',
            data: data.map((item) => item.value),
            backgroundColor: '#8e1616',
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          title: {
            text: 'BIỂU ĐỒ THỂ HIỆN NHU CẦU TÌM HIỂU VỀ VĂN HOÁ',
          },
        },
        scales: {
          y: {
            ticks: {
              callback: (value) => `${value}%`,
            },
          },
          x: {
            ticks: {
              font: {
                weight: 'bold',
              },
            },
          },
        },
      },
    })
  })
</script>

<template>
  <div class="flex h-full w-full items-center justify-center">
    <div class="h-full w-1/2">
      <canvas id="culturalResearchDemandChart" />
    </div>
  </div>
</template>
