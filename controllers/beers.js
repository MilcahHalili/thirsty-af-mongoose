var Beer = require('../models/beer');

module.exports = {
    index: index
}

function index(req, res, next) {
    Beer.find({}, function(err, beers) {
        if (err) return next(err);
        res.render('beers/index', { beers });
    });
}