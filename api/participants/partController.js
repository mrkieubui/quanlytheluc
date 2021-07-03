// ParticipantController.js
// Import Participant model
Participant = require('./partModel');
// Handle index actions
exports.index = function (req, res) {
    Participant.get(function (err, participants) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(participants);
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var participant = new Participant();
    participant.name = req.body.name ? req.body.name : participant.name;
    participant.slash = req.body.slash;
    participant.participantGroup = req.body.participantGroup;
    // save the participant and check for errors
    participant.save(function (err) {
        if (err)
            res.json(err);
        res.json(participant);
    });
};
// Handle view participant info
exports.view = function (req, res) {
    Participant.findById(req.params.participant_id, function (err, participant) {
        if (err)
            res.send(err);
        res.json(participant);
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Participant.findById(req.params.participant_id, function (err, participant) {
        if (err)
            res.send(err);
        participant.name = req.body.name ? req.body.name : participant.name;
        participant.slash = req.body.slash;
        participant.participantGroup = req.body.participantGroup;
        // save the participant and check for errors
        participant.save(function (err) {
            if (err)
                res.json(err);
            res.json(participant);
        });
    });
};
// Handle delete participant
exports.delete = function (req, res) {
    Participant.deleteOne({
        _id: req.params.participant_id
    }, function (err, participant) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'participant deleted'
        });
    });
};