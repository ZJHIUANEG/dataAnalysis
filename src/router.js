import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

// 导入对应的路由组件
import DisplayArea from "./components/DisplayArea.vue";

var router = new VueRouter({
  routes: [
    // 配置路由规则
    { path: "/", redirect: "/displayarea" },
    { path: "/displayarea", component: DisplayArea }
  ]
});

// 将路由暴露出去
export default router;