// action types
// const VOTE_UP = 'VOTE_UP';


// action creators
// export const voteUp = (id) => ({
//   type: VOTE_UP,
//   payload: { id },
// });

const defaultWeeks = [{
  id: '0',
  title: 'Week 1',
  categories: [
    { name: 'React', id: 1 },
    { name: 'React-Router', id: 2 },
  ],
}, {
  id: '1',
  title: 'Week 2',
  categories: [
    { name: 'Redux', id: 3 },
    { name: 'Functional Programming', id: 4 },
  ],
}, {
  id: '2',
  title: 'Week 3',
  categories: [
    { name: 'Node', id: 5 },
    { name: 'Express', id: 6 },
    { name: 'Async', id: 7 },
  ],
}];
// all changes to Week data here
const reducer = (weeks = defaultWeeks) => weeks;

export default reducer;
