var Beer = require('../models/beer');

module.exports = {
    index: index,
    new: newBeer,
    create: create
}

function index(req, res, next) {
    Beer.find({}, function(err, beers) {
        if (err) return next(err);
        res.render('beers/index', { beers });
    });
}

function newBeer(req, res) {
    res.render('beers/new');
}

function create(req, res) {
    var beer = new Beer(req.body);
    beer.save(function(err) {
        if (err) return res.render('beers/new');
        console.log(bar);
        res.redirect(`/beers/${beer.id}`);
    });
}