const combineReducers = require('redux').combineReducers;
const genres = require('./modules/genres.js').default;
const albums = require('./modules/albums.js').default;

module.exports = combineReducers({
  genres, // weeks
  albums, // posts
});
