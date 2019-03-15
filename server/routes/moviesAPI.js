var express = require('express');
var router = express.Router();
Movie = require('../models/movies.model');
Genre = require('../models/genres.model');


/* GET users listing. */
router.get('/genres', function (req, res, next) {
  Genre.find().then(data => {
    res.json(data)
  })
});

router.get('/', function (req, res, next) {
  Movie.find().then(data => {
    res.json(data)
  })
});

router.delete('/:id', async function (req, res, next) {
  var deleted = await Movie.remove({
    _id: req.params.id
  })
  await res.json(deleted)
});

router.post('/', function (req, res, next) {

  var newMovie = new Movie({
    title: req.body.title,
    length: req.body.length,
    image: req.body.image,
    genre: req.body.genre
  });

  newMovie.save(function (err, doc) {
    if (err) throw err;
    res.json(doc)
  });
});


router.put('/:id', function (req, res, next) {


  Movie.findByIdAndUpdate(req.params.id,
    {
      $set: {
        title: req.body.title,
        length: req.body.length,
        image: req.body.image,
        genre: req.body.genre,

      }
    },
    {
      new: true
    },

    function (err, updatedMovie) {
      if (err) throw err;
      res.json(updatedMovie)
    }
  )

});

module.exports = router;
