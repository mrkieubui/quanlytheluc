// PlanController.js
// Import Plan model
Plan = require('./planModel');
// Handle index actions
exports.index = function (req, res) {
    Plan.get(function (err, plans) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(plans);
    });
};
// Filter plans by unitId
exports.search = function (req, res) {
    Plan.get(function (err, plans) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        var data = [];
        plans.forEach(plan => {
            if (plan.unitId == req.params.unitId) {
                data.push(plan)
            }
        });
        res.json(data)
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var plan = new Plan();
    plan.name = req.body.name;
    plan.planNumber = req.body.planNumber;
    plan.unit = req.body.unit;
    plan.unitId = req.body.unitId;
    plan.startDate = req.body.startDate;
    // save the plan and check for errors
    plan.save(function (err) {
        if (err)
            res.json(err);
        res.json(plan);
    });
};
// Handle view plan info
exports.view = function (req, res) {
    Plan.findById(req.params.plan_id, function (err, plan) {
        if (err)
            res.send(err);
        res.json(plan);
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Plan.findById(req.params.plan_id, function (err, plan) {
        if (err)
            res.send(err);
        plan.name = req.body.name;
        plan.planNumber = req.body.planNumber;
        plan.unit = req.body.unit;
        plan.unitId = req.body.unitId;
        plan.startDate = req.body.startDate;
        // save the plan and check for errors
        plan.save(function (err) {
            if (err)
                res.json(err);
            res.json(plan);
        });
    });
};
// Handle delete plan
exports.delete = function (req, res) {
    Plan.deleteOne({
        _id: req.params.plan_id
    }, function (err, plan) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'plan deleted'
        });
    });
};