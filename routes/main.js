'use strict';

module.exports = function(app) {
  // var moment    = require('moment');
  // var validator = require('validator');

  // example code grabbed from da-forum
  // var User = require('.././models/user');
  // var Thread  = require('.././models/thread');
  // var Reply  = require('.././models/reply');

  var renderTemplate = function(req, res){
    res.render('index.html', {title: 'Welcome to Daze.'});
  };

  var renderSplash = function(req, res){
    res.render('splash.html', {title: 'Welcome to Daze.'});
  };

  app.get('/', renderTemplate);
  app.get('/splash', renderSplash);
};
