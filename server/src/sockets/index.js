/**
 * Socket.io configuration
 */

function onDisconnect(/*socket*/) {
}

function onConnect(socket) {
  // When the client emits 'info', this listens and executes
  socket.on('info', data => {
    socket.log(JSON.stringify(data, null, 2));
  });

  socket.on('post/newMessage', data => {
    socket.log(JSON.stringify(data, null, 2));
    // socket.emit('action', { type: 'SEND_MESSAGE_SUCCESS', response: data.response });
  });

  // Insert sockets below
  require('./posts').register(socket);
}

export const register = (socketio) => {
  socketio.on('connection', (socket) => {
    socket.address = `${socket.request.connection.remoteAddress}:${socket.request.connection.remotePort}`;

    socket.connectedAt = new Date();

    socket.log = (...data) => {
      console.log(`SocketIO ${socket.nsp.name} [${socket.address}]`, ...data);
    };

    // Call onDisconnect.
    socket.on('disconnect', () => {
      onDisconnect(socket);
      socket.log('DISCONNECTED');
    });

    // Call onConnect.
    onConnect(socket);
    socket.log('CONNECTED');
  });
};
