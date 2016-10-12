const remoteMiddleware = socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    delete action.meta;
    action.clientId = localStorage.getItem('clientId');
    socket.emit('state', action);
  }
  console.log('remote', store.getState(), action);
  console.log('remote', action);
  return next(action);
};

export default remoteMiddleware;
