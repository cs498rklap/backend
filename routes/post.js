var express = require('express');
var router = express.Router();

// Can just do router.post('/') or get('/')
var postRoute = router.route('/:id');

postRoute.get(function(req, res) {
    res.json({ message: 'Hello Post!' });
});

// All development above this line
module.exports = router;