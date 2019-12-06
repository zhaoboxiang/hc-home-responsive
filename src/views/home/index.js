import Vue from "vue";
import Home from "./Home.vue";
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
    } else {
      require("@/assets/styles/global-pc.scss");
    }
  },
  render: h => h(Home)
}).$mount("#app");
