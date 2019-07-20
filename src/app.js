const app = require('express')();
var server = require('./server');
var beerDay = require("./beer-day");
var middleware = require('./middleware');

app.use(function(req, res, next) {
    middleware.gracefulHandle(req, res, next);
});

app.get('/', function (req, res) {
    var json = JSON.stringify(beerDay);
    res.end(json)
  });

app.use(function(err, req, res, next){
    middleware.error(err, res);
});

server.start(app);