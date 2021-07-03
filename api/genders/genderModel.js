// genderModel.js
var mongoose = require('mongoose');
// Setup schema
var genderSchema = mongoose.Schema({
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
var gender = module.exports = mongoose.model('gender', genderSchema);
module.exports.get = function (callback, limit) {
    gender.find(callback).limit(limit);
}