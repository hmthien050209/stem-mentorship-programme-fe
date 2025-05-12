import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  PieController,
  Title,
  Tooltip,
} from 'chart.js'

let registered = false

export function registerChartJs() {
  if (registered) return

  Chart.register(
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarController,
    ArcElement,
    BarElement,
    PieController,
    CategoryScale,
  )

  // Font
  Chart.defaults.font.family = 'Inter'

  // Colors
  Chart.defaults.backgroundColor = ['#FBBB35', '#B21414', '#22882D', '#7030A0', '#0070C0']
  Chart.defaults.color = '#ffffff'

  // Border
  Chart.defaults.datasets.pie.borderWidth = 0

  // Title
  Chart.defaults.plugins.title.display = true
  Chart.defaults.plugins.title.font = {
    size: 24,
    weight: 'bold',
  }
  Chart.defaults.plugins.title.padding = 20

  // Legend
  Chart.defaults.plugins.legend.position = 'bottom'
  Chart.defaults.plugins.legend.align = 'start'

  // Responsive settings
  Chart.defaults.responsive = true
  Chart.defaults.maintainAspectRatio = false

  console.log('Chart.js registered!')

  registered = true
}
