import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "zico/css/zico.min.css";

Vue.config.productionTip = false;

export const serverBus = new Vue();
Vue.prototype.$bus = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
