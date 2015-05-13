'use strict';

module.exports = function(app, io) {
    var https = require('https');

    var renderTemplate = function(req, res){
        res.render('splash.html', {title: 'Welcome to Daze.'});
    };

    var home = function(req, res){
        res.render('index.html', {title: 'Daze'});
    };

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

    app.get('/', renderTemplate);
    app.get('/home', home);
};
