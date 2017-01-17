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
import Admin from './pages/Admin.vue';

// Components
import Navbar from './components/Navbar.vue';

// Map of Components
const components = {
  Navbar
}

// Array of routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'postShow',
    component: PostShow
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  }
]

// Router instantiated
const router = new VueRouter({
  mode: 'history',
  routes
});

const app = new Vue({
  store,
  router,
  components
}).$mount('#app');
