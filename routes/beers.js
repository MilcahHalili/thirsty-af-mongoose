var express = require('express');
var router = express.Router();
//Add beers controller
var beersCtrl = require('../controllers/beers');

// GET /beers/index
router.get('/', beersCtrl.index);

// GET /beers/new
router.get('/new', beersCtrl.new);

// POST /beers/create
router.post('/', beersCtrl.create);

// GET /beers/show
router.get('/:id', beersCtrl.show);

module.exports = router;