// documentModel.js
var mongoose = require('mongoose');
// Setup schema
var documentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    docNumber: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    unitId: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    namduoi45: [],
    namtren45: [],
    nu: []
});
// Export Contact model
var document = module.exports = mongoose.model('document', documentSchema);
module.exports.get = function (callback, limit) {
    document.find(callback).limit(limit);
}