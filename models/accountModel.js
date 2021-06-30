// accountModel.js
var mongoose = require('mongoose');
// Setup schema
var accountSchema = mongoose.Schema({
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
var account = module.exports = mongoose.model('account', accountSchema);
module.exports.get = function (callback, limit) {
    account.find(callback).limit(limit);
}