// measureUnitModel.js
var mongoose = require('mongoose');
// Setup schema
var measureUnitSchema = mongoose.Schema({
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
var measureUnit = module.exports = mongoose.model('measureUnit', measureUnitSchema);
module.exports.get = function (callback, limit) {
    measureUnit.find(callback).limit(limit);
}