// resultModel.js
var mongoose = require('mongoose');
// Setup schema
var resultSchema = mongoose.Schema({
    document: {
        type: String,
        required: true
    },
    documentNumber: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    planNumber: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    unitId: {
        type: String,
        required: true
    }
});
// Export Contact model
var result = module.exports = mongoose.model('result', resultSchema);
module.exports.get = function (callback, limit) {
    result.find(callback).limit(limit);
}