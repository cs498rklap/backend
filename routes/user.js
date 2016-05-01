var express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require('../models/user');

// Can just do router.post('/') or get('/')
router.post('/register', function(req, res) {
  User.register(new User({ username: req.body.username, password: req.body.password, name: req.body.name, email: req.body.email }),
    req.body.password, function(err, account) {
    if (err) {
      return res.status(500).json({
        err: err
      });
    }
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({
        status: 'Registration successful!'
      });
    });
  });
});

router.post('/login', function(req, res, next) {
  // req.withCredentials = true;
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      console.log(req.isAuthenticated());
      res.status(200).json({
        status: 'Login successful!'
      });
    });
  })(req, res, next);
});

router.get('/logout', function(req, res) {
  req.logOut();
  req.session.destroy(function (err) {
    res.status(200).json({
      status: 'Bye!'
    });
  });
  // res.clearCookie('connect.sid', {path: '/'});

});

router.get('/status', function(req, res) {
  //console.log(req);
  console.log(req.isAuthenticated());
  if (!req.isAuthenticated()) {
    return res.status(200).json({
      status: false
    });
  }
  res.status(200).json({
    status: true
  });
});

// All development above this line
module.exports = router;
