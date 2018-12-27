import Vue from 'vue'
import App from './App.vue'

import Blink from 'vue-blink'
require('vue2-animate/dist/vue2-animate.min.css')

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import {routes} from './routes.js'

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);


const rutas = new VueRouter({
    routes: routes
});

import { Carousel, Slide } from 'vue-carousel';

new Vue({
  el: '#app',
  router: rutas,
  components: {
    Carousel,
    Slide,
    Blink

  },
  render: h => h(App)
})
