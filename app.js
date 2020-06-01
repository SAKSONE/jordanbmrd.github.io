var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path = require('path');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/chat.html');
});

var clients = 0;
var allClients = [];

io.on('connection', (socket) => {
  console.log('> A user connected');

  clients++;
  if (clients != 1){
    io.sockets.emit('broadcast', { description: clients + " clients connected<br><br>" });
  } else {
    io.sockets.emit('broadcast', { description: clients + " client connected<br><br>" });
  }

  socket.on('chat message', (msg, username) => {
    if (msg != "" && msg != null){
    	console.log('Message (' + username + '): ' + msg);
    	io.emit('chat message', msg, username);
    }
  });

  socket.on('disconnect', (username) => {
  	console.log('> ' + username + ' user disconnected');

    clients--;
    if (clients != 1){
      io.sockets.emit('broadcast', { description: clients + " clients connected<br><br>" });
    } else {
      io.sockets.emit('broadcast', { description: clients + " client connected<br><br>" });
    }

    io.emit('disconnect', username);
  });

});

http.listen(3000, () => {
  console.log('listening on *:3000');
});