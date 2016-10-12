import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducers from '../shared/redux/reducers';
import remoteMiddleware from './socket/remoteMiddleware';
import socket from './socket';

const logger = createLogger();

const middlewares = applyMiddleware(reduxThunk, remoteMiddleware(socket), logger);

const store = createStore(reducers, middlewares);

export default store;
