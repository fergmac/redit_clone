// action types
const VOTE_UP = 'VOTE_UP';


// action creators
export const voteUp = (id) => ({
  type: VOTE_UP,
  payload: { id },
});

const defaultPosts = [{
  id: '0',
  author: 'Mackenzie',
  votes: 0,
  categories: [
    'React',
  ],
  title: 'React!!!!',
  description: 'Some React resource',
  link: '//github.com/react',
}, {
  id: '1',
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
  console.log(posts);
  console.log('VOTE_UP');
  switch (action.type) {
    case VOTE_UP:
      return posts.map((post) => {
        if (action.payload.id === post.id) {
          post.votes += 1;
        }
        console.log(posts);
        return post;
      });
    default:
      return posts;
  }
};

export default reducer;


// better?

const changeIfIdMatches = (id, fn, key) => (item) => {
  if (id === item.id) {
    item[key] = fn(item[key]);
  }
  console.log(item);
  return item;
};

const addOne = x => x + 1;
const subtractOne = x => x - 1;
const matchById = id => id === x.id;

const reducer = (posts = defaultPosts, action) => {
  console.log(posts);
  console.log('VOTE_UP');
  switch (action.type) {
    case VOTE_UP:
      return posts.map(changeIfIdMatches(action.payload.id, addOne, 'votes'));
    case VOTE_DOWN:
      return posts.map(changeIfIdMatches(action.payload.id, subtractOne, 'votes'));
    default:
      return posts;
  }
};
