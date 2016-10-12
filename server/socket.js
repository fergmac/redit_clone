const store = require('./store');
const Server = require('socket.io');
const uuid = require('./auth');

const startSocketServer = (port) => {
  const io = new Server().attach(port);

  io.on('connection', (socket) => {
    console.log('socket connected');
    console.log(uuid());
    socket.emit('clientId', uuid());
    socket.emit('state', {
      type: 'STATE_UPDATE',
      payload: store.getState(),
    });

    socket.on('state', (action) => {
      // check for clientId, if none, emit a new clientId
      if (!action.clientId) {
        socket.emit('clientId', uuid());
        return;
      }
      // takes action through actions reducer and store

      store.dispatch.bind(store)(action);

      console.log(action);
      // listens to store for data changing and then emits action of new state, this also does our syncing
      store.subscribe(() => {
        // absolute truth of the data is served in the server
        // socket.emit('state', {
        //   type: 'STATE_UPDATE',
        //   payload: store.getState(),
        // });
      });
    });
  });

  console.log(`socket server running on, ${port}`);
};
module.exports = startSocketServer;
