const Linechart = {
  title: {
    left: "center",
    text: "折线图",
    subtext: "折线图折线图折线图"
  },
  color: ["#5793f3", "#d14a61", "#675bba"],

  tooltip: {
    trigger: "item",
    axisPointer: {
      type: "cross"
    }
  },
  legend: {
    top: "10%",
    left: "20%",
    data: ["INDEX"]
  },
  grid: {
    top: "30%"
  },
  dataZoom: [
    {
      type: "slider",
      show: true
    }
  ],
  xAxis: [
    {
      type: "category",
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        lineStyle: {
          color: "#d14a61"
        }
      },
      axisLabel: {
        color: "#000"
      },
      axisPointer: {
        label: {
          formatter: function(params) {
            return (
              "index  " +
              params.value +
              (params.seriesData.length ? "：" + params.seriesData[0].data : "")
            );
          }
        }
      },
      data: []
    }
  ],
  yAxis: [
    {
      type: "value"
    }
  ],
  series: [
    {
      name: "INDEX",
      type: "line",
      smooth: true,
      data: []
    }
  ]
};

export { Linechart };