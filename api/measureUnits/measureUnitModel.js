// measureUnitModel.js
var mongoose = require('mongoose');
// Setup schema
var measureUnitSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slash: {
        type: String,
        required: true
    }
});
// Export Contact model
var MeasureUnit = module.exports = mongoose.model('measureUnit', measureUnitSchema);
module.exports.get = function (callback, limit) {
    MeasureUnit.find(callback).limit(limit);
}