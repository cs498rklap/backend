var express = require('express');
var router = express.Router();

// Can just do router.post('/') or get('/')
var jobsRoute = router.route('/');

jobsRoute.get(function(req, res) {
    res.json({ message: 'Hello Jobs!' });
});

// All development above this line
module.exports = router;