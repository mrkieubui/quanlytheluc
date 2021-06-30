// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.send(
        `
        <div class="content-wrapper">
            <div class="content">
                <div class="card">
                    <div class="card-header card-header-content text-center d-flex justify-content-between align-items-center">
                        <h5 class="big-title m-auto text-uppercase">List API</h5>
                    </div>
                    <div class="card-body card-body-content table-content custom-body-70">
                        <ul class="list-group">
                            <li class="list-group-item"><a href="/api/participantGroups">Nhóm đối tượng </a></li>
                            <li class="list-group-item"><a href="/api/participants">Đối tượng </a></li>
                            <li class="list-group-item"><a href="/api/ranks">Cấp bậc </a></li>
                            <li class="list-group-item"><a href="/api/jobs">Chức vụ </a></li>
                            <li class="list-group-item"><a href="/api/units">Đơn vị </a></li>
                            <li class="list-group-item"><a href="/api/soldiers">Quân nhân </a></li>
                            <li class="list-group-item"><a href="/api/accounts">Tài khoản </a></li>
                            <li class="list-group-item"><a href="/api/measureUnits">Đơn vị tính </a></li>
                            <li class="list-group-item"><a href="/api/documents">Thông tư </a></li>
                            <li class="list-group-item"><a href="/api/plans">Kế hoạch </a></li>
                            <li class="list-group-item"><a href="/api/results">Kết quả </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`
    );
});

// Doi tuong
var participantController = require('./controllers/partController');
// participant routes
router.route('/participants')
    .get(participantController.index)
    .post(participantController.new);
router.route('/participants/:participant_id')
    .get(participantController.view)
    .patch(participantController.update)
    .put(participantController.update)
    .delete(participantController.delete);

// Nhom doi tuong
var participantGroupController = require('./controllers/partGroupController');
// participant routes
router.route('/participantGroups')
    .get(participantGroupController.index)
    .post(participantGroupController.new);
router.route('/participantGroups/:participantGroup_id')
    .get(participantGroupController.view)
    .patch(participantGroupController.update)
    .put(participantGroupController.update)
    .delete(participantGroupController.delete);

// Don vi
var unitController = require('./controllers/unitController');
// unit routes
router.route('/units')
    .get(unitController.index)
    .post(unitController.new);
router.route('/units/:unit_id')
    .get(unitController.view)
    .patch(unitController.update)
    .put(unitController.update)
    .delete(unitController.delete);

// Cap bac
var rankController = require('./controllers/rankController');
// rank routes
router.route('/ranks')
    .get(rankController.index)
    .post(rankController.new);
router.route('/ranks/:rank_id')
    .get(rankController.view)
    .patch(rankController.update)
    .put(rankController.update)
    .delete(rankController.delete);

// Chuc vu
var jobController = require('./controllers/jobController');
// job routes
router.route('/jobs')
    .get(jobController.index)
    .post(jobController.new);
router.route('/jobs/:job_id')
    .get(jobController.view)
    .patch(jobController.update)
    .put(jobController.update)
    .delete(jobController.delete);

// Quyen
var roleController = require('./controllers/roleController');
// role routes
router.route('/roles')
    .get(roleController.index)
    .post(roleController.new);
router.route('/roles/:role_id')
    .get(roleController.view)
    .patch(roleController.update)
    .put(roleController.update)
    .delete(roleController.delete);

// Gioi tinh
var genderController = require('./controllers/genderController');
// gender routes
router.route('/genders')
    .get(genderController.index)
    .post(genderController.new);
router.route('/genders/:gender_id')
    .get(genderController.view)
    .patch(genderController.update)
    .put(genderController.update)
    .delete(genderController.delete);

// Tai khoan
var accountController = require('./controllers/accountController');
// account routes
router.route('/accounts')
    .get(accountController.index)
    .post(accountController.new);
router.route('/accounts/:account_id')
    .get(accountController.view)
    .patch(accountController.update)
    .put(accountController.update)
    .delete(accountController.delete);

// Ke hoach
var planController = require('./controllers/planController');
// plan routes
router.route('/plans')
    .get(planController.index)
    .post(planController.new);
router.route('/plans/:plan_id')
    .get(planController.view)
    .patch(planController.update)
    .put(planController.update)
    .delete(planController.delete);

// Thong tu
var documentController = require('./controllers/documentController');
// document routes
router.route('/documents')
    .get(documentController.index)
    .post(documentController.new);
router.route('/documents/:document_id')
    .get(documentController.view)
    .patch(documentController.update)
    .put(documentController.update)
    .delete(documentController.delete);

// Ket qua
var resultController = require('./controllers/resultController');
// result routes
router.route('/results')
    .get(resultController.index)
    .post(resultController.new);
router.route('/results/:result_id')
    .get(resultController.view)
    .patch(resultController.update)
    .put(resultController.update)
    .delete(resultController.delete);

// Don vi tinh
var measureUnitController = require('./controllers/measureUnitController');
// measureUnit routes
router.route('/measureUnits')
    .get(measureUnitController.index)
    .post(measureUnitController.new);
router.route('/measureUnits/:measureUnit_id')
    .get(measureUnitController.view)
    .patch(measureUnitController.update)
    .put(measureUnitController.update)
    .delete(measureUnitController.delete);

// Quan nhan
var soldierController = require('./controllers/soldierController');
// soldier routes
router.route('/soldiers')
    .get(soldierController.index)
    .post(soldierController.new);
router.route('/soldiers/:soldier_id')
    .get(soldierController.view)
    .patch(soldierController.update)
    .put(soldierController.update)
    .delete(soldierController.delete);

// Export API routes
module.exports = router;