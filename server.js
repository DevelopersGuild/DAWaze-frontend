'use strict';

var bodyParser    = require('body-parser');
var cookieParser  = require('cookie-parser');
var express       = require('express');
var nunjucks      = require('nunjucks');
var request       = require('request');
var path          = require('path');

// Use middleware
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var SERVER_ADDRESS = process.env.SERVER_ADDRESS || 'localhost';
var SERVER_PORT = process.env.SERVER_PORT || 3000;

// Tell Nunjucks where the templates are stored.
var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('views'),
                                    { autoescape: false });
env.express(app);

// Tell Express to serve static objects from the /public/ directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle 404 Error
app.use(function(req, res, next) {
  res.send('Not Found');
});


var server = app.listen(SERVER_PORT, SERVER_ADDRESS, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('De Anza: Waze listening at http://%s:%s in %s mode.',
    host, port, app.get('env'));
});
