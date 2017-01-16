<template>
  <div>
    <h1>{{post.title}}</h1>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'postShow',
    computed: mapGetters({
      post: 'currentPost'
    }),
    created() {
      this.$store.dispatch('getSinglePost', this.$route.params.id);
    }
  }
</script>

<style></style>
