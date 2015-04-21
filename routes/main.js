'use strict';

module.exports = function(app) {
  var moment    = require('moment');
  var validator = require('validator');

  // example code grabbed from da-forum
  // var User = require('.././models/user');
  // var Thread  = require('.././models/thread');
  // var Reply  = require('.././models/reply');

  var renderTemplate = function(req, res){
    res.render('index.html', {title: 'Welcome to Daisy'});
  }

  app.all('*'                 , renderTemplate);
};