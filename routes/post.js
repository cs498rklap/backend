var express = require('express');
var router = express.Router();

var Post = require('../models/post');

// Can just do router.post('/') or get('/')
var postRoute = router.route('/:id');

postRoute.get(function(req, res) {
    Post.findById(req.params.id, function(err, data) {
        if (err) {
            res.status(500);
            res.json({message: 'Unable to retrieve post with specified id', data: err});
        } else {
            if (data) {
                res.status(200);
                res.json({message: 'Post retrieved successfully', data: data});
            } else {
                res.status(404);
                res.json({message: 'Post not found'});
            }
        }
    });
    //res.json({ message: 'Hello Post!' });
});

postRoute.put(function(req, res) {
    var setAttributes = {
        $set: {}
    };

    // set the params here

    Post.findByIdAndUpdate(req.params.id, setAttributes, {new: true}, function(err, data) {
        if (err) {
            res.status(500);
            res.json({message: 'Unable to update post', data: err});
        } else if (data) {
            res.status(200);
            res.json({message: 'Updated post successfully', data: data});
        } else {
            res.status(404);
            res.json({message: 'Unable to find post with id to update', data: data});
        }
    });
});

postRoute.delete(function(req, res) {
    Post.findByIdAndRemove(req.params.id, function(err, data) {
        if (err) {
            res.status(500);
            res.json({message: 'Unable to delete post with specified id', data: err});
        } else if (data) {
            res.status(200);
            res.json({message: 'User deleted successfully'});
        } else {
            res.status(404);
            res.json({message: 'Unable to find post to delete'});
        }
    });
});

// All development above this line
module.exports = router;