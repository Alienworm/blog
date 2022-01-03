import Vue from 'vue';
import App from './App.vue';
import { initTheme, switchTheme } from "./utils/theme";

Vue.config.productionTip = false;
Vue.prototype.initTheme = initTheme;
Vue.prototype.switchTheme = switchTheme;

Vue.prototype.initTheme();

new Vue({
  render: h => h(App),
}).$mount('#app');
