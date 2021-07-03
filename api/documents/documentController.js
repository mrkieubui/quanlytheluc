// DocumentController.js
// Import Document model
Document = require('./documentModel');
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
    document.name = req.body.name;
    document.docNumber = req.body.docNumber;
    document.unit = req.body.unit;
    document.unitId = req.body.unitId;
    document.startDate = req.body.startDate;
    document.namduoi45 = req.body.namduoi45;
    document.namtren45 = req.body.namtren45;
    document.nu = req.body.nu;
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
            document.name = req.body.name;
            document.docNumber = req.body.docNumber;
            document.unit = req.body.unit;
            document.unitId = req.body.unitId;
            document.startDate = req.body.startDate;
            document.namduoi45 = req.body.namduoi45;
            document.namtren45 = req.body.namtren45;
            document.nu = req.body.nu;
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
    Document.deleteOne({
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