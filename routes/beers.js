var express = require('express');
var router = express.Router();
//Add beers controller
var beersCtrl = require('../controllers/beers');

// GET /beers/index
router.get('/', beersCtrl.index);

module.exports = router;