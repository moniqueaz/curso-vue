import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Tranforms';
import VeeValidate from 'vee-validate';
import msg from './pt_BR';

// Register
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';

Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode: 'history'
 }); // obj javascript


 Vue.use(VeeValidate, {
  locale: 'pt_BR'
 });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
