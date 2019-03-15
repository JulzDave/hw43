var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var genreSchema = new Schema({
  genre:  String,
  movies: Array
});

var Genre = mongoose.model('genre', genreSchema);

module.exports = Genre;