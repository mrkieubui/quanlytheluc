// unitModel.js
var mongoose = require('mongoose');
// Setup schema
var unitSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
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
var unit = module.exports = mongoose.model('unit', unitSchema);
module.exports.get = function (callback, limit) {
    unit.find(callback).limit(limit);
}