// roleModel.js
var mongoose = require('mongoose');
// Setup schema
var roleSchema = mongoose.Schema({
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
var role = module.exports = mongoose.model('role', roleSchema);
module.exports.get = function (callback, limit) {
    role.find(callback).limit(limit);
}