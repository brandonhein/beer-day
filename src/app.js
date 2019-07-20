const app = require('express')();
var server = require('./server');

app.get('/', function (req, res) {
    res.send('Hello World')
  });

server.start(app);