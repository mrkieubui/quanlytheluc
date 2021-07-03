// GenderController.js
// Import Gender model
Gender = require('./genderModel');
// Handle index actions
exports.index = function (req, res) {
    Gender.get(function (err, genders) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(genders);
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var gender = new Gender();
    gender.key = req.body.key;
    gender.value = req.body.value;
    gender.title = req.body.title;
    gender.slash = req.body.slash;
    gender.parentId = req.body.parentId;
    // save the gender and check for errors
    gender.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json(gender);
    });
};
// Handle view gender info
exports.view = function (req, res) {
    Gender.findById(req.params.gender_id, function (err, gender) {
        if (err)
            res.send(err);
        res.json(gender);
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Gender.findById(req.params.gender_id, function (err, gender) {
        if (err)
            res.send(err);
        gender.key = req.body.key;
        gender.value = req.body.value;
        gender.title = req.body.title;
        gender.slash = req.body.slash;
        gender.parentId = req.body.parentId;
        // save the gender and check for errors
        gender.save(function (err) {
            if (err)
                res.json(err);
            res.json(gender);
        });
    });
};
// Handle delete gender
exports.delete = function (req, res) {
    Gender.deleteOne({
        _id: req.params.gender_id
    }, function (err, gender) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'gender deleted'
        });
    });
};