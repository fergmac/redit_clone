import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const logger = createLogger();

const middlewares = applyMiddleware(reduxThunk, logger);

const store = createStore(reducers, middlewares);

export default store;
