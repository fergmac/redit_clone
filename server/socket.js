const Server = require('socket.io');

const startSocketServer = (port) => {
  const io = new Server().attach(port);

  io.on('connection', (socket) => {
    console.log('socket connected');

    socket.on('state', (action) => {
      console.log(action);
    });
  });

  console.log(`socket server running on, ${port}`);
};
module.exports = startSocketServer;
