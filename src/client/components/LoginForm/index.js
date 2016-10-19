import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './style.css';

class LoginForm extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);
    return (
      <div className={styles.loginFormPage}>
        <h1>LoginForm</h1>
        <form onSubmit={handleSubmit((fields) => console.log(fields))}>
          <Field
            name="email"
            component="input"
            type="text"
          />
          <Field
            name="password"
            component="input"
            type="password"
          />
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default reduxForm({
  form: 'login',
})(LoginForm);


// import React from 'react';
// import styles from './style.css';

// const LoginForm = () => (
//   <div className={styles.loginFormPage}>
//     <h1>Login Form</h1>
//   </div>
// );

// export default LoginForm;
