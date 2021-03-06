var Bar = require('../models/bar');

module.exports = {
    index: index,
    new: newBar,
    create: create,
    show: show
}

function index(req, res, next) {
    Bar.find({}, function(err, bars) {
        if (err) return next(err);
        res.render('bars/index', { bars });
    });
}

function newBar(req, res) {
    res.render('bars/new');
}

function create(req, res) {
    var bar = new Bar(req.body);
    bar.save(function(err) {
        if (err) return res.render('bars/new');
        console.log(bar);
        res.redirect(`/bars/${bar.id}`);
    });
}

function show(req, res) {
    Bar.findById(req.params.id).populate('beers').exec((err, bar) => {
        res.render('bars/show', { bar });
    });
}