// RankController.js
// Import Rank model
Rank = require('./rankModel');
// Handle index actions
exports.index = function (req, res) {
    Rank.get(function (err, ranks) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(ranks);
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var rank = new Rank();
    rank.key = req.body.key;
    rank.value = req.body.value;
    rank.title = req.body.title;
    rank.slash = req.body.slash;
    rank.parentId = req.body.parentId;
    // save the rank and check for errors
    rank.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json(rank);
    });
};
// Handle view rank info
exports.view = function (req, res) {
    Rank.findById(req.params.rank_id, function (err, rank) {
        if (err)
            res.send(err);
        res.json(rank);
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Rank.findById(req.params.rank_id, function (err, rank) {
        if (err)
            res.send(err);
        rank.key = req.body.key;
        rank.value = req.body.value;
        rank.title = req.body.title;
        rank.slash = req.body.slash;
        rank.parentId = req.body.parentId;
        // save the rank and check for errors
        rank.save(function (err) {
            if (err)
                res.json(err);
            res.json(rank);
        });
    });
};
// Handle delete rank
exports.delete = function (req, res) {
    Rank.deleteOne({
        _id: req.params.rank_id
    }, function (err, rank) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'rank deleted'
        });
    });
};