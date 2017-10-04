import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';

// Register
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode: 'history'
 }); // obj javascript

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
