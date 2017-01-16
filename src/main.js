import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(Vuex);

// Stores
import store from './stores';

// Pages - Containers
import Home from './pages/Home.vue';
import PostShow from './pages/PostShow.vue';

// Array of routes
const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'postShow',
    component: PostShow
  }
]

// Router instantiated
const router = new VueRouter({
  mode: 'history',
  routes
});

const app = new Vue({
  store,
  router
}).$mount('#app');
