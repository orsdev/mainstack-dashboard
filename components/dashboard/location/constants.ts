import { ApexOptions } from "apexcharts";

export const LocationChartOptions = {
  chart: {
    width: "100%",
    type: 'donut',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  tooltip: {
    enabled: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: { width: 0 },
  legend: {
    show: false
  },
} as ApexOptions;