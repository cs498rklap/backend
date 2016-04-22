var express = require('express');
var router = express.Router();
var Job = require('../models/job');

// Can just do router.post('/') or get('/')
var jobRoute = router.route('/:id');

jobRoute.get(function(req, res) {
  Job.findById(req.params.id, function(err, job) {
    if(err || !job) {
      res.status(404).send({ message: 'Job not found', data: []});
    }
    else {
      res.status(200).send({ message: 'Job found', data: job});
    }
  });
});

jobRoute.put(function(req, res) {
	Job.findById(req.params.id, function(err, job) {
		if(err || !job) {
      res.status(404).send({ message: 'Job not found', data: []});
    }
    else {
      job.title = req.body.title;
      job.company = req.body.company;
      job.city = req.body.city;
      job.state = req.body.state;
      job.link = req.body.link;
      job.deadline = new Date(req.body.deadline);
      job.description = req.body.description;
      job.tags = req.body.tags;
      job.save(function(err) {
        if(err) {
          res.status(404).send({ message: 'Job could not be updated', data: []});
        }
        else {
          res.status(201).send({ message: 'Job updated', data: job});
        }
      });
    }
	});
});

jobRoute.delete(function(req, res) {
	Job.remove({_id: req.params.id}, function(err) {
		if(err) {
      res.status(404).send({ message: 'Job not found', data: []});
    }
    else {
      res.status(200).send({ message: 'Deleted job', data: []});
    }
	});
});

// All development above this line
module.exports = router;
