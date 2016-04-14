var express = require('express');
var router = express.Router();

// Can just do router.post('/') or get('/')
var postsRoute = router.route('/');

postsRoute.get(function(req, res) {
    res.json({ message: 'Hello Posts!' });
});

// All development above this line
module.exports = router;