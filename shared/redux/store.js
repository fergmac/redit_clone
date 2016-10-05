import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers, {});

console.log(store);

export default store;
