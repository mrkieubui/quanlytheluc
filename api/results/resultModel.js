// resultModel.js
var mongoose = require('mongoose');
// Setup schema
var resultSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    planId: {
        type: String,
        required: true
    },
    documentId: {
        type: String,
        required: true
    },
    startDate: {
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
    namduoi45: [],
    namtren45: [],
    nu: []
});
// Export Contact model
var result = module.exports = mongoose.model('result', resultSchema);
module.exports.get = function (callback, limit) {
    result.find(callback).limit(limit);
}