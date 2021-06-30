// SoldierController.js
// Import Soldier model
Soldier = require('../models/soldierModel');
// Handle index actions
exports.index = function (req, res) {
    Soldier.get(function (err, soldiers) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(soldiers);
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var soldier = new Soldier();
    soldier.key = req.body.key;
    soldier.value = req.body.value;
    soldier.title = req.body.title;
    soldier.slash = req.body.slash;
    soldier.parentId = req.body.parentId;
    // save the soldier and check for errors
    soldier.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json(soldier);
    });
};
// Handle view soldier info
exports.view = function (req, res) {
    Soldier.findById(req.params.soldier_id, function (err, soldier) {
        if (err)
            res.send(err);
        res.json(soldier);
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Soldier.findById(req.params.soldier_id, function (err, soldier) {
        if (err)
            res.send(err);
        soldier.key = req.body.key;
        soldier.value = req.body.value;
        soldier.title = req.body.title;
        soldier.slash = req.body.slash;
        soldier.parentId = req.body.parentId;
        // save the soldier and check for errors
        soldier.save(function (err) {
            if (err)
                res.json(err);
            res.json(soldier);
        });
    });
};
// Handle delete soldier
exports.delete = function (req, res) {
    Soldier.remove({
        _id: req.params.soldier_id
    }, function (err, soldier) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'soldier deleted'
        });
    });
};