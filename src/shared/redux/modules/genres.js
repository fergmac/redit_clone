// action types
const LOAD_GENRES = 'LOAD_GENRES';
// action creators
const loadGenres = (genres) => ({
  type: LOAD_GENRES,
  payload: { genres },
  meta: { remote: true },
});
exports.loadGenres = loadGenres;

const fetchGenres = () => (dispatch) => fetch('/').then((genres) => {
  genres.json().then(theGenres => dispatch(loadGenres(theGenres)));
});
exports.fetchGenres = fetchGenres;

// const defaultGenres = [{
//   id: '0',
//   title: 'Jazz',
//   artists: [
//     { name: 'Eddie Lang', id: 1 },
//     { name: 'Ernest Ranglin', id: 2 },
//   ],
// }, {
//   id: '1',
//   title: 'Soul',
//   artists: [
//     { name: 'Sam & Dave', id: 3 },
//     { name: 'Solange', id: 4 },
//   ],
// }, {
//   id: '2',
//   title: 'Blues',
//   artists: [
//     { name: 'Rev. Gary Davis', id: 5 },
//     { name: 'Henry Thomas', id: 6 },
//     { name: 'Elizabeth Cotton', id: 7 },
//   ],
// }];

// all changes to Week data here
const reducer = (genres = [], action) => {
  switch (action.type) {
    case LOAD_GENRES:
      const output = genres.concat(action.payload.genres);
      return output;
    default:
      return genres;
  }
};

exports.default = reducer;
