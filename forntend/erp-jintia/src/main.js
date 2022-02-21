import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { LayoutPlugin } from "bootstrap-vue";
Vue.use(LayoutPlugin);

import { ModalPlugin } from "bootstrap-vue";
Vue.use(ModalPlugin);
import { CardPlugin } from "bootstrap-vue";
Vue.use(CardPlugin);
import { VBScrollspyPlugin } from "bootstrap-vue";
Vue.use(VBScrollspyPlugin);
import { DropdownPlugin, TablePlugin } from "bootstrap-vue";
Vue.use(DropdownPlugin);
Vue.use(TablePlugin);
import { NavbarPlugin } from "bootstrap-vue";
Vue.use(NavbarPlugin);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(require("vue-moment"));
import { BPagination } from "bootstrap-vue";
Vue.component("b-pagination", BPagination);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

const path = require("path");
const vueSrc = "./src";
module.exports = {
  runtimeCompiler: true,
  css: {
    modules: true
  },
//   configureWebpack: {
//     resolve: {
//       alias: {
//         "@": path.resolve(__dirname, vueSrc)
//       },
//       extensions: ['.js', '.vue', '.json']
//     }
//   }
};