var Bar = require('../models/bar');

module.exports = {
    index: index
    // show: show
}

function index(req, res, next) {
    Bar.find({}, function(err, bars) {
        if (err) return next(err);
        res.render('bars/index', { bars });
    });
}