const combineReducers = require('redux').combineReducers;
const genres = require('./modules/genres.js').default;
const albums = require('./modules/albums.js').default;
const users = require('./modules/users.js').default;
const artists = require('./modules/artists.js').default;
const routerReducer = require('react-router-redux').routerReducer;
const form = require('redux-form').reducer;

module.exports = combineReducers({
  genres, // genres
  albums, // posts
  users,
  artists,
  routing: routerReducer,
  form,
});
