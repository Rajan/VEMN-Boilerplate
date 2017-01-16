export default {
  getPosts() {
    return fetch('/api/posts').then(response => { return response.json() });
  },

  getSinglePost(postId) {
    return fetch(`/api/posts/${postId}`).then(response => {
      return response.json();
    });
  },

  addPost(newPostData) {
    return fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPostData)
    }).then(response => { return response.json() });
  },

  updatePost(updatedData) {
    return fetch(`/api/posts/${updatedData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    }).then(response => { return response.json() });
  },

  deletePost(postId) {
    return fetch(`/api/posts/${postId}`, {
      method: 'DELETE'
    }).then(response => { return response.json() });
  }
}
