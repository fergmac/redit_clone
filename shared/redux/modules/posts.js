// action types
const VOTE_UP = 'VOTE_UP';
const SORT_BY_POPULARITY = 'SORT_BY_POPULARITY';
const SORT_BY_NEWEST = 'SORT_BY_NEWEST';
const LOAD_POSTS = 'LOAD_POSTS';

// sort votes function
const sortByVotes = (key) => (a, b) => {
  switch (true) {
    case a[key] < b[key]:
      return 1;
    case a[key] > b[key]:
      return -1;
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
export const loadPosts = (lessonId) => ({
  type: LOAD_POSTS,
  payload: { lessonId },
});

export const voteUp = (id) => ({
  type: VOTE_UP,
  payload: { id },
});

export const sortByPopularity = () => ({
  type: SORT_BY_POPULARITY,
});

export const sortByNewest = () => ({
  type: SORT_BY_NEWEST,
});

const defaultPosts = [{
  id: 1,
  author: 'Mackenzie',
  votes: 0,
  date: 'Fri Oct 07 2016 15:24:13 GMT-0700 (PDT)',
  lessonId: 1,
  title: 'first React!!!!',
  description: 'Some React resource',
  link: '//github.com/react',
}, {
  id: 2,
  author: 'Shawn',
  votes: 5,
  date: 'Fri Oct 07 2016 15:24:13 GMT-0700 (PDT)',
  lessonId: 2,
  title: 'second React ?',
  description: 'Some React resource',
}];


// all changes to Post and Week data here
const reducer = (posts = defaultPosts, action) => {
  switch (action.type) {
    // case LOAD_POSTS:
    //   return posts.filter((post) => parseInt(action.payload.lessonId, 10) === post.id);
    case VOTE_UP:
      return posts.map((post) => {
        if (action.payload.id === post.id) {
          post.votes += 1;
        }
        return post;
      });
    case SORT_BY_POPULARITY:
      return posts.sort(sortByVotes('votes'));
   // case SORT_BY_NEWEST:
      // return posts.sort(sortByDate()).map(date => {(moment(date).fromNow())})
    default:
      return posts;
  }
};

export default reducer;


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
