//Socket manager for socket.io

var socketManager = function(io) {

    io.on('connection', function(socket) {
        socket.on('echo', function(msg) {

            io.emit('chat message', msg);
        });
    });
}

module.exports = socketManager;
