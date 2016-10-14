// @flow
// action types
const VOTE_UP = 'VOTE_UP';
const SORT_BY_POPULARITY = 'SORT_BY_POPULARITY';
const SORT_BY_NEWEST = 'SORT_BY_NEWEST';
const LOAD_ALBUMS = 'LOAD_ALBUMS';
const STATE_UPDATE = 'STATE_UPDATE';

// sort votes function
const sortByKey = (key, order = 1) => (a, b) => {
  switch (true) {
    case a[key] < b[key]:
      return (1 * order);
    case a[key] > b[key]:
      return (-1 * order);
    default:
      return 0;
  }
};
// sort dates function
// const sortByDate = (a, b) => {
//   switch (true) {
//     case new Date(a) > new Date(b):
//       return 1;
//     case new Date(a) < new Date(b):
//       return -1;
//     default:
//       return 0;
//   }
// };

// action creators
const loadAlbums = (albumId) => ({
  type: LOAD_ALBUMS,
  payload: { albumId },
});
exports.loadAlbums = loadAlbums;

const voteUp = (id) => ({
  type: VOTE_UP,
  payload: { id },
  meta: { remote: true },
});
exports.voteUp = voteUp;

const sortByPopularity = () => ({
  type: SORT_BY_POPULARITY,
  meta: { remote: true },
});
exports.sortByPopularity = sortByPopularity;

const sortByNewest = () => ({
  type: SORT_BY_NEWEST,
});
exports.sortByNewest = sortByNewest;


const defaultAlbums = [{
  id: 1,
  author: 'Eddie Lang',
  voters: new Set(),
  votes: 1,
  date: 'Fri Oct 07 2016 15:24:13 GMT-0700 (PDT)',
  albumId: 1,
  title: 'Pioneer of Jazz Guitar',
  description: '1927-1939 acoustic jazz guitar',
  link: 'https://www.youtube.com/watch?v=K1Kw8L6rYt0',
}, {
  id: 2,
  author: 'Ernest Ranglin',
  voters: new Set(),
  votes: 5,
  date: 'Fri Oct 07 2016 15:24:13 GMT-0700 (PDT)',
  albumId: 2,
  title: 'Jazz Jamaica',
  description: 'Jamaican Jazz Guitar',
}, {
  id: 3,
  author: 'Sam & Dave',
  voters: new Set(),
  votes: 5,
  date: 'Fri Oct 07 2016 15:24:13 GMT-0700 (PDT)',
  albumId: 3,
  title: 'Soul Men',
  description: '1967 R&B soul duo',
}, {
  id: 4,
  author: 'Solange',
  voters: new Set(),
  votes: 5,
  date: 'Fri Oct 07 2016 15:24:13 GMT-0700 (PDT)',
  albumId: 4,
  title: 'A Seat At The Table',
  description: 'American Singer Songwriter',
}, {
  id: 5,
  author: 'Rev. Gary Davis',
  voters: new Set(),
  votes: 5,
  date: 'Fri Oct 07 2016 15:24:13 GMT-0700 (PDT)',
  albumId: 5,
  title: 'Harlem Street Singer',
  description: '1960\'s fingerstyle guitar',
}, {
  id: 6,
  author: 'Henry Thomas',
  voters: new Set(),
  votes: 5,
  date: 'Fri Oct 07 2016 15:24:13 GMT-0700 (PDT)',
  albumId: 6,
  title: 'Texas Worried Blues',
  description: 'Pre War Country Blues',
}, {
  id: 7,
  author: 'Elizabeth Cotton',
  voters: new Set(),
  votes: 5,
  date: 'Fri Oct 07 2016 15:24:13 GMT-0700 (PDT)',
  albumId: 7,
  title: 'Shake Sugaree',
  description: '1960\'s fingerstyle guitar',
},

];


// all changes to Post and Week data here
const reducer = (albums = defaultAlbums, action) => {
  switch (action.type) {
    // case LOAD_POSTS:
    //   return posts.filter((post) => parseInt(action.payload.lessonId, 10) === post.id);
    case VOTE_UP:
      return albums.map((album) => {
        if (action.payload.id === album.id) {
          // post.votes += 1;
          album.voters.add(action.clientId); // do in DB
          album.votes = album.voters.size;
        }
        return album;
      });
    case SORT_BY_POPULARITY:
      return albums.sort(sortByKey('votes')).slice();
    case SORT_BY_NEWEST:
      return albums.sort(sortByKey('date')).slice();
      // add date to data array
    case STATE_UPDATE:
      console.log(action.payload);
      return action.payload.albums;
    default:
      return albums;
  }
};

exports.default = reducer;


// better?

// const changeIfIdMatches = (id, fn, key) => (item) => {
//   if (id === item.id) {
//     item[key] = fn(item[key]);
//   }
//   console.log(item);
//   return item;
// };

// const addOne = x => x + 1;
// const subtractOne = x => x - 1;
// const matchById = id => id === x.id;

// const reducer = (posts = defaultPosts, action) => {
//   console.log(posts);
//   console.log('VOTE_UP');
//   switch (action.type) {
//     case VOTE_UP:
//       return posts.map(changeIfIdMatches(action.payload.id, addOne, 'votes'));
//     case VOTE_DOWN:
//       return posts.map(changeIfIdMatches(action.payload.id, subtractOne, 'votes'));
//     default:
//       return posts;
//   }
// };
