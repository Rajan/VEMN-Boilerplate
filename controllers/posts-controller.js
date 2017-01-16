var express = require('express');
var Post = require('../models/post').Post;
var router = express.Router();

router.route('/')
.get((req, res) => {
  Post.find({}, (err, posts) => {
    if(!err) {
      res.send(posts);
    }
  });
})
.post((req, res) => {
  Post.create(req.body, (err, post) => {
    if(!err) {
      res.send(post);
    }
  });
});

router.route('/:id')
.get((req, res) => {
  Post.findOne({_id: req.params.id}, (err, post) => {
    if(!err) {
      res.send(post);
    }
  });
})
.put((req, res) => {
  Post.update({_id: req.params.id }, req.body, (err, post) => {
    if(!err) {
      res.send(post);
    }
  });
})
.delete((req, res) => {
  Post.remove({_id: req.params.id}, (err, post) => {
    res.send(post);
  });
});

module.exports = router;
