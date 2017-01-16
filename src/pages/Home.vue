<template>
  <div>
    <h1>Dumb Developer Blog</h1>
    <form @submit.prevent="addPost(newPost)">
      <div>
        <label>Title</label>
        <input v-model="newPost.title" type="text" placeholder="Enter post title">
      </div>
      <div>
        <label>Author</label>
        <input v-model="newPost.author" type="text" placeholder="Enter post author">
      </div>
      <div>
        <label>Body</label>
        <textarea v-model="newPost.content" col="20" row="20" placeholder="Enter post content"></textarea>
      </div>
      <div>
        <input type="submit">
      </div>
    </form>
    <ul>
      <li v-for="post in posts">
        <router-link :to="{name: 'postShow', params: {id: post._id}}"><h3>{{post.title}}</h3></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

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
    methods: mapActions([
      'addPost'
    ]),
    created() {
      this.$store.dispatch('getAllPosts');
    }
  }
</script>

<style></style>
