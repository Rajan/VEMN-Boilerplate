<template>
  <ul>
    <li v-for="post in posts">
      <router-link :to="{name: 'postShow', params: {id: post._id}}"><h3>{{post.title}}</h3></router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'postList',
    props: ['posts']
  }
</script>

<style></style>
