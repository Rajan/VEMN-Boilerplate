import Vue from 'vue'
import VueRouter from 'vue-router';

// Pages - Containers
import Home from './pages/Home.vue'

Vue.use(VueRouter);

// Array of routes
const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: Home
  }
]

// Router instantiated
const router = new VueRouter({
  mode: 'history',
  routes
});

const app = new Vue({
  router
}).$mount('#app');
