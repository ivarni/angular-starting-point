var http = require('http');
var express = require('express');
var config = require('./config.js');

var app = express();
var server = http.createServer(app);

app.use(express.logger());
app.use(express.bodyParser());
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

require('./lib/routes/static').addRoutes(app, config);
require('./lib/routes/appFile').addRoutes(app, config);

server.listen(config.server.listenPort, 'localhost', 511, function() {

});

console.log('Server listening on port: ' + config.server.listenPort);