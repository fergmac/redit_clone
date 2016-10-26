const CREATE_USER = 'CREATE_USER';
const SAVE_FORM = 'SAVE_FORM';

const saveForm = (form) => ({
  type: SAVE_FORM,
  payload: { form },
});
exports.saveForm = saveForm;

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


const reducer = (users = [], action) => {
  switch (action.type) {
    case CREATE_USER:
      return users.concat(action.payload.newUser);
    // case SAVE_FORM:
    //   return action.payload.form;
    default:
      return users;
  }
};

exports.default = reducer;
