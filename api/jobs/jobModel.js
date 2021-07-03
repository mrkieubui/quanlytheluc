// jobModel.js
var mongoose = require('mongoose');
// Setup schema
var jobSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slash: {
        type: String,
        required: true
    }
    // order: {
    //     type: String,
    //     required: true
    // }
});
// Export Contact model
var Job = module.exports = mongoose.model('job', jobSchema);
module.exports.get = function (callback, limit) {
    Job.find(callback).limit(limit);
}