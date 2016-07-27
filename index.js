var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('user connected');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log(msg);
  });
});

http.listen(4201, function(){
  console.log('listening on *:4201');
});
