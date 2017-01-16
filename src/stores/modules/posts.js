import postApi from '../../api/posts-api';
import * as types from '../mutation-types';

const state = {
  allPosts: [],
  currentPost: {}
}

const getters = {
  allPosts: state => state.allPosts,
  currentPost: state => state.currentPost
}

const actions = {
  getAllPosts({ commit }) {
    postApi.getPosts().then(posts => {
      commit(types.RECEIVE_POSTS, { posts });
    });
  },

  getSinglePost({ commit }, postId) {
    postApi.getSinglePost(postId).then(post => {
      commit(types.CHANGE_CURRENT_POST, { post });
    });
  },

  addPost({ commit }, newPost) {
    newPost.createdAt = new Date();
    newPost.updatedAt = new Date();
    newPost.comments = [];
    postApi.addPost(newPost).then(post => {
      commit(types.ADD_POST, { post })
    });
  },

  updatePost({ commit }, updatedPost) {
    updatedPost.updatedAt = new Date();
    postApi.updatePost(updatedPost).then(post => {
      commit(types.UPDATE_POST, { post });
    });
  },

  deletePost({ commit }, postId) {
    postApi.deletePost(postId).then(post => {
      commit(types.DELETE_POST, { post });
    });
  },

  changeCurrentPost({ commit }, postId) {
    commit(types.CHANGE_CURRENT_POST, postId)
  }
}

const mutations = {
  [types.RECEIVE_POSTS](state, { posts }) {
    state.allPosts = posts;
  },
  [types.ADD_POST](state, { post }) {
    state.allPosts.push(post);
  },
  [types.UPDATE_POST](state, { post }) {
    let postIndex = state.allPosts.findIndex(localPost => { return localPost._id === post.id });
    state.allPosts[postIndex] = post;
  },
  [types.DELETE_POST](state, { post }) {
    let postIndex = state.allPosts.findIndex(localPost => { return localPost._id === post.id });
    delete state.allPosts[postIndex];
  },
  [types.CHANGE_CURRENT_POST](state, { post }) {
    state.currentPost = post;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
