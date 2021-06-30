// DocumentController.js
// Import Document model
Document = require('../models/documentModel');
// Handle index actions
exports.index = function (req, res) {
    Document.get(function (err, documents) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(documents);
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var document = new Document();
    document.key = req.body.key;
    document.value = req.body.value;
    document.title = req.body.title;
    document.slash = req.body.slash;
    document.parentId = req.body.parentId;
    // save the document and check for errors
    document.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json(document);
    });
};
// Handle view document info
exports.view = function (req, res) {
    Document.findById(req.params.document_id, function (err, document) {
        if (err)
            res.send(err);
        res.json(document);
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Document.findById(req.params.document_id, function (err, document) {
        if (err)
            res.send(err);
        document.key = req.body.key;
        document.value = req.body.value;
        document.title = req.body.title;
        document.slash = req.body.slash;
        document.parentId = req.body.parentId;
        // save the document and check for errors
        document.save(function (err) {
            if (err)
                res.json(err);
            res.json(document);
        });
    });
};
// Handle delete document
exports.delete = function (req, res) {
    Document.remove({
        _id: req.params.document_id
    }, function (err, document) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'document deleted'
        });
    });
};