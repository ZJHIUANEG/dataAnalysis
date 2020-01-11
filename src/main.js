// 入口文件

import Vue from "vue";
// 导入路由的包
import VueRouter from "vue-router";
// 安装路由
Vue.use(VueRouter);
// 导入自己的 router.js 模块
import router from "./router";

// 导入 App 根组件
import app from "./App.vue";

var vm = new Vue({
  el: "#app",
  render: c => c(app),
  router: router
});