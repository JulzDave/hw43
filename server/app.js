var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


var indexRouter = require('./routes/index');
var moviesAPIRouter = require('./routes/moviesAPI');
mongoose.connect('mongodb://localhost/movies2', { useNewUrlParser: true });
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/movies', moviesAPIRouter);

module.exports = app;
