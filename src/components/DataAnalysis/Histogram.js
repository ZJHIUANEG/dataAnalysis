import echarts from "echarts";

const Histogram = {
  title: {
    left: "center",
    text: "柱状图",
    subtext: "柱状图柱状图柱状图"
  },
  legend: {
    top: "6%",
    left: "20%",
    data: ["INDEX"]
  },
  tooltip: {
    trigger: "item"
  },
  xAxis: {
    type: "category",
    data: [],
    axisLabel: {
      color: "#000"
    },
    axisTick: {
      show: true
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#d14a61"
      }
    },
    nameTextStyle: {
      color: "#fff"
    }
    // z: 10
  },
  yAxis: {
    axisLine: {
      show: true
    },
    axisTick: {
      show: true
    },
    axisLabel: {
      textStyle: {
        color: "#999"
      }
    }
  },
  dataZoom: [
    {
      type: "inside"
    }
  ],
  series: [
    {
      // For shadow
      type: "bar",
      itemStyle: {
        normal: { color: "rgba(0,0,0,0.05)" }
      },
      barGap: "-100%",
      barCategoryGap: "40%",
      data: [],
      animation: true
    },
    {
      type: "bar",
      name: "INDEX",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" }
          ])
        },
        emphasis: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#2378f7" },
            { offset: 0.7, color: "#2378f7" },
            { offset: 1, color: "#83bff6" }
          ])
        }
      },
      data: []
    }
  ]
};

export { Histogram };
