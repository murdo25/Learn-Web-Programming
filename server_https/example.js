var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var app = express();
var options = {
    host: '18.234.104.123',
    key: fs.readFileSync('ssl/server.key'),
    cert: fs.readFileSync('ssl/server.crt')
};
// OPEN THESE PORTS IN AWS

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);
app.get('/', function(req, res) {
    res.send('Hello from Express');
});
