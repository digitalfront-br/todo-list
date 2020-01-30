import Vue from "vue";
import App from "./App.vue";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "./registerServiceWorker";
import store from "./store";
import "@/sass/main.sass";

UIkit.use(Icons);

Vue.config.productionTip = false;

new Vue({
  UIkit,
  store,
  render: h => h(App)
}).$mount("#app");
