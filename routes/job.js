var express = require('express');
var router = express.Router();

// Can just do router.post('/') or get('/')
var jobRoute = router.route('/');

jobRoute.get(function(req, res) {
    res.json({ message: 'Hello Job!' });
});

// All development above this line
module.exports = router;