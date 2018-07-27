var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    content: String
}, {
    timestamps: true
});

var beerSchema = new Schema({
    name: String,
    style: {
        type: String,
        enum: ['Lager', 'IPA', 'Piss Water', 'Stout', 'Craft']
    },
    bars: [{
        type: Schema.Types.ObjectId,
        ref: 'Bar'
    }],
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Beer', beerSchema);