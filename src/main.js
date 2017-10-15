import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Tranforms';
import VeeValidate, { Validator } from 'vee-validate';
import msg from './pt_BR';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/teste.css';
import './assets/js/teste.js';

import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';

// Register
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';

Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode: 'history'
 }); // obj javascript

 Validator.addLocale(msg);
 Vue.use(VeeValidate, {
  locale: 'pt_BR'
 });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
