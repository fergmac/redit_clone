const CREATE_USER = 'CREATE_USER';
const SAVE_FORM = 'SAVE_FORM';

const saveForm = (form) => ({
  type: SAVE_FORM,
  payload: { form },
});
exports.saveForm = saveForm;

const createUser = (user) => ({
  type: CREATE_USER,
  payload: { user },
});
exports.saveForm = saveForm;

const saveUser = (newUser) => (dispatch) => fetch('/login', {
  method: 'POST',
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
  body: JSON.stringify(newUser),
}).then((savedUser) => {
  dispatch(createUser(savedUser));
});
exports.savedUser = saveUser;


const reducer = (login = [], action) => {
  switch (action.type) {
    case SAVE_FORM:
      return action.payload.form;
    default:
      return login;
  }
};

exports.default = reducer;
