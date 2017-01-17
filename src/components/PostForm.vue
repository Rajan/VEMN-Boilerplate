<template>
  <form @submit.prevent="addPost(newPost)">
    <div>
      <label>Title</label>
      <input v-model="post.title" type="text" placeholder="Enter post title">
    </div>
    <div>
      <label>Author</label>
      <input v-model="post.author" type="text" placeholder="Enter post author">
    </div>
    <div>
      <label>Body</label>
      <textarea v-model="post.content" col="20" row="20" placeholder="Enter post content"></textarea>
    </div>
    <div>
      <input type="submit">
    </div>
  </form>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'postForm',
    props: {
      update: {
        type: Boolean,
        required: true
      },
      post: {
        type: Object,
        default() {
          return {
            title: '',
            author: '',
            content: ''
          }
        }
      }
    },
    methods: mapActions(['addPost']);
  }
</script>

<style></style>
