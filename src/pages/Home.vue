<template>
  <section class="pure-g">
    <div class="pure-u-sm-1-1">
      <div class="header">
        <h1>Dumb Developer Blog</h1>
      </div>
      <div class="content">
        <post-list :posts="posts"></post-list>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import PostList from '../components/PostList.vue';

  export default {
    name: 'homePage',
    computed: mapGetters({
      posts: 'allPosts'
    }),
    data() {
      return {
        newPost: {
          title: '',
          author: '',
          content: ''
        }
      }
    },
    components: {
      PostList
    },
    created() {
      this.$store.dispatch('getAllPosts');
    }
  }
</script>

<style></style>
