// ContentGroupController.js
// Import ContentGroup model
ContentGroup = require('./contentGroupModel');
// Handle index actions
exports.index = function (req, res) {
    ContentGroup.get(function (err, contentGroups) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(contentGroups);
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var contentGroup = new ContentGroup();
    contentGroup.key = req.body.key;
    contentGroup.value = req.body.value;
    contentGroup.title = req.body.title;
    contentGroup.slash = req.body.slash;
    contentGroup.parentId = req.body.parentId;
    // save the contentGroup and check for errors
    contentGroup.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json(contentGroup);
    });
};
// Handle view contentGroup info
exports.view = function (req, res) {
    ContentGroup.findById(req.params.contentGroup_id, function (err, contentGroup) {
        if (err)
            res.send(err);
        res.json(contentGroup);
    });
};
// Handle update contact info
exports.update = function (req, res) {
    ContentGroup.findById(req.params.contentGroup_id, function (err, contentGroup) {
        if (err)
            res.send(err);
        contentGroup.key = req.body.key;
        contentGroup.value = req.body.value;
        contentGroup.title = req.body.title;
        contentGroup.slash = req.body.slash;
        contentGroup.parentId = req.body.parentId;
        // save the contentGroup and check for errors
        contentGroup.save(function (err) {
            if (err)
                res.json(err);
            res.json(contentGroup);
        });
    });
};
// Handle delete contentGroup
exports.delete = function (req, res) {
    ContentGroup.deleteOne({
        _id: req.params.contentGroup_id
    }, function (err, contentGroup) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'contentGroup deleted'
        });
    });
};