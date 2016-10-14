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
  albums: [
    { name: 'Pioneers of Jazz Guitar', id: 1 },
    { name: 'Jazz Jamaica', id: 2 },
  ],
}, {
  id: '1',
  title: 'Soul',
  albums: [
    { name: 'Soul Men', id: 3 },
    { name: 'A Seat At The Table', id: 4 },
  ],
}, {
  id: '2',
  title: 'Blues',
  albums: [
    { name: 'Harlem Street Singer', id: 5 },
    { name: 'Texas Worried Blues', id: 6 },
    { name: 'Shake Sugaree', id: 7 },
  ],
}];

// all changes to Week data here
const reducer = (genres = defaultGenres) => genres;

exports.default = reducer;
