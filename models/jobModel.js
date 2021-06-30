// jobModel.js
var mongoose = require('mongoose');
// Setup schema
var jobSchema = mongoose.Schema({
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
var job = module.exports = mongoose.model('job', jobSchema);
module.exports.get = function (callback, limit) {
    job.find(callback).limit(limit);
}