'use strict';

var API = require('../models/api');

module.exports = function(app, io) {

  function renderStatic(template, title) {
    return function(req, res) {

      res.render('splash.html', {title: title});

    };
  }

  function renderMap(req, res) {
    API.getMap({}, function(err, clientErr, _res) {

      if (err) {
        console.error(err);
        res.send(err.message);
      } else if (clientErr) {
        res.send(clientErr.message);
      } else {
        res.render('index.html',
          {title: 'Home :: Daze', markers: _res.markers}
        );
      }

    });
  }

    io.on('connection', function(socket){
        socket.on('marker', function(obj){
            console.log('received marker obj: ' + obj);
        })

        socket.on('onlineUsers', function(num) {
            console.log('online users: ' + num);
        });

        socket.on('disconnect', function(){
            console.log('user disconnected.');
        })
    })

    app.get('/', renderStatic('splash.html', 'Welcome to Daze!'));
    app.get('/home', renderMap);
};
