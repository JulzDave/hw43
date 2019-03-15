var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title:  String,
  length: Number,
  image: String,
  genre: String
});

var Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;