import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './plugins/axios';
import './plugins/fontawesome';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

import registryBaseToast from './components/base_toast/index';
import { initTheme, switchTheme } from "./utils/theme";

Vue.use(mavonEditor);
Vue.use(registryBaseToast);

Vue.config.productionTip = false;
Vue.prototype.initTheme = initTheme;
Vue.prototype.switchTheme = switchTheme;

Vue.prototype.initTheme();


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
