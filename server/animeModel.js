var mongoose = require('mongoose');
// Setup schema
var animeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    director: String,
    production: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Anime = module.exports = mongoose.model('anime', animeSchema);
module.exports.get = function (callback, limit) {
    Anime.find(callback).limit(limit);
}