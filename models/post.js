var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    username: {type: String, required: true},
    text: {type: String, required: true},
    timestamp: {type: Date, default: Date.now}
});

var Comment = mongoose.model('Comment', CommentSchema);

var PostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    timestamp: {type: Date, default: Date.now},
    tags: {type: [String]},
    content: {type: String, required: true},
    comments: {type: [Comment]}
});

module.exports = mongoose.model('Post', PostSchema);