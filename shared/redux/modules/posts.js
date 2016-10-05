// action types
const VOTE_UP = 'VOTE_UP';
const SORT_BY_POPULARITY = 'SORT_BY_POPULARITY';


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
// action creators
export const voteUp = (id) => ({
  type: VOTE_UP,
  payload: { id },
});

export const sortByPopularity = () => ({
  type: SORT_BY_POPULARITY,
});

export const voteUpSort = (id) => (dispatch) => {
  dispatch(voteUp(id));
  dispatch(sortByPopularity());
};

const defaultPosts = [{
  id: 0,
  author: 'Mackenzie',
  votes: 0,
  categories: [
    'React',
  ],
  title: 'React!!!!',
  description: 'Some React resource',
  link: '//github.com/react',
}, {
  id: 1,
  author: 'Shawn',
  votes: 5,
  categories: [
    'React',
  ],
  title: 'React ?',
  description: 'Some React resource',
  link: '//github.com/react',
}];


// all changes to Post and Week data here
const reducer = (posts = defaultPosts, action) => {
  switch (action.type) {
    case VOTE_UP:
      return posts.map((post) => {
        if (action.payload.id === post.id) {
          post.votes += 1;
        }
        return post;
      });
    case SORT_BY_POPULARITY:
      return posts.sort(sortByVotes('votes'));
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
