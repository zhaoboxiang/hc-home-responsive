import Vue from "vue";
import About from "./About.vue";
import "normalize-scss/sass/normalize/_import-now.scss";

Vue.config.productionTip = false;

new Vue({
  created: () => {
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|wOSBrowser|BrowserNG|WebOS)/i
      )
    ) {
      require("@/assets/styles/global-mobile.scss");
      console.log("about----mobile");
    } else {
      require("@/assets/styles/global-pc.scss");
      console.log("about-----pc");
    }
  },
  render: h => h(About)
}).$mount("#app");
