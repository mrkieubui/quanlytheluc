// ResultController.js
// Import Result model
Result = require('./resultModel');
// Handle index actions
exports.index = function (req, res) {
    Result.get(function (err, results) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(results);
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var result = new Result();
    result.name = req.body.name;
    result.planId = req.body.planId;
    result.documentId = req.body.documentId;
    result.startDate = req.body.startDate;
    result.unit = req.body.unit;
    result.unitId = req.body.unitId;
    result.namduoi45 = req.body.namduoi45;
    result.namtren45 = req.body.namtren45;
    result.nu = req.body.nu;
    // save the result and check for errors
    result.save(function (err) {
        if (err)
            res.json(err);
        res.json(result);
    });
};
// Handle view result info
exports.view = function (req, res) {
    Result.findById(req.params.result_id, function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Result.findById(req.params.result_id, function (err, result) {
        if (err)
            res.send(err);
        result.name = req.body.name;
        result.planId = req.body.planId;
        result.documentId = req.body.documentId;
        result.startDate = req.body.startDate;
        result.unit = req.body.unit;
        result.unitId = req.body.unitId;
        result.namduoi45 = req.body.namduoi45;
        result.namtren45 = req.body.namtren45;
        result.nu = req.body.nu;
        // save the result and check for errors
        result.save(function (err) {
            if (err)
                res.json(err);
            res.json(result);
        });
    });
};
// Handle delete result
exports.delete = function (req, res) {
    Result.deleteOne({
        _id: req.params.result_id
    }, function (err, result) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'result deleted'
        });
    });
};