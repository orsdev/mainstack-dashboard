import { ApexOptions } from "apexcharts";
import dayjs from "dayjs";

export const ViewsChartOptions = {
  chart: {
    width: "100%",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  tooltip: {
    enabled: true,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    colors: ["#FF5403"],
    width: 2,
    curve: "straight",
  },
  fill: {
    colors: ["#FFE4D7"],
    type: "solid",
  },
  grid: { show: true, strokeDashArray: 5 },
  yaxis: {
    show: true,
    labels: {
      show: true,
      style: {
        colors: "#56616B",
        fontSize: "1.4rem",
      },
    },
  },
  xaxis: {
    labels: {
      hideOverlappingLabels: false,
      style: {
        colors: "#56616B",
        fontSize: "1.4rem",
      },
      formatter: function (value: any) {
        return dayjs(value).format("DD MMM");
      },
    },
  },
} as ApexOptions;