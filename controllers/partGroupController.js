// ParticipantController.js
// Import Participant model
ParticipantGroup = require('../models/partGroupModel');
// Handle index actions
exports.index = function (req, res) {
    ParticipantGroup.get(function (err, participantGroups) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(participantGroups);
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var participantGroup = new ParticipantGroup();
    participantGroup.name = req.body.name ? req.body.name : participantGroup.name;
    participantGroup.slash = req.body.slash;
    // save the participant and check for errors
    participantGroup.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New participantGroup created!',
            data: participantGroup
        });
    });
};
// Handle view participant info
exports.view = function (req, res) {
    ParticipantGroup.findById(req.params.participantGroup_id, function (err, participantGroup) {
        if (err)
            res.send(err);
        res.json({
            message: 'ParticipantGroup details loading..',
            data: participantGroup
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
    ParticipantGroup.findById(req.params.participantGroup_id, function (err, participantGroup) {
        if (err)
            res.send(err);
        participantGroup.name = req.body.name ? req.body.name : participantGroup.name;
        participantGroup.slash = req.body.slash;
        // save the participant and check for errors
        participantGroup.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'participantGroup Info updated',
                data: participantGroup
            });
        });
    });
};
// Handle delete participant
exports.delete = function (req, res) {
    ParticipantGroup.remove({
        _id: req.params.participantGroup_id
    }, function (err, participantGroup) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'participantGroup deleted'
        });
    });
};