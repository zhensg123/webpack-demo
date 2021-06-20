import Vue from "vue";
import App from "./App.vue";
import { lyLink } from '../packages';
Vue.use(lyLink)
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
