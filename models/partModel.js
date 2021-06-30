// partModel.js
var mongoose = require('mongoose');
// Setup schema
var participantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slash: {
        type: String,
        required: true
    },
    participantGroup: {
        type: String,
        required: true
    }
});
// Export Contact model
var Participant = module.exports = mongoose.model('participant', participantSchema);
module.exports.get = function (callback, limit) {
    Participant.find(callback).limit(limit);
}