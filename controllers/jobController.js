// JobController.js
// Import Job model
Job = require('../models/jobModel');
// Handle index actions
exports.index = function (req, res) {
    Job.get(function (err, jobs) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(jobs);
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var job = new Job();
    job.key = req.body.key;
    job.value = req.body.value;
    job.title = req.body.title;
    job.slash = req.body.slash;
    job.parentId = req.body.parentId;
    // save the job and check for errors
    job.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json(job);
    });
};
// Handle view job info
exports.view = function (req, res) {
    Job.findById(req.params.job_id, function (err, job) {
        if (err)
            res.send(err);
        res.json(job);
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Job.findById(req.params.job_id, function (err, job) {
        if (err)
            res.send(err);
        job.key = req.body.key;
        job.value = req.body.value;
        job.title = req.body.title;
        job.slash = req.body.slash;
        job.parentId = req.body.parentId;
        // save the job and check for errors
        job.save(function (err) {
            if (err)
                res.json(err);
            res.json(job);
        });
    });
};
// Handle delete job
exports.delete = function (req, res) {
    Job.remove({
        _id: req.params.job_id
    }, function (err, job) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'job deleted'
        });
    });
};