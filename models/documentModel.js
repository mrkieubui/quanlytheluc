// documentModel.js
var mongoose = require('mongoose');
// Setup schema
var documentSchema = mongoose.Schema({
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
var document = module.exports = mongoose.model('document', documentSchema);
module.exports.get = function (callback, limit) {
    document.find(callback).limit(limit);
}