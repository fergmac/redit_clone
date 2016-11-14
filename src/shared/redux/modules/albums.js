// @flow
// action types
export const VOTE_UP = 'VOTE_UP';
export const SORT_BY_POPULARITY = 'SORT_BY_POPULARITY';
const SORT_BY_NEWEST = 'SORT_BY_NEWEST';
export const LOAD_ALBUMS = 'LOAD_ALBUMS';
const STATE_UPDATE = 'STATE_UPDATE';
export const CREATE_ALBUM = 'CREATE_ALBUM';
// const CREATE_USER = 'CREATE_USER';

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
const createAlbum = (newAlbum) => ({
  type: CREATE_ALBUM,
  payload: { newAlbum },
  meta: { remote: true },
});
const loadAlbums = (albums) => ({
  type: LOAD_ALBUMS,
  payload: { albums },
  meta: { remote: true },
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

const saveAlbum = (newAlbum) => (dispatch) => fetch('/api/albums/new', {
  method: 'POST',
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
  body: JSON.stringify(newAlbum),
}).then((savedAlbum) => {
  dispatch(createAlbum(savedAlbum));
});
exports.saveAlbum = saveAlbum;

const fetchAlbums = () => (dispatch) => fetch('/api/albums').then((albums) => {
  albums.json().then(theAlbums => dispatch(loadAlbums(theAlbums)));
});
exports.fetchAlbums = fetchAlbums;

// ];
/* eslint-disable */
// all changes to Post and Week data here
const reducer = (albums = [], action) => {
  switch (action.type) {
    case CREATE_ALBUM:
      return albums.concat(action.payload.newAlbum);
    case LOAD_ALBUMS:
      const output = albums.concat(action.payload.albums);
      return output;
      // return action.payload.albums.filter((album) => parseInt(action.payload.artistId, 10) === album.id);
    case VOTE_UP:
      return albums.map((album) => {
        if (action.payload.id === album.id) {
          // post.votes += 1;
          album.voters.add(payload.clientId); // do in DB
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
