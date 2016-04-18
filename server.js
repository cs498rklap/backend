// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// routes
var homeRoute = require('./routes/home');
var jobsRoute = require('./routes/jobs');
var jobRoute = require('./routes/job');
var postsRoute = require('./routes/posts');
var postRoute = require('./routes/post');

// mongodb config
var mongoConfig = require('./models/secret');
mongoose.connect(mongoConfig.url);

// Create our Express application
var app = express();

// Use environment defined port or 4000
var port = process.env.PORT || 4000;

//Allow CORS so that backend and frontend could pe put on different servers
var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    next();
};
app.use(allowCrossDomain);

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));

// All our routes will start with /api
app.use('/api', homeRoute);
app.use('/api/jobs', jobsRoute);
app.use('/api/jobs', jobRoute);
app.use('/api/posts', postsRoute);
app.use('/api/posts', postRoute);

// Start the server
app.listen(port);
console.log('Server running on port ' + port);
