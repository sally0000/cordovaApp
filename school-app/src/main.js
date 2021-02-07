import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";  
// 引入 vant 配置 公共文件
import '@/plugins/vant'
import "lib-flexible";

Vue.config.productionTip = false;  

new Vue({
  router,
  store, 
  render: h => h(App)
}).$mount("#app");
