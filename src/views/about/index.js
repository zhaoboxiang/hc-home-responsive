import Vue from "vue";
import About from "./About.vue";
import "@/assets/styles/global.scss";
import "normalize-scss/sass/normalize/_import-now.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(About)
}).$mount("#app");
