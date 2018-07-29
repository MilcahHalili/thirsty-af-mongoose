var express = require('express');
var router = express.Router();
// Add bars controller
var barsCtrl = require('../controllers/bars');

/* GET /bars/index */
router.get('/', barsCtrl.index);

module.exports = router;
