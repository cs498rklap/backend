var express = require('express');
var router = express.Router();

var homeRoute = router.route('/');

homeRoute.get(function(req, res) {
    res.json({ message: 'Hello World!' });
});

module.exports = router;