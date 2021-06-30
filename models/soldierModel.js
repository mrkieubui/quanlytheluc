// soldierModel.js
var mongoose = require('mongoose');
// Setup schema
var soldierSchema = mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    slash: {
        type: String,
        required: true
    },
    parentId: {
        type: String,
        required: true
    }
});
// Export Contact model
var soldier = module.exports = mongoose.model('soldier', soldierSchema);
module.exports.get = function (callback, limit) {
    soldier.find(callback).limit(limit);
}