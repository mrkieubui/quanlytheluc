// UnitController.js
// Import Unit model
Unit = require('../models/unitModel');
// Handle index actions
exports.index = function (req, res) {
    Unit.get(function (err, units) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(units);
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var unit = new Unit();
    unit._id = req.body._id;
    unit.key = req.body.key;
    unit.value = req.body.value;
    unit.title = req.body.title;
    unit.slash = req.body.slash;
    unit.parentId = req.body.parentId;
    // save the unit and check for errors
    unit.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json(unit);
    });
};
// Handle view unit info
exports.view = function (req, res) {
    Unit.findById(req.params.unit_id, function (err, unit) {
        if (err)
            res.send(err);
        res.json(unit);
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Unit.findById(req.params.unit_id, function (err, unit) {
        if (err)
            res.send(err);
        unit._id = req.body._id;
        unit.key = req.body.key;
        unit.value = req.body.value;
        unit.title = req.body.title;
        unit.slash = req.body.slash;
        unit.parentId = req.body.parentId;
        // save the unit and check for errors
        unit.save(function (err) {
            if (err)
                res.json(err);
            res.json(unit);
        });
    });
};
// Handle delete unit
exports.delete = function (req, res) {
    Unit.remove({
        _id: req.params.unit_id
    }, function (err, unit) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'unit deleted'
        });
    });
};