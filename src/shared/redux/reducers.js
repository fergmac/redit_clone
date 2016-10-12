const combineReducers = require('redux').combineReducers;
const weeks = require('./modules/weeks.js').default;
const posts = require('./modules/posts.js').default;

module.exports = combineReducers({
  weeks,
  posts,
});
