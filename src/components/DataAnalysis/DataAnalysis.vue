<template>
  <div id="main" :style="dataSize">
    <div id="Histogram"></div>
    <div id="Linechart"></div>
  </div>
</template>

<script>
import { Histogram } from "./Histogram.js";
import { Linechart } from "./LineChart.js";
// 引入基本模板
import echarts from "echarts";
import $ from "jquery";
import Vue from "vue";

export default {
  data() {
    return {
      dataSize: { height: "0px", width: "0px" },
      hisgChart: null,
      LineChart: null
    };
  },
  created() {
    this.dataSize.height = window.innerHeight + "px";
    this.dataSize.width = window.innerWidth + "px";
    Vue.prototype.$echarts = echarts;
  },
  mounted() {
    this.initECharts();
  },
  destroyed() {
    this.clearEcharts();
  },
  methods: {
    initECharts() {
      this.hisgChart = this.$echarts.init(document.getElementById("Histogram"));
      this.LineChart = this.$echarts.init(document.getElementById("Linechart"));

      let hisgChart = this.hisgChart;
      let LineChart = this.LineChart;

      let shadows = [];

      hisgChart.setOption(Histogram);
      LineChart.setOption(Linechart);

      // 异步加载数据
      hisgChart.showLoading();
      LineChart.showLoading();
      $.get("static/data/data.json").done(function(data) {
        hisgChart.hideLoading();

        // for (let i = 0; i < Object.keys(data.data).length; i++) {
        //   shadows.push(20);
        // }

        // 填入数据
        hisgChart.setOption({
          xAxis: { data: data.dataAxis },
          series: [{ data: shadows }, { data: data.data }]
        });

        LineChart.hideLoading();
        LineChart.setOption({
          xAxis: { data: data.dataAxis },
          series: [{ data: data.data }]
        });
      });
    },
    clearEcharts() {
      this.hisgChart.dispose();
      this.LineChart.dispose();
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
#main {
  display: flex;
  flex-direction: column;
  align-items: center;
  // align-content: flex-end;
  background: #fff;
  background-color: rgb(253, 253, 244);
  z-index: 10;
  #Histogram,
  #Linechart {
    width: 100%;
    height: 50%;
  }
}
</style>
