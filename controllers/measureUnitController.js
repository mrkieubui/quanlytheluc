//MeasureUnitController.js
// Import MeasureUnit model
MeasureUnit = require('../models/measureUnitModel');
// Handle index actions
exports.index = function (req, res) {
    MeasureUnit.get(function (err, measureUnits) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(measureUnits);
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var measureUnit = new MeasureUnit();
    measureUnit.key = req.body.key;
    measureUnit.value = req.body.value;
    measureUnit.title = req.body.title;
    measureUnit.slash = req.body.slash;
    measureUnit.parentId = req.body.parentId;
    // save the measureUnit and check for errors
    measureUnit.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json(measureUnit);
    });
};
// Handle view measureUnit info
exports.view = function (req, res) {
    MeasureUnit.findById(req.params.measureUnit_id, function (err, measureUnit) {
        if (err)
            res.send(err);
        res.json(measureUnit);
    });
};
// Handle update contact info
exports.update = function (req, res) {
    MeasureUnit.findById(req.params.measureUnit_id, function (err, measureUnit) {
        if (err)
            res.send(err);
        measureUnit.key = req.body.key;
        measureUnit.value = req.body.value;
        measureUnit.title = req.body.title;
        measureUnit.slash = req.body.slash;
        measureUnit.parentId = req.body.parentId;
        // save the measureUnit and check for errors
        measureUnit.save(function (err) {
            if (err)
                res.json(err);
            res.json(measureUnit);
        });
    });
};
// Handle delete measureUnit
exports.delete = function (req, res) {
    MeasureUnit.remove({
        _id: req.params.measureUnit_id
    }, function (err, measureUnit) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'measureUnit deleted'
        });
    });
};