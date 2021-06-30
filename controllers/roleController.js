// RoleController.js
// Import Role model
Role = require('../models/roleModel');
// Handle index actions
exports.index = function (req, res) {
    Role.get(function (err, roles) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(roles);
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var role = new Role();
    role.key = req.body.key;
    role.value = req.body.value;
    role.title = req.body.title;
    role.slash = req.body.slash;
    role.parentId = req.body.parentId;
    // save the role and check for errors
    role.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json(role);
    });
};
// Handle view role info
exports.view = function (req, res) {
    Role.findById(req.params.role_id, function (err, role) {
        if (err)
            res.send(err);
        res.json(role);
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Role.findById(req.params.role_id, function (err, role) {
        if (err)
            res.send(err);
        role.key = req.body.key;
        role.value = req.body.value;
        role.title = req.body.title;
        role.slash = req.body.slash;
        role.parentId = req.body.parentId;
        // save the role and check for errors
        role.save(function (err) {
            if (err)
                res.json(err);
            res.json(role);
        });
    });
};
// Handle delete role
exports.delete = function (req, res) {
    Role.remove({
        _id: req.params.role_id
    }, function (err, role) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'role deleted'
        });
    });
};