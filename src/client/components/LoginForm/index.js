import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './style.css';
import { connect } from 'react-redux';
import { saveUser } from '../../../shared/redux/modules/users';
import { TextField } from 'redux-form-material-ui';

const validate = values => {
  const errors = {};
  const requiredFields = ['email', 'password'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

class LoginForm extends PureComponent {
  componentDidMount() {
    this.props.saveUser({
      email: 'f.macconnell@gmail.com',
      password: 'password',
    });
    // this.refs.name
    //   .getRenderedComponent()
    //   .getRenderedComponent()
    //   .focus();
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className={styles.loginFormPage}>
        <h1>LoginForm</h1>
        <form onSubmit={handleSubmit}>
          <Field name="email" component={TextField} type="text" placeholder="email" />
          <Field name="password" component={TextField} type="password" placeholder="password" />
          <div className={styles.loginButtons}>
            <button type="submit" disabled={pristine || submitting}>Login</button>
            <button type="submit" disabled={pristine || submitting} onClick={reset}>Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  saveUser: (newUser) => {
    dispatch(saveUser(newUser));
  },
});


// export default reduxForm({
//   form: 'login',
//   validate,
// })(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'login',
  validate,
})(LoginForm));
