// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8081;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});
app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
  socket.on('start', function(msg){
  console.log("HUG");
	var STOP = false;
	socket.on('stop', function(msg) {
  console.log("HUG");
		STOP = true;
    socket.emit('input', 'Got cant stop wont stop!');
	});
    socket.emit('input', 'Got it!');
  });
});
