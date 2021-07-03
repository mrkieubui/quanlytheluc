// AccountController.js
// Import Account model
Account = require('./accountModel');
// Handle index actions
exports.index = function (req, res) {
    Account.get(function (err, accounts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(accounts);
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var account = new Account();
    account.key = req.body.key;
    account.value = req.body.value;
    account.title = req.body.title;
    account.slash = req.body.slash;
    account.parentId = req.body.parentId;
    // save the account and check for errors
    account.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json(account);
    });
};
// Handle view account info
exports.view = function (req, res) {
    Account.findById(req.params.account_id, function (err, account) {
        if (err)
            res.send(err);
        res.json(account);
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Account.findById(req.params.account_id, function (err, account) {
        if (err)
            res.send(err);
        account.key = req.body.key;
        account.value = req.body.value;
        account.title = req.body.title;
        account.slash = req.body.slash;
        account.parentId = req.body.parentId;
        // save the account and check for errors
        account.save(function (err) {
            if (err)
                res.json(err);
            res.json(account);
        });
    });
};
// Handle delete account
exports.delete = function (req, res) {
    Account.deleteOne({
        _id: req.params.account_id
    }, function (err, account) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'account deleted'
        });
    });
};