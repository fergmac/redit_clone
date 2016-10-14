import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducers from '../shared/redux/reducers';
import remoteMiddleware from './socket/remoteMiddleware';
import socket from './socket';

const middlewareList = [reduxThunk, remoteMiddleware(socket)];

if (process.env.NODE_ENV !== 'PRODUCTION') {
  const logger = createLogger({ diff: true });
  middlewareList.push(logger);
}

const middlewares = applyMiddleware(...middlewareList);

const store = createStore(reducers, middlewares);

export default store;
