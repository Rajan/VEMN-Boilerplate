var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  content: String,
  author: String,
  replies: [this]
});

var postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  createdAt: Date,
  updatedAt: Date,
  comments: [commentSchema]
});

module.exports = {
  commentSchema,
  postSchema,
  Post: mongoose.model('Post', postSchema)
}
