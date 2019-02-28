var express = require('express');
var router = express.Router();

/*
// var app = require('express')();
var http = require('http').Server(express);
var io = require('socket.io')(http);
// var port = process.env.PORT;
var port = 3000


// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        io.emit('location', { player: "mark", x: 12, y: 5 })
        io.emit('chat message', msg);
    });
});
http.listen(port, function() {
    console.log('listening on *:' + port);
});
*/

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


module.exports = router;
