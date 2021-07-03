// rankModel.js
var mongoose = require('mongoose');
// Setup schema
var rankSchema = mongoose.Schema({
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
var rank = module.exports = mongoose.model('rank', rankSchema);
module.exports.get = function (callback, limit) {
    rank.find(callback).limit(limit);
}