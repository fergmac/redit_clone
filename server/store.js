const createStore = require('redux').createStore;
const reducers = require('../src/shared/redux/reducers');

module.exports = createStore(reducers, {});
