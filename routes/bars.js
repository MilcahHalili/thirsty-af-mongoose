var express = require('express');
var router = express.Router();
// Add bars controller
var barsCtrl = require('../controllers/bars');

/* GET /bars/index */
router.get('/', barsCtrl.index);

// GET /bars/new
router.get('/new', barsCtrl.new);

// GET /bars/create
router.post('/', barsCtrl.create);

module.exports = router;
