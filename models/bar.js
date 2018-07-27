var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var barSchema = new Schema({
    name: {
        type: String,
        required: true    
    },
    location: String,
    beers: [{
        type: Schema.Types.ObjectId,
        ref: 'Beer'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Bar', barSchema);