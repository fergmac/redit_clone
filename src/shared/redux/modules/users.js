import { browserHistory } from 'react-router';

const CREATE_USER = 'CREATE_USER';
const SAVE_FORM = 'SAVE_FORM';
// const LOGIN_USER = 'LOGIN_USER';
// const SIGNUP_USER = 'SIGNUP_USER';
// const LOGOUT_USER = 'LOGOUT_USER';
const AUTH_USER = 'AUTH_USER';
const UNAUTH_USER = 'AUTH_USER';

// const logoutUser = () => ({
//   type: LOGOUT_USER,
//   payload: { },
// });
// exports.logoutUser = logoutUser;

// const loginUser = () => ({
//   type: LOGIN_USER,
//   payload: { },
//   meta: { remote: true },
// });
// exports.loginUser = loginUser;
// const loginUser = () => ({
//   type: LOGIN_USER,
//   payload: { },
//   meta: { remote: true },
// });
// exports.loginUser = loginUser;

const authUser = () => ({
  type: AUTH_USER,
  payload: { },
  meta: { remote: true },
});
exports.authUser = authUser;

const unauthUser = () => ({
  type: UNAUTH_USER,
  payload: {},
  meta: { remote: true },
});
exports.unauthUser = unauthUser;

const createUser = (newUser) => ({
  type: CREATE_USER,
  payload: { newUser },
  meta: { remote: true },
});
exports.createUser = createUser;

const saveUser = (newUser) => (dispatch) => fetch('/login/new', {
  method: 'POST',
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
  body: JSON.stringify(newUser),
}).then((savedUser) => {
  dispatch(createUser(savedUser));
});
exports.savedUser = saveUser;

const loginUser = ({ email, password }) => (dispatch) => fetch('/api/login', {
  method: 'POST',
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
  body: JSON.stringify({ email, password }),
}).then((loggedInUser) => {
  dispatch(authUser(loggedInUser));
});
exports.loginUser = loginUser;

const logOutUser = () => (dispatch) => fetch('/api/logout', {
  method: 'POST',
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
}).then((loggedOutUser) => {
  dispatch(unauthUser(loggedOutUser));
});
exports.logOutUser = logOutUser;
// export function signInUser ({ email, password }) {
//   return function (dispatch) {
//     axios.post('/api/login/', { email, password })
//     .then((response) => {
//       dispatch({ type: AUTH_USER });
//       localStorage.setItem('token', response.data.token);
//       browserHistory.push('/');
//     });
//   };
// }

// export function signUpUser ({ name, email, password }) {
//   return function (dispatch) {
//   axios.post('/api/signup', { name, email, password })
//   .then((response) => {
//     dispatch({ type: AUTH_USER });
//     localStorage.setItem('token', response.data.token);
//     browserHistory.push('/');
//   });
//   };
// }

// export function signOutUser () {
//   return function (dispatch) {
//   axios.post('/api/logout')
//   .then(() => {
//     localStorage.removeItem('token');
//     dispatch({ type: UNAUTH_USER });
//     browserHistory.push('/');
//   });
//   };
// }
/* eslint-disable */
const reducer = (users = { authenticated: false, user: null }, action) => {
// const reducer = (users = [], action) => {
  switch (action.type) {
    case AUTH_USER:
      return { authenticated: true, user: action.payload };
    case UNAUTH_USER:
      return { ...users, authenticated: false };
    case CREATE_USER:
      return users.concat(action.payload.newUser);
    // case SAVE_FORM:
    //   return action.payload.form;
    default:
      return users;
  }
};

exports.default = reducer;
