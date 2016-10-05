// // action types
// const VOTE_UP = 'VOTE_UP';


// // action creators
// export const voteUp = (id) => ({
//   type: VOTE_UP,
//   payload: { id },
// });

// const defaultWeeks = [{
//   id: '0',
//   title: 'Week 1',
//   categories: [
//     { name: 'React', id: 1 },
//     { name: 'React-Router', id: 2 },
//   ],
// }, {
//   id: '1',
//   title: 'Week 2',
//   categories: [
//     { name: 'Redux', id: 3 },
//     { name: 'Functional Programming', id: 4 },
//   ],
// }, {
//   id: '2',
//   title: 'Week 3',
//   categories: [
//     { name: 'Node', id: 5 },
//     { name: 'Express', id: 6 },
//     { name: 'Async', id: 7 },
//   ],
// }];
// // all changes to Post and Week data here
// const reducer = (weeks = defaultWeeks, action) => {
//   console.log(weeks);
//   console.log('VOTE_UP');
//   switch (action.type) {
//     case VOTE_UP:
//       return weeks.map((week) => {
//         if (action.payload.id === week.id) {
//           week.votes += 1;
//         }
//         return week;
//       });
//     default:
//       return week;
//   }
// };


// export default reducer;