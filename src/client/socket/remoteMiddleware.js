
/* eslint-ignore */
const remoteMiddleware = socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    delete action.meta;
    action.clientId = localStorage.getItem('clientId');
    socket.emit('state', action);
  }
  return next(action);
};

export default remoteMiddleware;
