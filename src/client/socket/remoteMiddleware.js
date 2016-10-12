const remoteMiddleware = socket => store => next => action => {
  console.log('remote', store.getState(), action);
  socket.emit('state', action);
  console.log('remote', action);
  return next(action);
};

export default remoteMiddleware;
