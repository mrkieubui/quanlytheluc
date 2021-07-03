//MeasureUnitController.js
// Import MeasureUnit model
MeasureUnit = require('./measureUnitModel');
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
    measureUnit.name = req.body.name;
    measureUnit.slash = req.body.slash;
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
        measureUnit.name = req.body.name;
        measureUnit.slash = req.body.slash;
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
    MeasureUnit.deleteOne({
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