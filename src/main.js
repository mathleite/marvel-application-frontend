import App from './App.vue'
import Vue from 'vue'
import Vuetify from './plugins/vuetify';
import Router from './router';

Vue.config.productionTip = false;

new Vue({
  Vuetify,
  Router,
  render: h => h(App)
}).$mount('#app');
