// planModel.js
var mongoose = require('mongoose');
// Setup schema
var planSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    planNumber: {
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
    startDate: {
        type: String,
        required: true
    }
});
// Export Contact model
var plan = module.exports = mongoose.model('plan', planSchema);
module.exports.get = function (callback, limit) {
    plan.find(callback).limit(limit);
}