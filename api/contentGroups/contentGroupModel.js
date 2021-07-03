// contentGroupModel.js
var mongoose = require('mongoose');
// Setup schema
var contentGroupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
// Export Contact model
var ContentGroup = module.exports = mongoose.model('contentGroup', contentGroupSchema);
module.exports.get = function (callback, limit) {
    ContentGroup.find(callback).limit(limit);
}