var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var User = require('../models/user');

var secret = process.env.JWT_SECRET || 'supersecretcode';

router.route('/signup')
.post(function(req, res) {
  // find the user first in case the email already exists
  User.findOne({ email: req.body.email }, function(err, user) {
    if (user) return res.status(400).send({ message: 'Email already exists' });

    User.create(req.body, function(err, user) {
      if (err) return res.status(500).send(err);

      var token = jwt.sign(user.toJSON(), secret);

      return res.send({ user: user, token: token });
    });
  });
});

router.route('/login')
.post(function(req, res) {
  User.findOne({ email: req.body.email }, function(err, user) {
    // return 401 if error or no user
    if (err || !user) return res.status(401).send({ message: 'User not found' });

    // attempt to authenticate a user
    var isAuthenticated = user.authenticated(req.body.password);
    // return 401 if invalid password or error
    if (err || !isAuthenticated) return res.status(401).send({ message: 'User not authenticated' });

    // sign the JWT with the user payload and secret, then return
    var token = jwt.sign(user.toJSON(), secret);

    return res.send({ user: user, token: token });
  });
});

module.exports = router;
