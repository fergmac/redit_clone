// action types
// const VOTE_UP = 'VOTE_UP';

// action creators
// export const voteUp = (id) => ({
//   type: VOTE_UP,
//   payload: { id },
// });

const defaultGenres = [{
  id: '0',
  title: 'Jazz',
  artists: [
    { name: 'Eddie Lang', id: 1 },
    { name: 'Ernest Ranglin', id: 2 },
  ],
}, {
  id: '1',
  title: 'Soul',
  artists: [
    { name: 'Sam & Dave', id: 3 },
    { name: 'Solange', id: 4 },
  ],
}, {
  id: '2',
  title: 'Blues',
  artists: [
    { name: 'Rev. Gary Davis', id: 5 },
    { name: 'Henry Thomas', id: 6 },
    { name: 'Elizabeth Cotton', id: 7 },
  ],
}];

// all changes to Week data here
const reducer = (genres = defaultGenres) => genres;

exports.default = reducer;
