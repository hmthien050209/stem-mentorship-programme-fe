<script setup lang="ts">
  import { Chart } from 'chart.js'

  type Data = {
    name: string
    correct: number
    incorrect: number
  }

  const data: Data[] = [
    {
      name: 'Ẩm thực',
      correct: 70,
      incorrect: 30,
    },
    {
      name: 'Âm nhạc',
      correct: 30,
      incorrect: 70,
    },
    {
      name: 'Mỹ thuật',
      correct: 35,
      incorrect: 65,
    },
    {
      name: 'Kiến trúc',
      correct: 40,
      incorrect: 60,
    },
    {
      name: 'Lễ hội',
      correct: 34,
      incorrect: 66,
    },
  ]

  onMounted(() => {
    registerChartJs()

    const ctx = document.getElementById('accuracyChart') as HTMLCanvasElement
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map((item) => item.name),
        datasets: [
          {
            label: 'Đúng (%)',
            backgroundColor: '#22882D',
            data: data.map((item) => item.correct),
          },
          {
            label: 'Sai (%)',
            backgroundColor: '#B21414',
            data: data.map((item) => item.incorrect),
          },
        ],
      },
      options: {
        plugins: {
          title: {
            text: 'TỈ LỆ TRẢ LỜI ĐÚNG - SAI THEO LĨNH VỰC VĂN HOÁ',
            font: {
              size: 14,
            },
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            ticks: {
              callback: (value) => `${value}%`,
            },
            stacked: true,
          },
        },
      },
    })
  })
</script>

<template>
  <div class="h-full w-full">
    <canvas id="accuracyChart" class="h-full w-full" />
  </div>
</template>
