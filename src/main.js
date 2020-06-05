import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router';
import './assets/style.css'
import axios from 'axios'

Vue.use(VueRouter);

axios.defaults.baseURL = "http://lab.osyduck.me:1337"
const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = token ? token : '';
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
