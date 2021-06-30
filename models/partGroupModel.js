// partGroupModel.js
var mongoose = require('mongoose');
// Setup schema
var participantGroupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slash: {
        type: String,
        required: true
    }
});
// Export Contact model
var ParticipantGroup = module.exports = mongoose.model('participantGroup', participantGroupSchema);
module.exports.get = function (callback, limit) {
    ParticipantGroup.find(callback).limit(limit);
}