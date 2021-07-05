// SoldierController.js
// Import Soldier model
Soldier = require('./soldierModel');
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
// Filter soldiers by unitId
exports.search = function (req, res) {
    Soldier.get(function (err, soldiers) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        var data = [];
        soldiers.forEach(soldier => {
            if (soldier.unitId == req.params.unitId) {
                data.push(soldier)
            }
        });
        res.json(data)
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var soldier = new Soldier();
    soldier.name = req.body.name;
    soldier.identitynumber = req.body.identitynumber;
    soldier.gender = req.body.gender;
    soldier.birthday = req.body.birthday;
    soldier.timestart = req.body.timestart;
    soldier.rank = req.body.rank;
    soldier.job = req.body.job;
    soldier.unit = req.body.unit;
    soldier.unitId = req.body.unitId;
    soldier.participant = req.body.participant;
    soldier.participantGroup = req.body.participantGroup;
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
        soldier.name = req.body.name;
        soldier.identitynumber = req.body.identitynumber;
        soldier.gender = req.body.gender;
        soldier.birthday = req.body.birthday;
        soldier.timestart = req.body.timestart;
        soldier.rank = req.body.rank;
        soldier.job = req.body.job;
        soldier.unit = req.body.unit;
        soldier.unitId = req.body.unitId;
        soldier.participant = req.body.participant;
        soldier.participantGroup = req.body.participantGroup;
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
    Soldier.deleteOne({
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