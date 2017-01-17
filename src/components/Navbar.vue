<template>
  <nav>
    <a href="#menu" id="menuLink" class="menu-link" v-bind:class="{active: openMenu}" @click.prevent="toggleMenu()">
      <span></span>
    </a>

    <div id="menu" v-bind:class="{active: openMenu}">
      <div class="pure-menu">
        <a class="pure-menu-heading" href="#">Company</a>
        <ul class="pure-menu-list">
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">Home</a><li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">About</a><li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">Contact</a><li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  //import '../assets/js/ui.js';
  export default {
    name: 'navbar',
    data() {
      return {
        openMenu: false
      }
    },
    methods: {
      toggleMenu() {
        this.openMenu = !this.openMenu;
        // Hacky dom manipulation for menu
        document.getElementById('layout').classList.toggle('active');
      }
    }
  }
</script>

<style>
  @import '../assets/css/side-menu.css';
</style>
