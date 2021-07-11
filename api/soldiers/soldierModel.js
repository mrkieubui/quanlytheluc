// soldierModel.js
var mongoose = require('mongoose');
// Setup schema
var soldierSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    identitynumber: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    timestart: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    unitId: {
        type: String,
        required: true
    },
    participant: {
        type: String,
        required: true
    },
    participantId: {
        type: String,
        required: true
    },
    participantGroup: {
        type: String,
        required: true
    }
});
// Export Contact model
var Soldier = module.exports = mongoose.model('soldier', soldierSchema);
module.exports.get = function (callback, limit) {
    Soldier.find(callback).limit(limit);
}